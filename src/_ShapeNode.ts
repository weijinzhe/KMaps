
/*
 * @Author: wjz
 * @Date: 2021-11-18 10:08:49
 * @LastEditors: wjz
 * @LastEditTime: 2021-12-27 13:36:23
 * @FilePath: /kmaps/src/_ShapeNode.ts
 */

import Konva from "./js/konva.min";


import { wheelEvent, colorHextoRGBA ,colorRGBtoHex} from './_util'

import Hammer from "./js/hammer-konva"

interface attrs {
  id: string,
  name?: string,
  points: [[number, number], [number, number]]
  color: string,
  dash?:Array<number>,
  colorOpacity?:number,
  strokeWidth?: number,
  hitStrokeWidth?: number,
  draggable?:boolean,
  anchor?:boolean //是否绘制拖拽锚点 默认为true
}


/**
 * @description 
 */
export default class ShapeNode extends Konva.Group {
  constructor(attrs: attrs) {
    super(attrs)
    if(attrs.draggable){
      this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
        e.cancelBubble = true;//阻止事件冒泡
      })
    }
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
  }
  _lineFun(attrs: any) {
    let scale = this._stage.scale()
    // let rgb = attrs.color ? colorHextoRGBA(attrs.color, 0.5) : ""
    let _points = this._pointsArray(attrs.points)
    
    let _line = new Konva.Line({
      id: `_line`,
      name: "_line",
      points: _points,
      closed: attrs.closed,
      stroke: colorRGBtoHex(attrs.color), // rgb转16位颜色值
      fill: attrs.color,//rgb,
      strokeWidth: (attrs.strokeWidth|| 1 ) / scale.x,
      hitStrokeWidth: attrs.hitStrokeWidth, //自定义图形选取范围 
      dash:attrs.dash,
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
      visible: super.draggable() || false, //默认显示状态
      draggable: true,
    })

  //  let _anchorProxy =  new Proxy(_anchor,{ 
  //     set: function (target, propKey, value, receiver) {
        
  //       console.log('改变了');
        
  //       return Reflect.set(target, propKey, value, receiver);
  //     },
  //   })
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
    let anchorArr = this.find("._drag_anchor")
    for (let item of anchorArr) {
      item.visible(param)
    }
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
  //二维数组转一维
  _pointsArray(arr: [number]) {
    let points = []
    for (let item of arr) {
      points.push(item[0], item[1])
    }
    return points
  }
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