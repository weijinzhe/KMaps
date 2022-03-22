/*
 * @Author: wjz
 * @Date: 2021-11-22 16:45:13
 * @LastEditors: wjz
 * @LastEditTime: 2022-03-22 14:56:21
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
 * 
 * @param {number} x x轴坐标位置
 * @param {number} y y轴坐标位置
 * @param {number} radius 点的直径大小
 * @param {number} fill 填充颜色
 * @param {number} shadowBlur 阴影范围、可选参数
 * @param {number} shadowColor 阴影颜色、可选参数
 * 
 * @example
 * 
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
    // //手势缩放结束
    // _stage.addEventListener("pinchend", function (e) {
    //   e.cancelBubble = true;
    //   scale_event()
    // })
    // //鼠标滑轮缩放
    // wheelEvent(_stage, (e: any) => {
    //   if (e.type == "wheelend") {
    //     scale_event()
    //   }
    // })
  }
}