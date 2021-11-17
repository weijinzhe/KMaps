/*
 * @Author: wjz
 * @Date: 2021-11-15 13:36:06
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-16 20:20:05
 * @FilePath: /kmaps/src/Track.ts
 */
import Konva from "./js/konva.min.js"



/**
 * @description 轨迹路线图组
 * @constructor
 * @class
 * @extends Konva.Group
 * @example
 * 
 * let node = new Track() //参数详见konva.Group
 */
 export default class Track extends Konva.Group {
  constructor(attrs: object={pixelRatio:2 ,strokeWidth:5}) {
    attrs["id"] = "Track"
    attrs["pixelRatio"] = 2
    attrs["strokeWidth"] = 5
    
    super(attrs)
    // this._image = new Konva.Image()
    // this.add(this._image)
  }
  //添加到父节点后自动调用 绘制函数
  _draw() {
    // this.drawGraph()
  }
  drawGraph() {
    this._stage = this.getStage()
    let attrs = this.attrs
    const map = this._stage.findOne("#BaseMap")

    //创建录屏渲染画布，绘制图像
    this._bufferCanvas = document.createElement('canvas'); 
    this._bufferCanvas.width = map.width() * attrs.pixelRatio;
    this._bufferCanvas.height = map.height() * attrs.pixelRatio;
    this._bufferContext = this._bufferCanvas.getContext('2d');
    this.position(map.position())
    // this._image.setAttrs({
    //   image: this._bufferCanvas,
    //   x:0,y:0,
    //   scale:{x:1/attrs.pixelRatio,y:1/attrs.pixelRatio},
    //   stroke:"#f50015",
    //   strokeWidth:5
    // })
    this._image()
  }
  _image(){
    let attrs = this.attrs
    this._image = new Konva.Image({
      image: this._bufferCanvas,
      x:0,y:0,
      scale:{x:1/attrs.pixelRatio,y:1/attrs.pixelRatio},
      stroke:"#f50015",
      strokeWidth:5
    });
    this.add(this._image)

  }
  /**
   * @description 绘制行进轨迹路线
   */
  track(){
    this._bufferContext.rect(0,0,this._bufferCanvas.width,this._bufferCanvas.height);
    
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