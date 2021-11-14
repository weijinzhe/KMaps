/*
 * @Author: wjz
 * @Date: 2021-10-29 11:10:22
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-14 20:19:06
 * @FilePath: /kmaps/src/Location.ts
 */

import Konva from "./js/konva.min.js"

import { wheelEvent } from './_util'

const _scale: any = Symbol('scope_scale');

const _scope_scale: any = Symbol('_scope_scale');

const _getDraggable: any = Symbol('_getDraggable');

interface pos {
  x: number,
  y: number,
  angle: number
}

/**
 * @description 定位点，图形组
 * @constructor
 * @augments Konva.Group
 * @event drags 定位点拖拽事件 返回拖拽后的位置及角度
 */
export default class Location extends Konva.Group {
  constructor(attrs: object = {}) {
    super(attrs)
    this._drawstate = false
    this._stage = (window as any)._KMap_Stage
    this._drag_group_anchor = this
    // this._locGroup = new Konva.Group()
    // this.add(this._locGroup)
  }
  /** 节点被添加到图层后自动绘制 */
  _draw() {
    this.drawGraph()
  }
  /**
   * @description 绘制定位图形
   * @event drags 定位点拖拽事件 返回拖拽后的位置及方向角度
   * 
   */
  drawGraph() {
    this._drawstate = true
    const map = this._stage.findOne("#BaseMap")
    const self = this

    if (map) {
      this.move(map.position()) //重置定位锚点初始坐标
    }
    let radius = 12
    const _anchor: any = anchor(radius)
    this._anchor = _anchor
    this._drag_group = new Konva.Group({ id: "_drag_group", visible: false }) //拖拽图形组
    let _drag_group_scope = new Konva.Circle({ //定位点范围
      id: "_drag_group_scope",
      radius: 80,
      // fill:"#0C8FF0",
      // fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.4)', 0.3, 'rgba(252, 0, 13, 0.2)', 1,
      //   'rgba(255, 255, 255,0)'
      // ],
      fillRadialGradientColorStops: [0, 'rgba(0, 90, 255, 0.4)', 0.3, 'rgba(0, 90, 255, 0.2)', 1,
        'rgba(255, 255, 255,0)'
      ],
      fillRadialGradientStartRadius: 80,
      // fillRadialGradientEndRadius: 0,
      stroke: 'rgba(0, 90, 255, 1)', //'rgb(32, 244, 18)', //'rgb(252, 0, 13)', //'rgb(80, 138, 255)'
      strokeWidth: 0.1,
    });
    this._drag_group_scope = _drag_group_scope
    let _drag_group_line = new Konva.Line({ //角度线
      id: '_drag_group_line',
      points: [0, 0, _drag_group_scope.y() + 80, 0],
      stroke: '#fc0a07',
      strokeWidth: 1,
      shadowColor: '#fd5807',
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
      stroke: '#fd5807',
      strokeWidth: 1.5,
      shadowColor: '#fd5807',
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
      fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.4)', 0.3, 'rgba(252, 0, 13, 0.2)', 1,
        'rgba(255, 255, 255,0)'
      ],
      fillRadialGradientStartRadius: radius,
      // fillRadialGradientEndRadius: 0,
      stroke: 'rgba(252, 0, 13, 1)', //'rgb(32, 244, 18)', //'rgb(252, 0, 13)', //'rgb(80, 138, 255)'
      strokeWidth: 0.1,
      visible: true
    });
    var myEvent = new CustomEvent('drags', {
      detail: {
        x: self.x() - map.x(),
        y: self.y() - map.y(),
        angle: _anchor.rotation()
      }
    });
    this.addEventListener('dragmove', function (e) {
      //自定义事件 ，返回拖拽后的坐标位置
      myEvent.detail.x = self.x() - map.x()
      myEvent.detail.y = self.y() - map.y()
      myEvent.detail.angle = _anchor.rotation()
      self.dispatchEvent(myEvent);
    })

    //角度调整
    _drag_group_anchor.addEventListener('dragmove', function (e) {
      let {
        x,
        y
      } = this.position() //this.absolutePosition()
      let deg = 180 * Math.atan2(y, x) / Math.PI
      _drag_group_line.points([0, 0, x, y])
      _anchor.rotation(deg)

      //自定义事件 ，返回拖拽后的坐标位置
      myEvent.detail.x = self.x() - map.x()
      myEvent.detail.y = self.y() - map.y()
      myEvent.detail.angle = _anchor.rotation()
      self.dispatchEvent(myEvent);
    })


    this.add(this._drag_group, this._scope, this._anchor) //添加定位锚点到主图组
    //loc_scope.moveToBottom()
    //响应舞台缩放，固定相对画布缩放倍数
    function scale_event() {
      let scale = self._stage.scaleX()
      // let scope = self._scope
      self.scale({
        x: 1 / scale,
        y: 1 / scale
      })
      //放大固定倍数，缩小固定倍数怎样判定
      self._scope.strokeWidth(0.1 / scale)
      if (!self[_getDraggable]()) {
        let s = scale
        if (scale > 8) {
          s = 8 * (8 / scale)
        }
        self._scope.scale({
          x: s,
          y: s
        })
      }
    }
    //手势缩放结束
    this._stage.addEventListener("pinchend", function () {
      scale_event()
    })
    //鼠标滑轮缩放
    wheelEvent(this._stage, (e: any) => {
      if (e.type == "wheelend") {
        scale_event()
      }
    })

  }

  /** 
   * @description 设置定位点是否可拖拽
   * @param param 是否可拖拽
   * @example
   * node.draggable(true) //可拖拽
   * node.draggable(false) //不可拖拽
   */
  draggable(param: boolean) {
    if(!this._drawstate){
      return
      //  console.error(new Error(''))
    }
    if (!arguments.length) { return super.draggable() }
    super.draggable(param)
    this._drag_group.visible(param)
    this._scope.visible(!param)
    return super.draggable()
  }
  //不可被外部访问Symbol类型
  [_getDraggable]() {
    return super.draggable()
  }

  /* draggableEvent(fun) {

    this.addEventListener('dragmove',(e)=> {
    const map = this._stage.findOne("#BaseMap")

      fun({
        x:this.x() - map.x(),
      y:this.y() - map.y(),
          angle:this._anchor.rotation()
        })
    })
    this._drag_group_anchor.addEventListener('dragmove', (e)=> {
    const map = this._stage.findOne("#BaseMap")

      fun({
        x:this.x() - map.x(),
      y:this.y() - map.y(),
          angle:this._anchor.rotation()
        })
    })
  } */
  /**
   * @description 更新定位点
   * @param {JSON} param {x,y,angle} number
   * @return  "{x,y,angle}" number
   * @example
   * node.location({x,y,angle}) //get
   * let pos =  node.location() //set
   */
  location(param: pos) {
    if(!this._drawstate){
      return
      //  console.error(new Error(''))
    }
    const map = this._stage.findOne("#BaseMap")
    if (!arguments.length) {
      return {
        x: this.x() - map.x(),
        y: this.y() - map.y(),
        angle: this._anchor.rotation()
      }
    }
    this.position({ x: param.x, y: param.y })
    this.move(map.position()) //更改为图片坐标系
    let center = this.absolutePosition() //圆心
    let radian = param.angle * Math.PI / 180 //Math.atan2((pos.y-center.y), (pos.x-center.x)) // 弧度
    let x = center.x + this._drag_group_scope.radius() * this._drag_group_scope.scaleX() * Math.cos(radian),
      y = center.y + this._drag_group_scope.radius() * this._drag_group_scope.scaleY() * Math.sin(radian);
    this._drag_group_anchor.absolutePosition({ x, y })
    let arPos = this._drag_group_anchor.position()
    this._drag_group_line.points([0, 0, arPos.x, arPos.y])
    this._anchor.rotation(param.angle)
    return {
      x: this.x() - map.x(),
      y: this.y() - map.y(),
      angle: this._anchor.rotation()
    }
  }
}







// 定位锚点绘制初始化图形组
function anchor(radius: number) {
  let group = new Konva.Group()
  //辅助圆形范围
  let scope = new Konva.Circle({ //定位点范围
    id: "anchor_scope",
    radius: radius * 8,
    fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.4)', 0.3, 'rgba(252, 0, 13, 0.2)', 1,
      'rgba(255, 255, 255,0)'
    ],
    fillRadialGradientStartRadius: radius * 8,
    fillRadialGradientEndRadius: 0,
    stroke: 'rgba(252, 0, 13, 0.5)', //'rgb(32, 244, 18)', //'rgb(252, 0, 13)', //'rgb(80, 138, 255)'
    strokeWidth: 0.5,
  });
  this.scope = scope //方便外部操作辅助图形
  let circle = new Konva.Circle({ //圆心
    id: "anchor_circle",
    radius: radius,
    fill: '#fff',//'rgb(255, 0, 0)', //'#0033FF',
    //strokeWidth: 0
    shadowColor: 'rgba(255, 0, 0,1)', //'#0033FF',
    shadowBlur: 10,
  });
  let ring = new Konva.Ring({ //外圈
    id: "anchor_ring",
    innerRadius: radius / 1.5,
    outerRadius: radius,
    fill: '#fff',
    strokeWidth: 0.1,
    shadowColor: 'rgba(255, 0, 0,0.8)', //'#0033FF',
    shadowBlur: 10,
  });
  let arrow = new Konva.RegularPolygon({ //方向箭头
    id: "anchor_arrow",
    x: radius + 1,
    sides: 3,
    radius: radius - 1,
    rotation: 90,
    fill: 'rgb(255, 0, 0)', //'#0033FF',

  });
  group.add(arrow, circle)
  return group
}
