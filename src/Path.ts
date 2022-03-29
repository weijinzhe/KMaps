/*
 * @Author: wjz
 * @Date: 2021-11-17 11:11:23
 * @LastEditors: wjz
 * @LastEditTime: 2022-03-23 14:19:15
 * @FilePath: /kmaps/src/Path.ts
 */

import Konva from "./js/konva.min.js"


//必需参数
interface attrs {
  id:string,
  points:[number],
  stroke:string,
  strokeWidth?:number,
  // hitStrokeWidth?:number
  // hitEvent?:boolean
}


/**
 * @description 地图路径绘制
 * @constructor
 * @class
 * @param {JSON} attrs 参数详情查看https://konvajs.org/api/Konva.Line.html文档
 * @example
 * 
 * let node = new Path(attrs)
 */
export default class Path extends Konva.Line {
  constructor(attrs:attrs) {
    attrs["bezier"] = true
    attrs["lineJoin"] = "round"
    attrs["lineCap"] = "round"
    super(attrs)
  }
 }