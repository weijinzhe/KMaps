/*
 * @Author: wjz
 * @Date: 2021-11-19 23:05:59
 * @LastEditors: wjz
 * @LastEditTime: 2021-12-06 15:18:55
 * @FilePath: /kmaps/src/Polygon.ts
 */
import ShapeNode from './_ShapeNode'
import { wheelEvent } from './_util'

interface attrs {
  id: string,
  points: [[number, number], [number, number]]
  color:string,
  strokeWidth?:number
  hitStrokeWidth?:number
  absoluteSize?:boolean
}

/**
 * @description 多边形绘制
 * @constructor
 * @class
 * @extends ShapeNode
 * 
 * @param {String} id  id
 * @param {Array} points 端点坐标
 * @param {String} color 颜色
 * @param {Number} strokeWidth 画笔宽度 非必传参数
 * 
 * @example
 * 
 * let node = new Polygon(attrs)
 */
export default class Polygon extends ShapeNode {
  constructor(attrs: attrs) {
    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，不与舞台一同缩放
    attrs["closed"] = true

    super({
      ...attrs,
      // name:"Polygon",
      // strokeWidth: attrs.strokeWidth || 1,
      // hitStrokeWidth: 0
    })
    this._strokeWidth = attrs.strokeWidth || 1
    let self = this
    let _stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage

    _stage.addEventListener("scaleend setscale", function (e:any) {
      e.cancelBubble = true;
      scale_event()
    })
    // //鼠标滑轮缩放
    // wheelEvent(this._stage, (e: any) => {
    //   if (e.type == "wheelend") {
    //     scale_event()
    //   }
    // })
    async function scale_event (){
      let scale = self._stage.scaleX()
      if(attrs.absoluteSize){
        self._line.strokeWidth(self._strokeWidth / scale)
      }
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