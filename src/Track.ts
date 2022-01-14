/*
 * @Author: wjz
 * @Date: 2021-11-15 13:36:06
 * @LastEditors: wjz
 * @LastEditTime: 2022-01-13 21:16:22
 * @FilePath: /kmaps/src/Track.ts
 */
import Konva from "./js/konva.min.js"

interface attrs  {
  pixelRatio:number, 
  strokeWidth?:number
}

// * @param {number} width 绘制区域宽度 必传参数
//  * @param {number} height 绘制区域高度 必传参数
/**
 * @description 轨迹路线图组
 * @constructor
 * @class
 * @extends Konva.Group
 * 
 * @param {number} pixelRatio 轨迹区域像素，尽量为偶数 毕传参数
 
 * @example
 * 
 * let node = new Track() //参数详见konva.Group
 */
 export default class Track extends Konva.Line {
  constructor(attrs:attrs){
    attrs["id"] = "Track"
    attrs["globalCompositeOperation"] = 'source-over'
    attrs['lineCap'] = "round"
    super(attrs)
    
    this._stage = window["_KMap"]["_Stage"] //(window as any)._KMap_Stage
  }
  // _draw() {
  //   const map = this._stage.findOne("#BaseMap")
  //   if(map && map._state){ //图片绘制完成 创建缓冲画布并添加到主屏幕图组节点上
  //     this.drawGraph()
  //   }else{ //图片未绘制完成，将绘制方法添加至订阅器，等待图片绘制完成
  //       window["_KMap"]["_BaseMap_unpdata"].push(this._asyncDrawGraph.bind(this))
  //       this.visible(false)
  //   }
  // }
  // async _asyncDrawGraph(){
  //   this.drawGraph()
  // }
  // drawGraph(){
    
    
  // }
  //开始位置
  moveTo(pos:any){
    this.points([pos.x,pos.y])
  }
  //当前画笔位置
  lineTo(pos:any){
    var newPoints = this.points().concat([pos.x, pos.y]);
    // if(newPoints.length %10 == 0){
    //   this.cache()
    //   this.clearCache();
    // }
    this.points(newPoints)
  }
  
}