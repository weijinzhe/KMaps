/*
 * @Author: wjz
 * @Date: 2021-11-15 13:36:06
 * @LastEditors: wjz
 * @LastEditTime: 2021-12-14 11:00:35
 * @FilePath: /kmaps/src/Track.ts
 */
import Konva from "./js/konva.min.js"

interface attrs  {
  id?:string,
  pixelRatio:number, 
  // width:number,
  // height:number,
  awaitMap?:boolean
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
 export default class Track extends Konva.Group {
  constructor(attrs: attrs) {
    attrs["id"] = "Track"
    // !attrs["awaitMap"]? attrs["awaitMap"] = true : null
    attrs["awaitMap"] !== false ? attrs["awaitMap"] = true : null
    super(attrs)
    this._stage = window["_KMap"]["_Stage"] //(window as any)._KMap_Stage
  }
  //添加到父节点后自动调用 绘制函数
  _draw() {
    const map = this._stage.findOne("#BaseMap")
    if(map && map._state){ //图片绘制完成 创建缓冲画布并添加到主屏幕图组节点上
      this.drawGraph()
    }else if(this.attrs["awaitMap"]){ //图片未绘制完成，将绘制方法添加至订阅器，等待图片绘制完成
        window["_KMap"]["_BaseMap_unpdata"].push(this._asyncDrawGraph.bind(this))
        this.visible(false)
      }
  }
  async _asyncDrawGraph(){
    this.drawGraph()
  }
  drawGraph() {
    this.visible(true)
    let attrs = this.attrs
    const map = this._stage.findOne("#BaseMap")
    
    //创建录屏渲染画布，绘制图像
    this._bufferCanvas = document.createElement('canvas'); 
    this._bufferCanvas.width = map.width() * attrs.pixelRatio;
    this._bufferCanvas.height = map.height() * attrs.pixelRatio;
    this._bufferContext = this._bufferCanvas.getContext('2d');
    // this.position(map.position())

    this._image = new Konva.Image({
      id:"trackImage",
      image: this._bufferCanvas,
      x:0,y:0,
      scale:{x:1/attrs.pixelRatio,y:1/attrs.pixelRatio},
      // stroke:"#f50015",
      // strokeWidth:5
    })
    this.add(this._image); 
  
    // //零点准星
    // let xline = new Konva.Line({
    //   points:[-200,0,200,0],
    //   stroke: '#fc0006',
    //   strokeWidth: 2,
    //   globalCompositeOperation:'source-over',
    //   lineCap: 'round',
    // });
    // let yline = new Konva.Line({
    //   points:[0,-200,0,200],
    //   stroke: '#fc0006',
    //   strokeWidth: 2,
    //   globalCompositeOperation:'source-over',
    //   lineCap: 'round',
    // });
    // this.add(xline,yline)
  }
  /**
   * @description 绘制行进轨迹路线
   * @param {number} 
   */
  drawing(param:any){
    const map = this._stage.findOne("#BaseMap")
    if(!map || !map._state){return}
    let attrs = this.attrs
    // this._bufferContext.rect(0,0,this._bufferCanvas.width,this._bufferCanvas.height);
    
    // var grd=this._bufferContext.createLinearGradient(param.move[0]* attrs.pixelRatio,param.move[1]* attrs.pixelRatio,
    //   param.line[0]* attrs.pixelRatio,param.line[1]* attrs.pixelRatio);
    // // 为渐变添加颜色，参数1表示渐变开始和结束之间的位置（用0至1的占比表示），参数2位颜色
    // grd.addColorStop(0,'yellow');
    // grd.addColorStop(0.5,'red');
    // grd.addColorStop(1,'yellow'); //结尾颜色与开始颜色保持一致

    // // 将渐变赋值给线的样式
    // this._bufferContext.strokeStyle=grd;
    
    
    this._bufferContext.beginPath();
    this._bufferContext.lineWidth = param.strokeWidth * attrs.pixelRatio;
    this._bufferContext.lineJoin = 'round';
    this._bufferContext.globalCompositeOperation = 'source-over';
    this._bufferContext.strokeStyle = param.strokeStyle || '';
    
    this._bufferContext.moveTo(param.move[0]* attrs.pixelRatio,param.move[1]* attrs.pixelRatio)
    
    this._bufferContext.lineTo(param.line[0]* attrs.pixelRatio,param.line[1]* attrs.pixelRatio);
    this._bufferContext.closePath();
    this._bufferContext.stroke();
  }
}

// export default class Track extends Konva.Group {
//   constructor(attrs: object={}) {
//     attrs['id'] = "Track"
//     !attrs['pixelRatio'] ? attrs['pixelRatio'] = 2 : null;
//     !attrs['strokeWidth']? attrs['strokeWidth'] = 5  : null;
//     // !attrs.startPosition? attrs.startPosition = {x:0,y:0} : null
//     super({
//       visible:true
//     })

//     let layer = new Konva.Layer()
    
//     let line = new Konva.Line({
//       points: [5, 70, 140, 23, 250, 60, 300, 20],
//       stroke: 'red',
//       strokeWidth: 15,
//       lineCap: 'round',
//       lineJoin: 'round',
//     })
//     layer.add(line)

//     // this.add(line)
//     // this.visible(true)

//    let image =  layer.toDataURL({
//       mimeType:"image/png",
//       quality:1,
//       pixelRatio:2,
//     })
//     // this.visible(false)
//     console.log(image);
    
//   }
//   //添加到父节点后自动调用 绘制函数
//   _draw() {
//     this.drawGraph()
//   }
//   drawGraph() {
//     this._stage = this.getStage()


//   }
// }