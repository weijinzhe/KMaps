/*
 * @Author: wjz
 * @Date: 2021-11-22 16:45:13
 * @LastEditors: wjz
 * @LastEditTime: 2022-03-23 15:59:51
 * @FilePath: /kmaps/src/Circle.ts
 */

import Konva from "./js/konva.min";
//import { wheelEvent } from './_util'


interface attrs {
  absoluteSize:boolean 
}

/**
 * @description 圆图形
 * @constructor
 * @class
 * @extends Konva.Circle 
 * @param {Object} attrs  详情参数参考Konva.Circle
 * @param {number} attrs.x x轴坐标位置
 * @param {number} attrs.y y轴坐标位置
 * @param {number} attrs.radius 点的直径大小
 * @param {number} attrs.fill 填充颜色
 * @param {number} attrs.shadowBlur 阴影范围、可选参数
 * @param {number} attrs.shadowColor 阴影颜色、可选参数
 * 
 * @example
 * let  node = new Circle(attrs)
 */
export default class Circle extends Konva.Circle {
  constructor(attrs: any) {
    let _stage = window["_KMap"]["_Stage"] //(window as any)._KMap_Stage

    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，不与舞台一同缩放
    // let config = JSON.parse(JSON.stringify(attrs))
    super(attrs)
    let self = this
    scale_event()
    _stage.addEventListener("scaleend setscale", function (e:any) {
      e.cancelBubble = true;
      scale_event()
    })
    async function scale_event() {
      if(attrs.absoluteSize){
        let scale = _stage.scaleX()
        self.scale({
          x: 1 / scale,
          y: 1 / scale
        })
      }
    }
  }
}