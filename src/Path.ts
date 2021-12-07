/*
 * @Author: wjz
 * @Date: 2021-11-17 11:11:23
 * @LastEditors: wjz
 * @LastEditTime: 2021-12-06 13:41:23
 * @FilePath: /kmaps/src/Path.ts
 */

import Konva from "./js/konva.min.js"
import { wheelEvent } from './_util'


//必需参数
interface attrs {
  id:string,
  points:[number],
  stroke:string,
  strokeWidth?:number,
  hitStrokeWidth?:number
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
    // attrs["hitStrokeWidth"] = 15
    super(attrs)
  }
 }



//  class Paths extends Konva.Group {
//     constructor(attrs:object = {}) {
//       attrs["id"] = "Path"
//       super(attrs)
//       this._click_callBack = function(){}
//     }
//     //自动绘制
//     _draw(){
//       this._stage = (window as any)._KMap_Stage
//       const map = this._stage.findOne("#BaseMap")
//       let pos = map.position()
//       this.move(pos||{x:0,y:0})
//       // if(){return}
//       // this._stage.addEventListener("dragstart dragend ", (e)=> {
//       //   console.log(e);
//       //   if(e.type == "touchmove"){
//       //     this.visible(false)
//       //   }else{
//       //     this.visible(true)
//       //   }
//       // })
//       // wheelEvent(this._stage,(e)=> {
//       //   if(e.type == "wheelmove"){
//       //     this.visible(false)
//       //   }else{
//       //     this.visible(true)
//       //   }
//       // })
//     }
//     /**
//      * @description 绘制路径 采用Konva.Line api详情查看  https://konvajs.org/api/Konva.Line.html 参数仅支持下方描述项
//      * @param {string} id  路径id
//      * @param {Array[number]} points 路径贝塞尔曲线点
//      * @param {String} stroke 路径颜色
//      * @param {number} strokeWidth 贝塞尔曲线路径宽度 px
//      * 
//      * @example
//      *  node.drawGraph(points) 
//      */
//     drawGraph(param:pathParam){
//       let path = new Konva.Line({
//         id:param.id,
//         points:param.points,
//         bezier:true,
//         stroke:param.stroke,
//         strokeWidth: param.strokeWidth || 3,
//         hitStrokeWidth: 15, //增加事件响应范围
//         lineCap:"round",
//         lineJoin:"round",
//         hitEvent:param.hitEvent||false
//       })
//       this.add(path)
//       if(param.hitEvent){
//         let self = this
//         path.addEventListener("click touchend",function(e) {
//           self._click_callBack(this)
//         })
//       }
//     }
//     /**
//      * @description 路径选中后的回调 
//      * @callback function 返回参数为选中路径节点 
//      */
//     hitFun(calback:Function){
//       this._click_callBack = calback
//     }
// } 


