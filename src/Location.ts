/*
 * @Author: wjz
 * @Date: 2021-10-29 11:10:22
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-14 01:37:43
 * @FilePath: /kmaps/src/Location.ts
 */

import Konva from "./js/konva.min.js"

import { wheelEvent } from './_util'

const scale_event:any = Symbol('scale_event'); 

/**
 * @description 定位点，图形组
 * @constructor
 * @augments Konva.Group
 * @param {boolean} attrs.visible 显示状态
 * @param {boolean} attrs.draggable 默认拖拽状态
 */
export default class Location extends Konva.Group {
  constructor(attrs: object = {}) {
    super(attrs)
    this._locGroup = new Konva.Group()
    this.add(this._locGroup)
  }
  /** 节点被添加到图层后自动绘制 */
  _draw() {
    this.drawGraph()
  }
  /**
   * @description 绘制定位图形
   */
  drawGraph() {
    let _stage = (window as any)._KMap_Stage
    let map = _stage.findOne("#BaseMap")
    if (map) {
      this.move(map.position()) //重置定位锚点初始坐标
    }


    let radius = 12
    let _loc: any = anchor(radius)
    this._locGroup.add(_loc)
    let loc_scope = new Konva.Circle({ //定位点范围
      id: "loc_scope",
      radius: radius,
      // fill:"#0C8FF0",
      fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.4)', 0.3, 'rgba(252, 0, 13, 0.2)', 1,
        'rgba(255, 255, 255,0)'
      ],
      fillRadialGradientStartRadius: radius,
      // fillRadialGradientEndRadius: 0,
      stroke: 'rgba(252, 0, 13, 1)', //'rgb(32, 244, 18)', //'rgb(252, 0, 13)', //'rgb(80, 138, 255)'
      strokeWidth: 0.1,
    });
    this.add(loc_scope) //添加定位锚点到主图组
    loc_scope.moveToBottom()
    let self = this
    //响应舞台缩放，固定相对画布缩放倍数
    function scale_event (){
      let scale = _stage.scaleX()
        self._locGroup.scale({
          x: 1 / scale,
          y: 1 / scale
        })
        loc_scope.strokeWidth(0.1 / scale)
        if (scale > 3) { //放大超过3倍，锁定相对画布倍数，视觉保持
          let s = 3 * (3 / scale) //锁定倍数 * （锁定倍数 / 缩放倍数）= 相对倍数
          loc_scope.scale({
            x:s,
            y:s
          })
        }else{
          loc_scope.scale({
            x: scale,
            y: scale
          })
        }
    }
    //手势缩放结束
    _stage.addEventListener("pinchend", function () {
      scale_event()
    })
    //鼠标滑轮缩放
    wheelEvent(_stage, (e:any) => {
      if(e.type == "wheelend"){
        scale_event()
      }
    })
  }
  /**
   * @description 更新定位点
   */
  position() {
    this.position()
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
    fillRadialGradientStartRadius: radius*8,
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
  group.add(scope,arrow, circle)
  return group
}
