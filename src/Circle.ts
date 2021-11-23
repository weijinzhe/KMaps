/*
 * @Author: wjz
 * @Date: 2021-11-22 16:45:13
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-23 10:24:36
 * @FilePath: /kmaps/src/Circle.ts
 */
import konvaMin from "./js/konva.min";

/*
 * @Author: wjz
 * @Date: 2021-11-22 16:45:13
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-22 16:45:14
 * @FilePath: /kmaps/src/Circle.ts
 */

import Konva from "./js/konva.min";
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
    super(attrs)
  }
}