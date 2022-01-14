/*
 * @Author: wjz
 * @Date: 2021-11-15 13:36:06
 * @LastEditors: wjz
 * @LastEditTime: 2022-01-13 20:55:47
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
 export default class Track extends Konva.Image {
  constructor(attrs:attrs){
    attrs["id"] = "Track"
    // attrs["perfectDrawEnabled"] = false
    super(attrs)
    this._stage = window["_KMap"]["_Stage"] //(window as any)._KMap_Stage
  }
  _draw() {
    const map = this._stage.findOne("#BaseMap")
    if(map && map._state){ //图片绘制完成 创建缓冲画布并添加到主屏幕图组节点上
      this.drawGraph()
    }else{ //图片未绘制完成，将绘制方法添加至订阅器，等待图片绘制完成
        window["_KMap"]["_BaseMap_unpdata"].push(this._asyncDrawGraph.bind(this))
        this.visible(false)
    }
  }
  async _asyncDrawGraph(){
    this.drawGraph()
  }
  drawGraph(){
    
    this.visible(true)
    let attrs = this.attrs
    const map = this._stage.findOne("#BaseMap")
    
    //创建录屏渲染画布，绘制图像
    this._bufferCanvas = document.createElement('canvas'); 
    this._bufferCanvas.width = map.width() * attrs.pixelRatio;
    this._bufferCanvas.height = map.height() * attrs.pixelRatio;
    this.image(this._bufferCanvas)
    this.scale({x:1/attrs.pixelRatio,y:1/attrs.pixelRatio}) //缩放缓冲图层与绘图层尺寸保持一致（提高像素）
    

    this._bufferContext = this._bufferCanvas.getContext('2d');
    this._bufferContext.lineWidth = attrs.strokeWidth * attrs.pixelRatio || 1; //放大绘制图形坐标 ，图片质量更高 
    this._bufferContext.lineJoin = 'round';
    // this._bufferContext.transform(attrs.pixelRatio,0,0,attrs.pixelRatio,0,0);
    // this._bufferContext.scale(1/attrs.pixelRatio,1/attrs.pixelRatio)
  }
  drawing(param:any){
    const map = this._stage.findOne("#BaseMap")
    if(!map || !map._state){return}
    let attrs = this.attrs

    this._bufferContext.globalCompositeOperation = 'source-over';
    this._bufferContext.beginPath();
    
    this._bufferContext.strokeStyle = param.strokeStyle || '';
    // this._bufferContext.moveTo(param.move[0],param.move[1])
    // this._bufferContext.lineTo(param.line[0],param.line[1]);

    this._bufferContext.moveTo(param.move[0]* attrs.pixelRatio,param.move[1]* attrs.pixelRatio)
    this._bufferContext.lineTo(param.line[0]* attrs.pixelRatio,param.line[1]* attrs.pixelRatio);
    this._bufferContext.closePath();
    this._bufferContext.stroke();

    // this._bufferContext.scale(attrs.pixelRatio,attrs.pixelRatio); //缩小绘制图形 与画布同比例 （高质量，但尺寸不变）

  }
}