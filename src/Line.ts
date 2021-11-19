
/*
 * @Author: wjz
 * @Date: 2021-11-18 10:08:49
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-20 02:16:06
 * @FilePath: /kmaps/src/Line.ts
 */



import ShapeNode from './_ShapeNode'

import { wheelEvent , colorRgba} from './_util'

interface attrs {
  id: string,
  points: [[number, number], [number, number]]
  color:string,
  strokeWidth?:number

}


/**
 * @description  线绘制
 * @constructor 
 * @class
 * @extends ShapeNode
 * 
 * @param {String} id  id
 * @param {Array} points 端点坐标
 * @param {String} color 颜色
 * @param {Number} strokeWidth 画笔宽度 非必传参数
 * @param {boolean} awaitMap 是否等待底图绘制状态
 * 
 * @example 
 * 
 * let node = new Line(attrs)
 */
export default class Line extends ShapeNode {
  constructor(attrs: attrs) {
    super({
      ...attrs,
      name:"Line",
      strokeWidth: attrs.strokeWidth || 4,
      hitStrokeWidth:20
    })
    let self = this
    this._stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage

    this._stage.addEventListener("pinchend", function (e:any) {
      e.cancelBubble = true;
      scale_event()
    })
    //鼠标滑轮缩放
    wheelEvent(this._stage, (e: any) => {
      if (e.type == "wheelend") {
        scale_event()
      }
    })
    async function scale_event (){
      let scale = self._stage.scaleX()
      self._line.strokeWidth(5 / scale)
      //拖拽锚点
      let anchorArr = self.find("._drag_anchor")
      for(let item of  anchorArr){
        item.scale({
          x: 1 / scale,
          y: 1 / scale
        })
      }
    }
  }
  

}