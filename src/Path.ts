/*
 * @Author: wjz
 * @Date: 2021-11-17 11:11:23
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-17 14:24:00
 * @FilePath: /kmaps/src/Path.ts
 */

import Konva from "./js/konva.min.js"


//必需参数
interface pathParam {
  id:string,
  points:[number],
  stroke:string,
  strokeWidth?:number
}


/**
 * @description 地图路径绘制
 * @constructor
 * @class
 * @param {JSON} attrs 参数详情查看https://konvajs.org/api/Konva.Group.html文档
 * @example
 * 
 * let node = new Path()
 */
export default class Path extends Konva.Group {
    constructor(attrs:object = {}) {
      attrs["id"] = "Path"
      super(attrs)
      this._click_callBack = function(){}
    }
    //自动绘制
    _draw(){
      this._stage = (window as any)._KMap_Stage
      const map = this._stage.findOne("#BaseMap")
      let pos = map.position()
      this.move(pos||{x:0,y:0})
    }
    /**
     * @description 绘制路径 采用Konva.Line api详情查看  https://konvajs.org/api/Konva.Line.html 参数仅支持下方描述项
     * @param {string} id  路径id
     * @param {Array[number]} points 路径贝塞尔曲线点
     * @param {String} stroke 路径颜色
     * @param {number} strokeWidth 贝塞尔曲线路径宽度 px
     * 
     * @example
     *  node.drawGraph(points) 
     */
    drawGraph(param:pathParam){
      let path = new Konva.Line({
        id:param.id,
        points:param.points,
        bezier:true,
        stroke:param.stroke,
        strokeWidth: param.strokeWidth || 3,
        hitStrokeWidth: 15, //增加事件响应范围
        lineCap:"round",
        lineJoin:"round",
        hit:false //击中状态
      })
      this.add(path)
      
      let self = this
      path.addEventListener("click touchstart",function(e) {
        self._click_callBack(this)
      })
    }
    /**
     * @description 路径选中后的回调 
     * @callback function 返回参数为选中路径节点 
     */
    hitFun(calback:Function){
      this._click_callBack = calback
    }
}