/*
 * @Author: wjz
 * @Date: 2022-02-09 14:26:02
 * @LastEditors: wjz
 * @LastEditTime: 2022-02-14 15:46:15
 * @FilePath: /kmaps/src/anchorLine.ts
 */


import Konva from "./js/konva.min";


import {arrayConvert,colorRGBtoHex} from './_util'

import Hammer from "./js/hammer-konva"

interface attrs {
  id: string, //id
  name?: string, //名字
  points: [[number, number], [number, number]] //坐标点数据
  stroke: string, //画笔颜色
  strokeWidth?: number, //画笔宽度
  hitStrokeWidth?: number, // 点击识别范围
  fill?:string, //填充颜色
  dash?:Array<number>, // 虚线数组 详情参照konva.Line
  closed?:boolean, //是否闭合图形
  draggable?:boolean, //是否可拖拽
  anchor?:boolean //是否绘制拖拽锚点 默认为true
  anchorVisible?:boolean, //拖拽锚点是否显示默认 false, anchor 为true时有效
  absoluteSize?:boolean //绝对尺寸，不与舞台一同缩放 默认false
}


let _strokeWidth = 1,_hitStrokeWidth=0 // 画笔默认参数

/**
 * @description 带有拖拽锚点的 Line 允许闭合为多边形
 * @param {String} id id
 * @param {String} name name
 * @param {Array} points 坐标点数据
 * @param {String} stroke 画笔颜色 仅初始化时可设置
 * @param {Number} strokeWidth 画笔宽度 仅初始化时可设置
 * @param {Number} hitStrokeWidth 点击识别范围 仅初始化时可设置
 * @param {String} fill 填充颜色
 * @param {Array} dash  虚线数组 详情参照konva.Line 仅初始化时可设置
 * @param {Boolean} closed 是否闭合图形 仅初始化时可设置
 * @param {Boolean} draggable 是否可拖拽 
 * @param {Boolean} anchor 是否绘制拖拽锚点 默认为true 仅初始化时可设置
 * @param {Boolean} anchorVisible 拖拽锚点是否显示默认 true, anchor 为true时有效 
 * 
 * @param {Boolean} absoluteSize 绝对尺寸，与舞台一同缩放 默认true 仅初始化时可设置
 * 
 * @example 
 * let node = new KMaps.AnchorLine({...})
 */
export default class AnchorLine extends Konva.Group {
  constructor(attrs: attrs) {
    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，与舞台一同缩放
    attrs["anchor"] === false ? null : attrs["anchor"] = true //拖拽锚点

    super(attrs)
    this._strokeWidth = attrs.strokeWidth || 1//宽度默认为1
    this._hitStrokeWidth = attrs.hitStrokeWidth

    // if(attrs.draggable){
      this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
        e.cancelBubble = true;//阻止事件冒泡
      })
    // }
    this._stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage
    this._lineFun(attrs)
    if(attrs['anchor'] !== false){
      attrs.points.forEach((_item: any, _index: any, _array: any) => {
        this._circleFun({ x: _item[0], y: _item[1] }, _index)
      });
    }
    
    let self: any = this

    let hammer = new Hammer(self, { //绑定事件
      domEvents: true,
      recognizers: [
        [Hammer["Press"], {
          time: 500 //长按响应时间
        }]
      ]
    });
    
    //缩放事件监听
    this._stage.addEventListener("scaleend setscale", function (e:any) {
      e.cancelBubble = true;
      let scale = self._stage.scaleX()
      if(self.attrs.absoluteSize){
        self._line.strokeWidth(self._strokeWidth / scale) //缩放边缘线宽度
        if(!self.attrs.closed){
          // self._line.strokeWidth(self._strokeWidth / scale) //缩放线宽度
          self._line.hitStrokeWidth(self._hitStrokeWidth / scale) //缩放点击识别范围
        }
      }
      
      //获取拖拽锚点
      let anchorArr = self.find("._drag_anchor")
      for(let item of anchorArr){ //缩放锚点大小
        item.scale({
          x: 1 / scale,
          y: 1 / scale
        })
      }
    })
  }
  _lineFun(attrs: any) {
    if(!attrs.points){return}
    let scale = this._stage.scale()
    // let rgb = attrs.stroke ? colorHextoRGBA(attrs.stroke, 0.5) : ""
    // let _points = arrayConvert(attrs.points)
    let con = JSON.parse(JSON.stringify(attrs))
    
    con.points = arrayConvert(attrs.points)
    con.strokeWidth = (attrs.strokeWidth|| 1 ) / scale.x
    con.draggable = false
    delete con.id,delete con.name;
    
    let _line = new Konva.Line({
      id: `_line`,
      name: "_line",
      ...con
      // points: _points,
      // closed: attrs.closed,
      // stroke: attrs.stroke,//colorRGBtoHex(attrs.stroke), // rgb转16位颜色值
      // fill: attrs.fill,//rgb,
      // strokeWidth: (attrs.strokeWidth|| 1 ) / scale.x,
      // hitStrokeWidth: attrs.hitStrokeWidth, //自定义图形选取范围 
      // dash:attrs.dash,
    })
    this.add(_line)
    this._line = _line
  }
  _circleFun({ x, y }, index: number) {
    let scale = this._stage.scale()
    let self = this
    let _anchor = new Konva.Circle({
      id: `_drag_anchor-${index}`, //拖拽点id
      name: "_drag_anchor",
      x, y,
      scale:{x:1/scale.x,y:1/scale.y},
      radius: 20,
      fill: 'rgba(255,255,255,0.6)',
      stroke: '#00aaff',
      strokeWidth: 2,
      hitStrokeWidth: this.attrs.hitStrokeWidth, //自定义图形选取范围 
      visible: this.attrs.anchorVisible || false,//super.draggable() || false, //默认显示状态
      // visible: super.draggable() || false, //默认显示状态

      draggable: true,
    })
    this.add(_anchor)
    _anchor.on("dragmove", function (e: any) {
      // console.log(this.attrs.x);
      e.cancelBubble = true;
      let points = [] //拖拽锚点当前坐标
      let anchorArr = self.find("._drag_anchor")
      for (let item of anchorArr) {
        let { x, y } = item.position()
        points.push(x, y)
      }
      self._line.points(points)
    
    })
  }
  
  /**
   * @description 获取或设置图形可拖拽状态
   * @param {boolean} param 可拖拽状态
   */
  draggable(param: boolean) {
    if (!arguments.length) { return super.draggable() }
    super.draggable(param)
    // let anchorArr = this.find("._drag_anchor")
    // for (let item of anchorArr) {
    //   item.visible(param)
    // }
    //防止事件冒泡，提前阻止，拖拽关闭后 移除
    if (param) {
      this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
        e.cancelBubble = true;//阻止事件冒泡
      })
    } else {
      this.off("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom")
    }
    return param
  }
  /**
   * @description 添加点，折线端点 拖拽锚点
   * @param {Array} points 点坐标数组 [x,y] 一次只能添加一个点
   * @returns {Object} this 返回更新后的对象本身
   */
   addPoints(points:[number,number]){
    //添加拖拽锚点
    let index  = this.find("._drag_anchor").length //锚点序号index
    this._circleFun({x:points[0],y:points[1]},index)
    if(!this.attrs.anchor){return}
    let line = this._line.points()
    line.push(points[0],points[1])
    this._line.points(line)
    return this
  }
  /**
   * @description 移除点，线端点 拖拽锚点
   * @param {Array} index 移除的目标点 数组下标位置 index
   * @returns {Object} this 返回更新后的对象本身
   */
  removePoints(index){
    let points = this.getPoints() //获取当前锚点坐标数据
    points.splice(index,1)
    this._line.points(arrayConvert(points))
    //获取需要移除的锚点对象
    let anchor = this.findOne(`#_drag_anchor-${index}`)
    //销毁目标锚点
    if(anchor){anchor.destroy() }
    return this
  }

  /**
   * @description 锚点显示状态 anchor 为ture 可用 
   * @param {boolean} param 显示状态
   * @returns {boolean} anchorVisible 锚点显示状态
   * 
   */
  anchorVisible(param: boolean){
    if (!arguments.length) { return this.attrs.anchorVisible }
    this.attrs.anchorVisible = param
    let anchorArr = this.find("._drag_anchor")
    for (let item of anchorArr) {
      item.visible(param)
    }
    return param
  }
  /**
   * @description 获取当前图形的锚点坐标
   * 
   * @returns 端点坐标 二维数组
   * 
   * @example
   * 
   * let points = node.getPoints() //[[10，10],[2020],...]
   */
  getPoints() {
    let points = this.find("._drag_anchor").map(item => {
      let { x, y } = item.getAbsolutePosition(this.getParent()) //相对父级节点的绝对位置
      return [x, y]
    })
    return points
  }
  /**
   * @description 获取锚点数组
   * @returns {Array} anchor 节点对象
   */
  getAnchor(){
    return this.find("._drag_anchor")
  }
  //二维数组转一维
  // _pointsArray(arr: [number]) {
  //   let points = []
  //   for (let item of arr) {
  //     points.push(item[0], item[1])
  //   }
  //   return points
  // }
  /**
   * @description 克隆对象
   * @param {object} obj json格式详情参考 Konva
   * @returns 克隆后的节点
   */
  clone(obj: any) {
    var node = Konva.Node.prototype.clone.call(this, obj);
    return node as this;
  }
}