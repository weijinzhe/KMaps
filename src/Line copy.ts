
/*
 * @Author: wjz
 * @Date: 2021-11-18 10:08:49
 * @LastEditors: wjz
 * @LastEditTime: 2022-02-09 15:22:52
 * @FilePath: /kmaps/src/Line.ts
 */



import ShapeNode from './_ShapeNode'

import { wheelEvent , colorHextoRGBA} from './_util'

interface attrs {
  id: string,
  points: [[number, number], [number, number]]
  color:string,
  strokeWidth?:number
  hitStrokeWidth?:number
  absoluteSize?:boolean
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
 * 
 * @example 
 * 
 * let node = new Line(attrs)
 */
export default class Line extends ShapeNode {
  constructor(attrs: attrs) {
    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，不与舞台一同缩放
    attrs["closed"] = false
    super({
      ...attrs,
      // name:"Line",
      // strokeWidth: attrs.strokeWidth || 4,
      // hitStrokeWidth:20
    })
    let self = this
    let _stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage

    _stage.addEventListener("scaleend setscale", function (e:any) {
      e.cancelBubble = true;
      scale_event()
    })
    //鼠标滑轮缩放
    // wheelEvent(this._stage, (e: any) => {
    //   if (e.type == "wheelend") {
    //     scale_event()
    //   }
    // })
    async function scale_event (){
      let scale = self._stage.scaleX()
      if(attrs.absoluteSize){
        self._line.strokeWidth(4 / scale)
        self._line.hitStrokeWidth(20 / scale)
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