/*
 * @Author: wjz
 * @Date: 2021-12-30 14:00:48
 * @LastEditors: wjz
 * @LastEditTime: 2021-12-30 14:06:47
 * @FilePath: /kmaps/src/Text.ts
 */

import Konva from "./js/konva.min.js"
// import { wheelEvent } from './_util'

interface attrs {
  absoluteSize:boolean 
}

/**
 * @description 文本绘制 参数及方法详情参考 https://konvajs.org/api/Konva.Text.html
 */
export default class Text extends Konva.Text {
  constructor(attrs){
    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，不与舞台一同缩放
    super(attrs)
    let _stage = window["_KMap"]["_Stage"] //(window as any)._KMap_Stage
    let self = this

    _stage.addEventListener("scaleend setscale", function (e:any) {
      e.cancelBubble = true;
      if(attrs.absoluteSize){
        scale_event()
      }
    })
    scale_event()
    async function scale_event() {
      let scale = _stage.scaleX()
      self.scale({
        x: 1 / scale,
        y: 1 / scale
      })
    }
  }
}