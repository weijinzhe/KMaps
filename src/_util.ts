/*
 * @Author: wjz
 * @Date: 2021-10-22 16:20:15
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-13 23:43:01
 * @FilePath: /KMap-ts/src/_util.ts
 */
import Hammers from './js/hammer-konva.js'

/**
 * 
 * @param pos 图层拖拽范围限制
 * @returns pos 拖拽后的坐标
 */
export function dragBoundFunc(pos:object) {
  let apos = this.absolutePosition() //获取舞台实际位置
  let {
    x,
    y
  }:any = pos //舞台移动位置
  let scope:any = {
    ...pos
  }
  let baseMap = this.findOne('#BaseMap') //获取图片对象
  if(!baseMap){ //舞台没有添加图层，没有可参照图形做范围限制，不可拖拽移动
    return {x:0,y:0}
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

/**
 * @description 手势以及鼠标缩放控制
 */
export function Hammer() {
  let scaleRange = {
    max:this.attrs.scaleMax,
    min:this.attrs.scaleMin
  }

  let hammer:any = new Hammers(this, { //绑定事件
    domEvents: true
  });
  hammer.get('pinch').set({
    enable: true
  });

  var scaleBy = 1.02;
  var pointer:any ={x:0,y:0}

  this.on(' pinchstart pinchmove pinchend wheel', (e) => { //鼠标缩放
    e.evt.preventDefault();
    var oldScale = this.scaleX();
    let mousePointTo:any = {},
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
        break;
      case 'pinchstart': //捏放开始
        this.draggable(false)
        pointer = this.getPointerPosition(); //e.evt.gesture.center; //缩放基准点
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
        break;
      case 'pinchend': //捏放结束
        this.draggable(true)
        break;
    }
  });
}


/**
 * @description 鼠标滚轮结束事件
 * @param {Object} target 响应目标
 * @param {Object} callBack 事件结束回调
 */
export function wheelEvent(target:Node,callBack:Function) {
    let st = null;
    target.addEventListener('wheel', function(e) {
      Reflect.defineProperty(e,"type",{
        value:"wheelstart",
        enumerable: false,
        configurable: false,
        writable: true,
      })
      callBack(e)
      clearTimeout(st)
      st = setTimeout(() => {
        Reflect.defineProperty(e,"type",{
          value:"wheelend",
          enumerable: false,
          configurable: false,
          writable: false,
        })
        callBack(e)
      }, 100)
    })
  }

export function scaleConversio(params:any) {
  
}

  