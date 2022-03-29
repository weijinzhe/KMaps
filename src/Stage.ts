/*
 * @Author: wjz
 * @Date: 2021-10-22 14:14:27
 * @LastEditors: wjz
 * @LastEditTime: 2022-03-24 19:27:53
 * @FilePath: /kmaps/src/Stage.ts
 */
import Konva from "./js/konva.min.js"

// import { dragBoundFunc, Hammer } from './_util'
import Hammers from './js/hammer-konva.js'


var EVENT = new CustomEvent('setscale');

/**
 * @description 非地理坐标地图 创建舞台
 * @constructor
 * @extends Konva.Stage
 * @param {Object} attrs
 * 
 * @param {String} attrs.container 地图容器
 * @param {Number} attrs.width 地图宽度
 * @param {Number} attrs.height 地图高度
 * @param {Number} attrs.scaleMax 最大缩放倍数 默认10
 * @param {Number} attrs.scaleMin 最小缩放倍数 默认0.1
 * 
 * @example
 * var stage = new Stage({})
 */
export default class Stage extends Konva.Stage {
    constructor(attrs:any) {
        attrs.id = 'stage'
        attrs.draggable = true //拖拽
        attrs.dragBoundFunc = dragBoundFunc
        !attrs.scaleMax ? attrs.scaleMax = 10 : null //最大缩放
        !attrs.scaleMin ? attrs.scaleMin = 0.1 : null //最小缩放
        super(attrs);
        // (window as any)._KMap_Stage = this; //将_KMap挂载到window对象上
        window["_KMap"]["_Stage"] = this; //将_KMap挂载到window对象上

        Hammer.bind(this)()
        // let hammer = Hammer.bind(this)
        // hammer()
    }
    /**
     * @description 设置舞台缩放值 功能与 scale一致 但没有返回值，不可获取缩放，只能设置
     * @param {Object} param  参数
     * @param {number} param.x x轴缩放比例
     * @param {number} param.y y轴缩放比例
     */
     setscale(param:any = {x:0,y:0}){
      this.scale(param)
      this.dispatchEvent(EVENT);
    }
    /*
     * @description 获取当前位置画布的中心坐标
     * @returns {x,y} 返回当前舞台中心对应在画布上的坐标位置（已转换缩放问题）
     */
    centre() {
      let {px,py} = this.position() //当前坐标
      let scale = this.scaleX() //x,y同时缩放的，获取其一即可
      let x = (this.attrs.width / 2 - px) / scale,
          y = (this.attrs.height / 2 - py) / scale;
      return{x,y}
    }
}




/*
 * 
 * @param pos 图层拖拽范围限制
 * @returns pos 拖拽后的坐标
 */
function dragBoundFunc(pos: object) {
  let apos = this.absolutePosition() //获取舞台实际位置
  let {
    x,
    y
  }: any = pos //舞台移动位置
  let scope: any = {
    ...pos
  }
  let baseMap = this.findOne('#BaseMap') //获取图片对象
  if (!baseMap) { //舞台没有添加图层，没有可参照图形做范围限制，不可拖拽移动
    return { x: 0, y: 0 }
  }
  let imgPos = baseMap.position() //图片位置
  let img = baseMap.size() //图片尺寸
  let scale = this.scale() // 舞台缩放
  let size = this.size() // 舞台尺寸

  //单独x轴拖拽限制
  if (img.width * scale.x > size.width) { //放大超出屏幕 
    if (apos.x > x) { //左滑
      if (x + (imgPos.x + img.width) * scale.x <= size.width - 200) scope.x = apos.x
    }
    if (apos.x < x) { //右滑 
      if (x >= imgPos.x * -1 * scale.x + 200) scope.x = apos.x
    }
  } else { //未超出屏幕显示范围
    if (apos.x > x) { //左滑
      if (imgPos.x * -1 > x / scale.x + 200) scope.x = apos.x
    }
    if (apos.x < x) { //右滑 
      if (x + (imgPos.x + img.width) * scale.x > size.width + 200) scope.x = apos.x
    }
  }
  //单独y轴拖拽限制
  if (img.height * scale.x > size.height) {
    if (apos.y > y) { //上滑
      if (y + (imgPos.y + img.height) * scale.y < size.height - 200) scope.y = apos.y
    }
    if (apos.y < y) { //下滑 
      if (y >= imgPos.y * -1 * scale.y + 200) scope.y = apos.y
    }
  } else {
    if (apos.y > y) { //上滑
      if (imgPos.y * -1 > y / scale.y + 200) scope.y = apos.y
    }
    if (apos.y < y) { //下滑 
      if (y + (imgPos.y + img.height) * scale.y > size.height + 200) scope.y = apos.y
    }
  }
  return scope
}


/*
 * @description 手势以及鼠标缩放控制
 */
function Hammer() {


  let scaleRange = {
    max: this.attrs.scaleMax,
    min: this.attrs.scaleMin
  }

  let hammer: any = new Hammers(this, { //绑定事件
    domEvents: true
  });
  hammer.get('tap').set({
    enable: false
  });
  hammer.get('pinch').set({
    enable: true
  })

  var scaleStart = new CustomEvent('scalestart', {
    detail: {
      scale: 1,
      pointer: [0, 0]
    }
  });
  var scaleMove = new CustomEvent('scalemove', {
    detail: {
      scale: 1,
      pointer: [0, 0]
    }
  });
  var scaleend = new CustomEvent('scaleend', {
    detail: {
      scale: 1,
      pointer: [0, 0]
    }
  });



  var scaleBy = 1.05;
  var pointer: any = { x: 0, y: 0 }
  let st = null; //鼠标滚轮反馈
  let wheelState = true
  this.on(' pinchstart pinchmove pinchend wheel', (e) => { //鼠标缩放
    e.cancelBubble = true;
    // console.log(e);
    
    //全局缩放事件
    var oldScale = this.scaleX();
    let mousePointTo: any = {},
      newScale = 1,
      newPos = {};
    switch (e.type) {
      case 'wheel': //鼠标滚轮 
        pointer = this.getPointerPosition();
        mousePointTo = {
          x: (pointer.x - this.x()) / oldScale,
          y: (pointer.y - this.y()) / oldScale,
        };
        newScale =
          e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        if (newScale >= scaleRange.max || newScale <= scaleRange.min) {
          return
        }
        newPos = {
          x: pointer.x - mousePointTo.x * newScale,
          y: pointer.y - mousePointTo.y * newScale,
        };
        this.scale({
          x: newScale,
          y: newScale
        });
        this.position(newPos);
        if (wheelState) {
          scaleStart.detail.scale = newScale
          scaleStart.detail.pointer == [pointer.x, pointer.y]
          this.dispatchEvent(scaleStart);
          wheelState = false
        } else {
          scaleMove.detail.scale = newScale
          scaleMove.detail.pointer == [pointer.x, pointer.y]
          this.dispatchEvent(scaleMove);
          wheelState = false
        }
        clearTimeout(st)
        st = setTimeout(() => { //滚动触发间隔50ms为滚动结束
          scaleend.detail.scale = newScale
          scaleend.detail.pointer == [pointer.x, pointer.y]
          this.dispatchEvent(scaleend);
          wheelState = true
        }, 100)
        break;
      case 'pinchstart': //捏放开始
        this.draggable(false)
        pointer = this.getPointerPosition(); //e.evt.gesture.center; //缩放基准点
        scaleStart.detail.scale = this.scaleX()
        scaleStart.detail.pointer == [pointer.x, pointer.y]
        this.dispatchEvent(scaleStart);
        break;
      case 'pinchmove': //捏放中
        mousePointTo = {
          x: (pointer.x - this.x()) / oldScale,
          y: (pointer.y - this.y()) / oldScale,
        };
        newScale = e.evt.gesture.scale > 1 ? oldScale * (scaleBy + 0.04) : oldScale / (scaleBy + 0.04);
        if (newScale >= scaleRange.max || newScale <= scaleRange.min) {
          return
        }
        newPos = {
          x: pointer.x - mousePointTo.x * newScale,
          y: pointer.y - mousePointTo.y * newScale,
        };
        this.scale({
          x: newScale,
          y: newScale
        });
        this.position(newPos);

        scaleMove.detail.scale = newScale
        scaleMove.detail.pointer == [pointer.x, pointer.y]
        this.dispatchEvent(scaleMove);
        break;
      case 'pinchend': //捏放结束
        this.draggable(true)
        this.dispatchEvent(scaleend);

        scaleend.detail.scale = this.scaleX()
        scaleend.detail.pointer == [pointer.x, pointer.y]
        this.dispatchEvent(scaleend);
        break;
    }
  });
}

