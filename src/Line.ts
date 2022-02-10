
/*
 * @Author: wjz
 * @Date: 2021-11-18 10:08:49
 * @LastEditors: wjz
 * @LastEditTime: 2022-02-10 14:14:36
 * @FilePath: /kmaps/src/Line.ts
 */



import Konva from "./js/konva.min";

// interface attrs {
//   id: string,
//   points: [[number, number], [number, number]]
//   color:string,
//   strokeWidth?:number
//   hitStrokeWidth?:number
//   absoluteSize?:boolean
// }


/**
 * @description  线绘制 基于Konv.Line 封装的可根据舞台缩放自动调整宽度的line类
 * @constructor 
 * @class
 * @extends Konva.Line
 * 
 * @example 
 * let node = new Line(attrs)
 */
export default class Line extends Konva.Line {
  constructor(attrs:any) {
    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，不与舞台一同缩放
    super(attrs)
    let self = this
    let _stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage

    _stage.addEventListener("scaleend setscale", function (e:any) {
      e.cancelBubble = true;
      scale_event()
    })
    async function scale_event (){
      let scale = self._stage.scaleX()
      if(attrs.absoluteSize){
        self._line.strokeWidth(4 / scale)
        self._line.hitStrokeWidth(20 / scale)
      }
    }
  }
}