
/*
 * @Author: wjz
 * @Date: 2021-11-18 10:08:49
 * @LastEditors: wjz
 * @LastEditTime: 2022-02-11 20:38:03
 * @FilePath: /kmaps/src/Line.ts
 */



import Konva from "./js/konva.min";
import {arrayConvert} from './_util'

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
    let _stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage
    // let scale = _stage.scaleX()

    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，与舞台一同缩放
    let points = attrs.points;
    attrs.points = arrayConvert(points);
    // console.log(attrs);
    // let w = (attrs.strokeWidth|| 1 ) / _stage.scaleX()
    let config = JSON.parse(JSON.stringify(attrs))
    config.strokeWidth = (attrs.strokeWidth|| 1 ) / _stage.scaleX()
    super(config)
    this._strokeWidth = attrs.strokeWidth || 1//宽度默认为1
    this._hitStrokeWidth = attrs.hitStrokeWidth
    let self = this
    

    _stage.addEventListener("scaleend setscale", function (e:any) {
      e.cancelBubble = true;
      scale_event()
    })
    async function scale_event (){
      let scale = _stage.scaleX()
      if(attrs.absoluteSize){
        self.strokeWidth(self._strokeWidth / scale)
        self.hitStrokeWidth(self._hitStrokeWidth / scale)
      }
    }
  }
}