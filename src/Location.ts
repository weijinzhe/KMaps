/*
 * @Author: wjz
 * @Date: 2021-10-29 11:10:22
 * @LastEditors: wjz
 * @LastEditTime: 2022-03-22 14:55:37
 * @FilePath: /kmaps/src/Location.ts
 */

import Konva from "./js/konva.min.js"

import {colorHextoRGBA ,rgbaToArray} from './_util'

interface pos {
  x: number,
  y: number,
  angle: number
}

/**
 * @description 定位点，图形组 参数详情查看https://konvajs.org/api/Konva.Group.html文档
 * @class
 * @constructor
 * @extends Konva.Group
 * 
 */
export default class Location extends Konva.Group {
  constructor(attrs: object = {}) {
    attrs["id"] = "Location"
    super(attrs)
    this._drawstate = false
    this._stage = window["_KMap"]["_Stage"] //(window as any)._KMap_Stage
    this._drag_group_anchor = this
  }
  /*节点被添加到图层后自动绘制 */
  _draw() {
    this.drawGraph()
  }
  //绘制定位图形
  drawGraph() {
    this._drawstate = true
    const self = this
    let attrs = this.attrs
    let themeColorArray = rgbaToArray(colorHextoRGBA(attrs.themeColor || "#F00000")).slice(0,3) //主题色
    let radius = 12

    const _anchor: any = anchor({
      radius, //定位点尺寸 
      themeColor:attrs.themeColor, //主题色
      shadowColor:attrs.shadowColor,
      shadowBlur:attrs.shadowBlur,
    })
    this._anchor = _anchor
    this._drag_group = new Konva.Group({ id: "_drag_group", visible: false }) //拖拽图形组
    //主题颜色 rgb反色
    let R = 255-themeColorArray[0],
        G = 255-themeColorArray[1],
        B = 255-themeColorArray[2];
    let _drag_group_scope = new Konva.Circle({ //定位点范围
      id: "_drag_group_scope",
      radius: 80,
      // fill:"#0C8FF0",
      // fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.4)', 0.3, 'rgba(252, 0, 13, 0.2)', 1,
      //   'rgba(255, 255, 255,0)'
      // ],
      fillRadialGradientColorStops: [0, `rgba(${R}, ${G}, ${B}, 0.4)`, 0.3, `rgba(${R}, ${G}, ${B}, 0.2)`, 1,
        'rgba(255, 255, 255,0)'
      ],
      fillRadialGradientStartRadius: 80,
      // fillRadialGradientEndRadius: 0,
      stroke:`rgba(${R}, ${G}, ${B}, 1)`,//'rgba(0, 90, 255, 1)', //'rgb(32, 244, 18)', //'rgb(252, 0, 13)', //'rgb(80, 138, 255)'
      strokeWidth: 0.1,
    });
    this._drag_group_scope = _drag_group_scope
    let _drag_group_line = new Konva.Line({ //角度线
      id: '_drag_group_line',
      points: [0, 0, _drag_group_scope.y() + 80, 0],
      stroke: `rgba(${themeColorArray.join(',')}, 1)`,//'#fc0a07',
      strokeWidth: 1,
      // shadowColor: `rgba(${themeColorArray.join(',')}, 1)`,//'#fd5807',
      // shadowBlur: 3,
      // shadowOpacity: 0.8,
      hitStrokeWidth: 20,
    })
    this._drag_group_line = _drag_group_line
    let _drag_group_anchor = new Konva.Circle({ //角度调节拖拽点
      id: '_drag_group_anchor',
      x: _drag_group_scope.x() + 80,
      radius: 12,
      fill: '#ffffff',
      stroke: `rgba(${themeColorArray.join(',')}, 1)`,//'#fd5807',
      strokeWidth: 1.5,
      // shadowColor: `rgba(${themeColorArray.join(',')}, 1)`,//'#fd5807',
      // shadowBlur: 3,
      // shadowOpacity: 0.8,
      hitStrokeWidth: 20,
      draggable: true, //拖拽 
      dragBoundFunc: function (pos) {
        let center = self.absolutePosition() //圆心
        let radian = Math.atan2((pos.y - center.y), (pos.x - center.x)) // 弧度
        let x = center.x + 80 / _drag_group_scope.scaleX() * Math.cos(radian),
          y = center.y + 80 / _drag_group_scope.scaleY() * Math.sin(radian);
        return {
          x,
          y
        }
      }
    });
    this._drag_group_anchor = _drag_group_anchor
    this._drag_group.add(_drag_group_scope, _drag_group_line, _drag_group_anchor)
    
    this._scope = new Konva.Circle({ //定位点辅助范围
      id: "anchor_scope",
      radius: radius,
      // fillRadialGradientColorStops: [0, 'rgba(0, 139, 255, 0.4)', 0.3, 'rgba(0, 139, 255, 0.2)', 1,
      //   'rgba(255, 255, 255,0)'
      // ],
      fillRadialGradientColorStops: [0, `rgba(${themeColorArray.join(',')}, 0.4)`, 0.3, `rgba(${themeColorArray.join(',')}, 0.2)`, 1,
        'rgba(255, 255, 255,0)'
      ],
      fillRadialGradientStartRadius: radius,
      // fillRadialGradientEndRadius: 0,
      stroke: 'rgba(252, 0, 13, 1)', //'rgb(32, 244, 18)', //'rgb(252, 0, 13)', //'rgb(80, 138, 255)'
      strokeWidth: 0.1,
      visible: true
    });

    this.add(this._drag_group, this._scope, this._anchor) //添加定位锚点到主图组

    /*
     * @event drags  定位拖拽事件
     */
    var myEvent = new CustomEvent('drag', {
      detail: {
        x: this.x() ,
        y: this.y() ,
        angle: _anchor.rotation()
      }
    });
    this.on('dragmove', function (e) {
      e.cancelBubble = true;

      //自定义事件 ，返回拖拽后的坐标位置
      myEvent.detail.x = this.x() 
      myEvent.detail.y = this.y() 
      myEvent.detail.angle = _anchor.rotation()
      self.dispatchEvent(myEvent);
    })

    //角度调整
    _drag_group_anchor.on('dragmove', function (e) {
      e.cancelBubble = true;

      let {
        x,
        y
      } = this.position()
      let deg = 180 * Math.atan2(y, x) / Math.PI
      _drag_group_line.points([0, 0, x, y])
      _anchor.rotation(deg)

      //自定义事件 ，返回拖拽后的坐标位置
      myEvent.detail.x = self.x() 
      myEvent.detail.y = self.y() 
      myEvent.detail.angle = _anchor.rotation()
      self.dispatchEvent(myEvent);
    })


    //loc_scope.moveToBottom()
    //响应舞台缩放，固定相对画布缩放倍数
   async function scale_event() {
      let scale = self._stage.scaleX()
      self.scale({
        x: 1 / scale,
        y: 1 / scale
      })
      //放大固定倍数，缩小固定倍数怎样判定
      self._scope.strokeWidth(0.1 / scale)
        let s = scale
        if (scale > 8) {
          s = 8 * (8 / scale)
        }
        self._scope.scale({
          x: s,
          y: s
        })
    }
    this._scale_event = scale_event
    
    //手势缩放结束
    this._stage.addEventListener("scaleend setscale", function (e) {
      e.cancelBubble = true;
      scale_event()
    })
    // //鼠标滑轮缩放
    // wheelEvent(this._stage, (e: any) => {
    //   if (e.type == "wheelend") {
    //     scale_event()
    //   }
    // })
    this.location({x:(typeof attrs.x) == 'number'?attrs.x:0,y:(typeof attrs.y) == 'number'?attrs.y:0,angle:(typeof attrs.angle) == 'number'?attrs.angle:0})
  }

  /** 
   * @description 设置定位点是否可拖拽
   * @param {boolean} param 是否可拖拽
   * @override
   * @example
   * node.draggable(true) //可拖拽
   * node.draggable(false) //不可拖拽
   */
  draggable(param: boolean) {
    if(!this._drawstate){
      return
    }
    if (!arguments.length) { return super.draggable() }
    super.draggable(param)
    this._drag_group.visible(param)
    this._scope.visible(!param)
    return super.draggable()
  }
  /**
   * @description 更新定位点
   * @param {number} x x轴坐标
   * @param {number} y y轴坐标
   * @param {number} angle 方向角度
   * 
   * @example
   * node.location({x,y,angle}) //get 返回坐标为相对父节点坐标位置 position 
   * let pos =  node.location() //set 设置坐标为相对父节点坐标位置 position 
   * 
   * @return  {x,y,angle} number
   */
  location(param: pos) {
    
    if(!this._drawstate){
      return
    }
    if (!arguments.length) {
      return {
        x: this.x(), 
        y: this.y(), 
        angle: this._anchor.rotation()
      }
    }
    this.position({ x: param.x, y: param.y })
    let center = this.absolutePosition() //圆心
    let radian = param.angle * Math.PI / 180 //Math.atan2((pos.y-center.y), (pos.x-center.x)) // 弧度
    let x = center.x + this._drag_group_scope.radius() * this._drag_group_scope.scaleX() * Math.cos(radian),
      y = center.y + this._drag_group_scope.radius() * this._drag_group_scope.scaleY() * Math.sin(radian);
    this._drag_group_anchor.absolutePosition({ x, y })
    let arPos = this._drag_group_anchor.position()
    this._drag_group_line.points([0, 0, arPos.x, arPos.y])
    this._anchor.rotation(param.angle)
    return {
      x: this.x(), 
      y: this.y(),
      angle: this._anchor.rotation()
    }
  }
}

/**
 * 定位图标
 * @param attrs.radius 定位点圆心半径尺寸 箭头跟随半径自适应大小
 * @param attrs.circleFill 圆心填充颜色
 * @param attrs.arrowFill 箭头填充颜色
 * @param attrs.shadowColor 阴影颜色
 * @param attrs.shadowBlur 阴影延伸尺寸
 * @returns 
 */
// 定位锚点绘制初始化图形组
function anchor(attrs:any) {
  let group = new Konva.Group({
    rotation:attrs.rotation
  })
  let circle = new Konva.Circle({ //圆心
    id: "anchor_circle",
    radius: attrs.radius,
    fill: '#fff',//'rgb(255, 0, 0)', //'#0033FF',
    //strokeWidth: 0
    shadowColor: attrs.themeColor ||'rgb(255, 0, 0)', //'#0033FF',
    shadowBlur: 10,
  });
  // let ring = new Konva.Ring({ //外圈
  //   id: "anchor_ring",
  //   innerRadius: radius / 1.5,
  //   outerRadius: radius,
  //   fill: '#fff',
  //   strokeWidth: 0.1,
  //   shadowColor: 'rgba(255, 0, 0,0.7)', //'#0033FF',
  //   shadowBlur: 10,
  // });
  let arrow = new Konva.RegularPolygon({ //方向箭头
    id: "anchor_arrow",
    // y: attrs.radius /2,
    x:attrs.radius +1,
    sides: 3,
    radius: attrs.radius - 1,
    rotation: 90,
    fill: attrs.themeColor || 'rgb(255, 0, 0)', //'#0033FF',
    // shadowColor: 'rgba(255, 0, 0,1)', //'#0033FF',
    // shadowBlur: 10,

  });
  group.add(arrow,circle)
  return group
}
