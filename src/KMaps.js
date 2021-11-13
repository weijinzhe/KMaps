"use strict";

import Konva from "./konva.min.js"
import Hammer from './hammer-konva.js'

//舞台拖拽
function dragBoundFunc(pos) {
  let baseMap = this.findOne('#BaseMap') //获取图片对象
  let apos = this.absolutePosition() //获取舞台实际位置
  let {
    x,
    y
  } = pos //舞台移动位置
  let scope = {
    ...pos
  }
  let imgPos = baseMap.position() //图片位置
  let img = baseMap.size() //图片尺寸
  let scale = this.scale() // 舞台缩放
  let size = this.size() // 舞台尺寸

  //单独x轴拖拽限制
  if (img.width * scale.x > size.width) { //放大超出屏幕 
    if (apos.x > x) { //左滑
      if (x + (imgPos.x + img.width) * scale.x <= size.width - 200) scope.x = apos.x
    }
    if (apos.x < x) { //右滑 
      if (x >= imgPos.x * -1 * scale.x + 200) scope.x = apos.x
    }
  } else { //未超出屏幕显示范围
    if (apos.x > x) { //左滑
      if (imgPos.x * -1 > x / scale.x + 200) scope.x = apos.x
    }
    if (apos.x < x) { //右滑 
      if (x + (imgPos.x + img.width) * scale.x > size.width + 200) scope.x = apos.x
    }
  }
  //单独y轴拖拽限制
  if (img.height * scale.x > size.height) {
    if (apos.y > y) { //上滑
      if (y + (imgPos.y + img.height) * scale.y < size.height - 200) scope.y = apos.y
    }
    if (apos.y < y) { //下滑 
      if (y >= imgPos.y * -1 * scale.y + 200) scope.y = apos.y
    }
  } else {
    if (apos.y > y) { //上滑
      if (imgPos.y * -1 > y / scale.y + 200) scope.y = apos.y
    }
    if (apos.y < y) { //下滑 
      if (y + (imgPos.y + img.height) * scale.y > size.height + 200) scope.y = apos.y
    }
  }
  return scope
}

/**
 * @description 鼠标滚轮结束事件
 * @param {Object} callBack
 */
function wheelEvent(callBack) {
  let st = null;
  stageNode.addEventListener('wheel', function(e) {
    clearTimeout(st)
    st = setTimeout(() => {
      callBack()
    }, 100)
  })
}

/**
 * @description 动画方法
 * @param {Object} layer
 * @param {Object} callBack
 */
function animation(layer, callBack) {
  var anim = new Konva.Animation(function(frame) {
    // var dist = velocity * (frame.timeDiff / 1000);
    // node.move({x: dist, y: 0});
    callBack(frame)
  }, layer);
  return anim
}

let stageNode = null, //舞台节点
  baseMapNode = null; //底图图片节点
/**
 * @description 非地理坐标地图 创建舞台
 * @constructor
 * @augments Konva.Stage
 */
class Stage extends Konva.Stage {
  // static assignment (){
  //   stageNode = this
  // }
  constructor(param = {}) {
    let size = {
      width: document.getElementById('map').clientWidth,
      height: document.getElementById('map').clientHeight
    }
    super({
      id: "stage",
      container: 'map', // id of container <div> *包裹舞台的DIV元素的ID
      width: size.width, //舞台宽度
      height: size.height, //舞台高度
      draggable: true, //拖拽
      dragBoundFunc: dragBoundFunc
    })
    stageNode = this
    this.scaleRange = param.zoomRange || {
      max: 10,
      min: 0.3
    }
    let hammer = new Hammer(this, { //绑定事件
      domEvents: true
    });
    hammer.get('pinch').set({
      enable: true
    });

    var scaleBy = 1.02;
    var pointer = {}
    this.on(' pinchstart pinchmove pinchend wheel', (e) => { //鼠标缩放
      e.evt.preventDefault();
      var oldScale = this.scaleX();
      let mousePointTo = {},
        newScale = 1,
        newPos = {};
      switch (e.type) {
        case 'wheel': //鼠标滚轮 
          pointer = this.getPointerPosition();
          mousePointTo = {
            x: (pointer.x - this.x()) / oldScale,
            y: (pointer.y - this.y()) / oldScale,
          };
          newScale =
            e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

          if (newScale >= this.scaleRange.max || newScale <= this.scaleRange.min) {
            return
          }
          newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
          };
          this.scale({
            x: newScale,
            y: newScale
          });
          this.position(newPos);
          break;
        case 'pinchstart': //捏放开始
          this.draggable(false)
          pointer = this.getPointerPosition(); //e.evt.gesture.center; //缩放基准点
          break;
        case 'pinchmove': //捏放中
          mousePointTo = {
            x: (pointer.x - this.x()) / oldScale,
            y: (pointer.y - this.y()) / oldScale,
          };
          newScale = e.evt.gesture.scale > 1 ? oldScale * (scaleBy + 0.04) : oldScale / (scaleBy + 0.04);
          if (newScale >= this.scaleRange.max || newScale <= this.scaleRange.min) {
            return
          }
          newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
          };
          this.scale({
            x: newScale,
            y: newScale
          });
          this.position(newPos);
          break;
        case 'pinchend': //捏放结束
          this.draggable(true)
          break;
      }

    });
    // hammer.get('rotate').set({enable: false});
    // let baseLayer = new BaseLayer() //地图层
    // this.add(baseLayer)
    // param.layer.forEach(item => { //动态添加图层
    //   this.add(item)
    // })
  }
}
// Stage.assignment()

/**
 * @description 底图类,用于绘制地图图片，计算初始坐标系
 * @constructor
 * @class
 * @extends {Konva.Image}
 * @augments Konva.Image
 * @example 
 * let node = new BaseMap()
 */
class BaseMap extends Konva.Image {
  constructor(attrs = {}) {
    attrs.id = 'BaseMap'
    super(attrs)
    baseMapNode = this
  }
  /**
   * @description 绘制图片到此图层
   * @param {Object} img 图片
   */
  images(img) {
    let width = img.width, //图片宽度
      height = img.height; //图片高度
    let stage = stageNode || this.getStage()
    this.image(img)
    this.size({
      width,
      height
    })
    this.position({
      x: (stage.size().width / 2 - width / 2),
      y: (stage.size().height / 2 - height / 2)
    })
    return this
  }
}



/**
 * @description 网格图层，网格参照层
 * @constructor
 * @augments Konva.Group
 * @param {number} attrs.size 网格尺寸
 */
class Grid extends Konva.Group {
  constructor(attrs = {}) {
    attrs.id = 'Grid'
    super(attrs)

    //let stage = stageNode //this.getStage()
    let sizeW = stageNode.width(),
      sizeH = stageNode.height();
    let self = this
    let size = attrs.size ? attrs.size : 50
    let stagePos = stageNode.absolutePosition() //舞台位置 .起始绘制点
    let scale = stageNode.scaleX()


    let startPoint = {
      x: (sizeW - stagePos.x) / scale,
      y: (sizeH - stagePos.y) / scale
    }
    let XGCount = Math.round(startPoint.x / size),
      YGCount = Math.round(startPoint.y / size)

    for (let xc = 1; xc < YGCount + 1; xc++) { //水平线
      let levelLine = new Konva.Line({
        name: 'levelLine',
        points: [0 - stagePos.x - 0.5, (0 - stagePos.y) + size * xc - 0.5, startPoint.x - 0.5, (0 -
          stagePos
          .y) + size * xc - 0.5], //-0.5为了使线绘制在像素点正中心，防止模糊
        stroke: "#000000",
        strokeWidth: 0.1,
      })
      this.add(levelLine)
    }
    for (let yc = 1; yc < XGCount; yc++) { //垂直线
      let verticalLine = new Konva.Line({
        name: 'verticalLine',
        points: [size * yc - 0.5, 0 - stagePos.y - 0.5, size * yc - 0.5, startPoint.y -
          0.5
        ],
        stroke: "#000000",
        strokeWidth: 0.1,
      })
      this.add(verticalLine)
    }
    stageNode.addEventListener('dragmove', function(e) {
      self.absolutePosition({
        x: 0,
        y: 0
      }) //反向位移，将网格重置为初始位置
    })
    wheelEvent(() => {
      self.absolutePosition({
        x: 0,
        y: 0
      }) //反向位移，将网格重置为初始位置
      self.scale({
        x: 1 / stageNode.scale().x,
        y: 1 / stageNode.scale().y
      })
    })
    stageNode.addEventListener('pinchend', function(e) {
      self.absolutePosition({
        x: 0,
        y: 0
      }) //反向位移，将网格重置为初始位置
      self.scale({
        x: 1 / this.scale().x,
        y: 1 / this.scale().y
      })
    })
  }
}

/**
 * @description 定位点，图形组
 * @constructor
 * @augments Konva.Group
 * @param {boolean} attrs.visible 显示状态
 * @param {boolean} attrs.draggable 默认拖拽状态
 */
class Location extends Konva.Group {
  constructor(attrs = {}) {
    let pm = attrs
    delete attrs.id
    delete attrs.visible
    delete attrs.draggable

    var [x, y] = [0, 0]
    let p = baseMapNode.position()
    if (stageNode) {
      let pos = stageNode.position(),
        size = {
          width: stageNode.width(),
          height: stageNode.height()
        }
      x = (pos.x + size.width) / 2
      y = (pos.x + size.height) / 2
    }
    attrs.scale = {
      x: 1 / stageNode.scaleX(),
      y: 1 / stageNode.scaleY()
    }

    super({
      id: "Location",
      x,
      y,
      visible: Boolean(pm.visible), //typeof pm.visible === 'boolean'? pm.visible: false,
      draggable: Boolean(pm.draggable), //typeof pm.draggable === 'boolean'? pm.draggable: false, //拖拽
      ...attrs
    })

    let self = this //重置this指向

    /**
     * @description 定位点图标 
     */
    let locationIcon = new Konva.Group({
      id: 'locationIcon'
    })
    Object.defineProperty(this, 'locationIcon', {
      value: locationIcon,
      writable: false,
      enumerable: false
    });

    let radius = 12
    let scope = new Konva.Circle({ //定位点范围
      id: "location_scope",
      radius: radius,
      // fill: '#80a9ff',
      fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.3)', 0.4, 'rgba(252, 0, 13, 0.1)', 1,
        'rgba(255, 255, 255,0)'
      ],
      fillRadialGradientStartRadius: radius,
      fillRadialGradientEndRadius: 0,
      // stroke: 'rgba(0, 158, 255, 1)',
      strokeWidth: 0.5,
      // opacity: 0.2,
      visible: !this.draggable()
    });
    let circle = new Konva.Circle({ //圆心
      id: "location_circle",
      radius: radius ,
      fill: '#fff',//'rgb(255, 0, 0)', //'#0033FF',
      //strokeWidth: 0
      shadowColor: 'rgba(255, 0, 0,1)', //'#0033FF',
      shadowBlur: 10,
    });
    let ring = new Konva.Ring({ //外圈
      id: "location_ring",
      innerRadius: radius / 1.5,
      outerRadius: radius,
      fill: '#fff',
      strokeWidth: 0.1,
      // stroke:"rgb(255, 0, 0)"
      shadowColor: 'rgba(255, 0, 0,0.8)', //'#0033FF',
      shadowBlur: 10,
      // shadowOpacity: 0.8
    });
    let arrow = new Konva.RegularPolygon({ //方向箭头
      id: "location_arrow",
      x: radius + 1,
      sides: 3,
      radius: radius-1,
      rotation: 90,
      fill: 'rgb(255, 0, 0)', //'#0033FF',
      // stroke:"rgb(255, 0, 0)"
      // shadowColor: 'rgb(255, 0, 0)',//'#0033FF',
      // shadowBlur: 3,
      // shadowOpacity: 0.8
    });
    this.locationIcon.add(scope, arrow, circle)
    /**
     * @description 方向校正器
     */
    let revise = new Konva.Group({ //定位辅助，调整方向
      id: 'revise',
      visible: this.draggable(),
    })
    Object.defineProperty(this, 'revise', { //设置为隐式可访问不可修改
      value: revise,
      writable: false,
      enumerable: false
    });
    let scope2 = new Konva.Circle({ //调节器范围
      id: 'revise_scope2',
      radius: 80,
      // fillRadialGradientStartPoint:{x: 0,y: 0},
      //fillRadialGradientColorStops:[0,'rgba(0, 158, 255, 0.3)',0.3,'rgba(0, 158, 255, 0.1)',1,'rgba(255, 255, 255,0)'],
      fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.3)', 0.4, 'rgba(252, 0, 13, 0.1)', 1,
        'rgba(255, 255, 255,0)'
      ],
      // fillLinearGradientEndPoint:{x: 200,y: 100}, 
      fillRadialGradientStartRadius: 80,
      fillRadialGradientEndRadius: 0,
      // fillPriority:'radial-graident',
      //fill: 'rgba(32, 244, 18, 0.1)',//'rgba(253, 141, 146, 0.3)',//'rgba(128, 189, 255, 0.2)'
      stroke: 'rgba(252, 0, 13, 0.5)', //'rgb(32, 244, 18)', //'rgb(252, 0, 13)', //'rgb(80, 138, 255)'
      strokeWidth: 0.5,
      //opacity:0.2,
      // visible:false
    });
    Object.defineProperty(this, 'scope2', { //设置为隐式可访问不可修改
      value: scope2,
      writable: false,
      enumerable: false
    });

    let line = new Konva.Line({ //角度线
      id: 'revise_line',
      points: [0, 0, scope2.y() + scope2.radius(), 0],
      stroke: '#fc0a07',
      strokeWidth: 1,
      shadowColor: '#fd5807',
      // shadowBlur: 3,
      // shadowOpacity: 0.8,
      hitStrokeWidth: 20,
    })
    Object.defineProperty(this, 'line', { //设置为隐式可访问不可修改
      value: line,
      writable: false,
      enumerable: false
    });
    let anchor = new Konva.Circle({ //方向调节拖拽点
      id: 'revise_anchor',
      x: scope2.x() + scope2.radius(),
      radius: 12,
      fill: '#ffffff',
      stroke: '#fd5807',
      strokeWidth: 1.5,
      shadowColor: '#fd5807',
      // shadowBlur: 3,
      // shadowOpacity: 0.8,
      hitStrokeWidth: 20,
      draggable: true, //拖拽 
      dragBoundFunc: function(pos) {
        let center = self.absolutePosition() //圆心
        let radian = Math.atan2((pos.y - center.y), (pos.x - center.x)) // 弧度
        let x = center.x + scope2.radius() / scope2.scaleX() * Math.cos(radian),
          y = center.y + scope2.radius() / scope2.scaleY() * Math.sin(radian);
        // console.log(radian); 
        return {
          x,
          y
        }
      }
    });
    Object.defineProperty(this, 'anchor', { //设置为隐式可访问不可修改
      value: anchor,
      writable: false,
      enumerable: false
    });
    anchor.on('dragmove', function(evt) {
      evt.cancelBubble = true;
    });
    this.revise.add(scope2, line, anchor)
    this.add(this.revise, this.locationIcon)

    /**
     * @description 定位回调函数
     */
    this.locaFun = function() {}
    anchor.addEventListener('dragmove', function(e) {
      let {
        x,
        y
      } = this.position() //this.absolutePosition()
      let deg = 180 * Math.atan2(y, x) / Math.PI
      line.points([0, 0, x, y])
      self.locationIcon.rotation(deg)

      self.locaFun({
        angle: self.locationIcon.rotation(),
        x: self.x() - baseMapNode.x(),
        y: self.y() - baseMapNode.y()
      })
    })
    this.addEventListener('dragmove', function(e) {
      e.cancelBubble = true;
      self.locaFun({
        angle: self.locationIcon.rotation(),
        x: self.x() - baseMapNode.x(),
        y: self.y() - baseMapNode.y()
      })
    })
    stageNode.addEventListener('pinchend', function() {
      let scale = stageNode.scaleX()
      self.scale({
        x: 1 / scale,
        y: 1 / scale
      })
      if (scale > 8) {
        scale = 8
      }
      scope.scale({
        x: scale,
        y: scale
      })
      scope.strokeWidth(1 / scale)
    })
    wheelEvent(() => {
      let scale = stageNode.scaleX()
      self.scale({
        x: 1 / scale,
        y: 1 / scale
      })
      if (scale > 8) {
        scale = 8
      }
      scope.scale({
        x: scale,
        y: scale
      })
      scope.strokeWidth(1 / scale)
    })
  }
  /**
   * @description 获取当前定位以及方向角度
   */
  getLocation(callback = function() {}) {
    this.locaFun = callback
    return {
      angle: this.locationIcon.rotation(),
      x: this.x() - baseMapNode.x(),
      y: this.y() - baseMapNode.y()
    }
  }
  /**
   * @description 设置当前定位以及方向角度
   */
  setLocation({
    angle,
    x,
    y
  }) {
    // console.log({angle,x,y});
    //if(this.revise.visible()){
    let center = this.absolutePosition() //圆心
    let radian = angle * Math.PI / 180 //Math.atan2((pos.y-center.y), (pos.x-center.x)) // 弧度
    let xc = center.x + this.scope2.radius() * this.scope2.scaleX() * Math.cos(radian),
      yc = center.y + this.scope2.radius() * this.scope2.scaleY() * Math.sin(radian);
    this.anchor.absolutePosition({
      x: xc,
      y: yc
    })
    let arPos = this.anchor.position()
    this.line.points([0, 0, arPos.x, arPos.y])
    //}

    this.locationIcon.rotation(angle)

    this.position({
      x,
      y
    }) //重置坐标 画布坐标系
    this.move(baseMapNode.position()) //更改为图片坐标系
    this.visible(true)
  }
  /**
   * @description 设置可拖拽状态
   * @param {Object} drag 可拖拽状态 默认 true
   */
  dragStatus(drag) {
    if (typeof drag == 'boolean') {
      this.draggable(drag)
      this.revise.visible(drag)
      this.findOne('#location_scope').visible(!drag)
    }
    return this.draggable()
  }
}


/**
 * @description 定位轨迹
 * @constructor
 * @augments Konva.Group
 */
class LocationTrack extends Konva.Group{
  constructor(attrs={}) {
    attrs.id = 'LocationTrack'
    !attrs.pixelRatio ? attrs.pixelRatio = 2 : null
    !attrs.strokeWidth? attrs.strokeWidth = 5  : null;
    !attrs.startPosition? attrs.startPosition = {x:0,y:0} : null
    super(attrs)
    this.position(baseMapNode.position()) //轨迹图组默认坐标系
    //创建离屏渲染画布
    // let _bufferCanvas = new Konva.Canvas({
    //   pixelRatio:attrs.pixelRatio,
    //   width: baseMapNode.width() * attrs.pixelRatio ,
    //   height : baseMapNode.height() * attrs.pixelRatio
    // })
    // console.log(_bufferCanvas);
    // let _bufferContext = new Konva.Context()
    // console.log(Context);
   let _bufferCanvas = document.createElement('canvas'); 
    _bufferCanvas.width = baseMapNode.width() * attrs.pixelRatio;
    _bufferCanvas.height = baseMapNode.height() * attrs.pixelRatio;
   let _bufferContext = _bufferCanvas.getContext('2d');
   _bufferCanvas.minPos = {x:0,y:0}
   _bufferCanvas.maxPos = {x:baseMapNode.width(),y:baseMapNode.height()}
   
   this._bufferCanvas = _bufferCanvas;
   this._bufferContext = _bufferContext
   this._oldpos =  _bufferCanvas.minPos
   
    // 吧创建的画布以图片的形式添加到主屏画布中，
    this._image = new Konva.Image({
      image: _bufferCanvas,
      x:0,y:0,
      scale:{x:1/attrs.pixelRatio,y:1/attrs.pixelRatio},
      stroke:"#f50015",
      strokeWidth:5
    });
    
    // console.log(_bufferCanvas.maxPos);
    this.add(this._image); 
    // this.move(baseMapNode.position())
    // this.position(baseMapNode.position())
    //设置离屏画布基础参数（绘图模式，画笔颜色，端点样式，线宽）
    // _bufferContext.strokeStyle = attrs.strokeStyle || '#00ff00';
    // _bufferContext.lineJoin = 'round'
    // _bufferContext.lineWidth = attrs.strokeWidth//*attrs.pixelRatio || 5*attrs.pixelRatio;
    
    
    
    let xline = new Konva.Line({
      points:[-200,0,200,0],
      stroke: '#fc0006',
      strokeWidth: 2,
      globalCompositeOperation:'source-over',
      lineCap: 'round',
    });
    let yline = new Konva.Line({
      points:[0,-200,0,200],
      stroke: '#fc0006',
      strokeWidth: 2,
      globalCompositeOperation:'source-over',
      lineCap: 'round',
    });
    this.add(xline,yline)
    /* this.lastLine = new Konva.Line({
      stroke: '#df4b26',
      strokeWidth: 5,
      globalCompositeOperation:'source-over',
      lineCap: 'round',
    });
    this.add(this.lastLine) */
  }
  /**
   * 当轨迹坐标值不在当前离屏画布范围内时重新计算离屏画布尺寸并更改，所有内容按照最小点重新规划
   * @description 绘制轨迹
   * 
   */
  track(param={x:0,y:0,strokeStyle:"#00ff00"}){
    // let circle = new Konva.Circle({ //圆心
    //   x:param.x,
    //   y:param.y,
    //   radius: 10 ,
    //   fill: 'rgb(255, 0, 0)', //'#0033FF',
    // });
    // this.add(circle)
    
    let attrs = this.getAttrs()
    let start = attrs.startPosition
    //过滤最大最小坐标
    if(param.x > this._bufferCanvas.maxPos.x){
      this._bufferCanvas.maxPos.x =param.x
    }
    if(param.x < this._bufferCanvas.minPos.x ){
      this._bufferCanvas.minPos.x =param.x
    }
    if(param.y > this._bufferCanvas.maxPos.y){
      this._bufferCanvas.maxPos.y = param.y
    }
    if(param.y < this._bufferCanvas.minPos.y){
      this._bufferCanvas.minPos.y = param.y
    }
    
    let pixelRatio = attrs.pixelRatio
    
    let lt = this._posSwitch(param,pixelRatio) //图层坐标转换为缓冲层坐标
    
    // this._bufferContext.beginPath()
    this._bufferContext.rect(0,0,this._bufferCanvas.width,this._bufferCanvas.height);
    let nonzero = this._bufferContext.isPointInPath(lt.x,lt.y) //判断当前点在不在此路径范围内

    if(!nonzero){ //绘制坐标不在规定范围内，修改缓冲画布尺寸并重置归零相对位置
      let data = this._bufferContext.getImageData(0,0,this._bufferCanvas.width,this._bufferCanvas.height) //获取更改尺寸前画布像素数据
      
      this._bufferCanvas.width =Math.round((this._bufferCanvas.maxPos.x - this._bufferCanvas.minPos.x)*pixelRatio) ; //重新定义离屏画布尺寸
      this._bufferCanvas.height = Math.round((this._bufferCanvas.maxPos.y - this._bufferCanvas.minPos.y)*pixelRatio);
      let pos = {
        x:this._bufferCanvas.minPos.x,
        y:this._bufferCanvas.minPos.y
      }
      let putPos = {
        x:Math.sqrt(pos.x*pos.x) - Math.sqrt(this._oldpos.x*this._oldpos.x),
        y:Math.sqrt(pos.y*pos.y) - Math.sqrt(this._oldpos.y*this._oldpos.y),
      }
      this._bufferContext.putImageData(data,putPos.x,putPos.y) //将重置尺寸之前画布的像素数据回显到当前画布
      this._image.position(pos)
      this.draw()
      this._oldpos = pos //更改画布尺寸后的最小坐标值
    }
    // this._bufferContext.beginPath();
    // this._bufferContext.strokeStyle = '#fc00eb'
    // this._bufferContext.fillStyle = '#fc00eb'
    // this._bufferContext.arc(0,0,50,0,2*Math.PI);
    // this._bufferContext.fill();
    
    
    
    this._bufferContext.beginPath();
    this._bufferContext.lineWidth = attrs.strokeWidth * pixelRatio;
    this._bufferContext.lineJoin = 'round';
    this._bufferContext.globalCompositeOperation = 'source-over';
    this._bufferContext.strokeStyle = param.strokeStyle || '#00ff00';
    this._bufferContext.miterLimit=2
    
    let mt = this._posSwitch(start,pixelRatio)
    this._bufferContext.moveTo(mt.x,mt.y)
    
    this._bufferContext.lineTo(lt.x,lt.y);
    this._bufferContext.closePath();
    this._bufferContext.stroke();

    this.setAttrs({startPosition:param})
    
    // console.log([this._bufferCanvas.width,this._bufferCanvas.height],[param.x,param.y],[param.x*pixelRatio,param.y*pixelRatio],[param.x*pixelRatio, param.y*pixelRatio],nonzero);
    
    // console.log(this._posSwitch({x:1,y:1},2));
  }
  _posSwitch(p,px=1){
    let pos = this._image.position() //缓冲画布当前坐标 图层中的坐标非canvas内内部坐标系
    let x = pos.x - p.x,
        y = pos.y - p.y
    return {
      x:Math.sqrt(x*x)*px,
      y:Math.sqrt(y*y)*px
    }
  }
  drawTrack({x,y,strokeStyle}){
    let attrs = this.getAttrs()
    // let px = this._bufferCanvas.height/attrs.pixelRatio ,py = this._bufferCanvas.width/attrs.pixelRatio;
    // if(x > this._bufferCanvas.width/attrs.pixelRatio || x < this._bufferCanvas.minPos.x ){
    //   this._resaveCanvas(x,this._bufferCanvas.height/attrs.pixelRatio)
    //   //px = Math.sqrt(x*x)
    // } 
    // if(y > this._bufferCanvas.height/attrs.pixelRatio || y < this._bufferCanvas.minPos.y){
    //   this._resaveCanvas(this._bufferCanvas.width/attrs.pixelRatio,y)
    //   //py = Math.sqrt(y*y)
    // }
    let reset = 0
    //过滤最大最小坐标
    if(x > this._bufferCanvas.maxPos.x){
      this._bufferCanvas.maxPos.x =x
      reset = 1
    }
    if(x < this._bufferCanvas.minPos.x && x < 0){
      this._bufferCanvas.minPos.x =x
      reset = 2
    }
    if(y > this._bufferCanvas.maxPos.y){
      this._bufferCanvas.maxPos.y = y
      reset = 1
    }
    if(y < this._bufferCanvas.minPos.y && y < 0){
      this._bufferCanvas.minPos.y = y
      reset = 2
    }
    //负值坐标转换正值
    let minPlus = { //canvas最小坐标
      x:Math.sqrt(this._bufferCanvas.minPos.x*this._bufferCanvas.minPos.x),
      y:Math.sqrt(this._bufferCanvas.minPos.y*this._bufferCanvas.minPos.y)
    },
    posPlus = {
      x:Math.sqrt(x*x),
      y:Math.sqrt(y*y)
    }
    let pixelRatio = attrs.pixelRatio
    let _bufferCanvasSize = [this._bufferCanvas.width/pixelRatio,this._bufferCanvas.height/pixelRatio] //更改前画布的尺寸
    
    // 尺寸发生变化需要更改离屏画布尺寸 (只存在放大条件)
    if(reset == 2){
      let data = this._bufferContext.getImageData(0,0,this._bufferCanvas.width,this._bufferCanvas.height) //获取更改尺寸前画布像素数据
      //实际画布尺寸
      let W = this._bufferCanvas.maxPos.x+minPlus.x, //新华画布的尺寸
          H = this._bufferCanvas.maxPos.y+minPlus.y
          
      this._bufferCanvas.width = W*pixelRatio; //重新定义离屏画布尺寸
      this._bufferCanvas.height = H*pixelRatio;
      this._bufferContext.putImageData(data, 0,0) //将重置尺寸之前画布的像素数据回显到当前画布
      
    }else if(reset == 1){
      
    }
    
    if(reset !== 0){
      
    }
    let differPos = [this._bufferCanvas.width/pixelRatio - _bufferCanvasSize[0],this._bufferCanvas.height/pixelRatio - _bufferCanvasSize[1]]
    //为负值坐标归零
    //TODO 根据坐标正负状态分别计算归零坐标
    let oldPos = this.position()
    this.position({
      x:oldPos.x - differPos[0],
      y:oldPos.y - differPos[1]
    })
    // console.log(this.position());
    let coord = {
      x:posPlus.x - this.x(),
      y:posPlus.y - this.y()
    }
    console.log(coord);
    
    let start = attrs.startPosition
    
    
    // let grd = this._bufferContext.createLinearGradient(start.x*pixelRatio,start.y*pixelRatio,x*pixelRatio, y*pixelRatio)
    // grd.addColorStop(0,this._oldColor || strokeStyle);
    // grd.addColorStop(1,strokeStyle);
    
    this._bufferContext.beginPath();
    this._bufferContext.lineWidth = attrs.strokeWidth *attrs.pixelRatio;
    this._bufferContext.lineJoin = 'round';
    this._bufferContext.globalCompositeOperation = 'source-over';
    this._bufferContext.strokeStyle = strokeStyle || '#00ff00';
    this._bufferContext.miterLimit=2
    
    this._bufferContext.moveTo(start.x*pixelRatio,start.y*pixelRatio)
    this._bufferContext.lineTo(coord.x*pixelRatio, coord.y*pixelRatio);
    this._bufferContext.closePath();
    this._bufferContext.stroke();
    // this.setAttrs({startPosition:{x,y}})
    this.setAttrs({startPosition:coord})
    // this.position(baseMapNode.position())
    
    this._oldColor = strokeStyle
    
    /* var newPoints = this.lastLine.points().concat([x, y])
     this.lastLine.stroke(strokeStyle)
    this.lastLine.points(newPoints);
    // this.move(baseMapNode.position())
    this.position(baseMapNode.position())
    // this.clearCache()
    this.cache({
      pixelRatio:5
    });
    console.log(this.width()); */
  }
  _resaveCanvas(x,y){
    // console.log(x,y);
    let mx = 0,my = 0
    // if(!x){
    //   mx = Math.sqrt(x*x)
    //   this._image.x(x)
    // }
    // if(!y){
    //   my = Math.sqrt(y*y)
    //   this._image.x(y)
    // }
    let data = this._bufferContext.getImageData(0,0,this._bufferCanvas.width,this._bufferCanvas.height) //获取画布像素数据
    this._bufferCanvas.width = (mx+x)*this.getAttrs().pixelRatio; //重新定义离屏画布尺寸
    this._bufferCanvas.height = (my+y)*this.getAttrs().pixelRatio;
    this._bufferContext.putImageData(data, 0, 0) //将重置尺寸之前画布的像素数据回显到当前画布
  }
}

class Track extends Konva.Group{
  constructor(attrs) {
    attrs.id = 'LocationTrack'
    !attrs.pixelRatio ? attrs.pixelRatio = 2 : null
    !attrs.strokeWidth? attrs.strokeWidth = 5  : null;
    super(attrs)
    this.position(baseMapNode.position())
    //创建轨迹路线
    this._lastLine = new Konva.Line({
      stroke: '#df4b26',
      strokeWidth: 5,
      globalCompositeOperation:'source-over',
      lineCap: 'round',
    });
    this.add(this._lastLine)
    
  }
  track({x,y,strokeStyle}){
    // var newPoints = this._lastLine.points().concat([x, y])
    //  this._lastLine.stroke(strokeStyle)
    // this._lastLine.points(newPoints);
    // this.move(baseMapNode.position())
    let attrs = this.getAttrs()
    this._lastLine = new Konva.Line({
      points:[attrs.startPosition.x,attrs.startPosition.y,x,y],
      stroke: strokeStyle,//'#df4b26',
      strokeWidth: 5,
      lineCap: 'round',
    });
    this.add(this._lastLine)
    // this.position(baseMapNode.position())
    
    this.clearCache()
    this.cache({
      pixelRatio:2
    });
    
    this.setAttrs({startPosition:{x,y}})
    // console.log(this.width());
    
  }
}
/**
 * @description 绘制路径线路图组
 * @constructor
 * @augments Konva.Group
 */
class Path extends Konva.Group {
  constructor(attrs = {}) {
    attrs.id = 'Path'
    super(attrs)
    if (!attrs.points) return
    this.background = new Konva.Line({
      points: attrs.points,
      bezier: true,
      stroke: 'rgba(0, 255, 0, 0.3)',
      strokeWidth: 15,
      hitStrokeWidth: 15, //增加事件响应范围
      lineCap:'round'
      // shadowColor:'#ff0000',
      // shadowBlur:10,
      // shadowOffset:{x:0,y:0},
      // shadowOpacity:1,
      // closed:true
    })
    this.line = new Konva.Line({
      points: attrs.points,
      bezier: true,
      stroke: '#0099FF',
      strokeWidth: 3,
      lineCap:'round'
      // hitStrokeWidth: 15, //增加事件响应范围
      // shadowColor:'#ff0000',
      // shadowBlur:10,
      // shadowOffset:{x:0,y:0},
      // shadowOpacity:1,
      // closed:true
    })
    this.add(this.background,this.line)
    
    this.move(baseMapNode.position())
    
    
    // this.setAttrs({
    //   borderSize: 3,
    //   borderColor: 'red',
    // })
    // this.filters([Border])
    this.clearCache()
    this.cache({
      pixelRatio:5
    });
    
   this.on('click touchstart', (evt) => {
     evt.cancelBubble = true;
     console.log(evt);
   })
  }
  
  toggleHitCanvas(){
    console.log(this.getParent());
    this.getParent().toggleHitCanvas()
  }
  points(points){
    this.background.points(points)
    this.background.stroke('rgba(255, 0, 0, 0.3)')
    this.line.points(points)
    this.clearCache()
    this.cache({
      pixelRatio:5
    });
  }
}






var canvas = document.createElement('canvas');
var tempCanvas = document.createElement('canvas');

// make all pixels opaque 100% (except pixels that 100% transparent)
function removeTransparency(canvas) {
  var ctx = canvas.getContext('2d');

  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var nPixels = imageData.data.length;
  for (var i = 3; i < nPixels; i += 4) {
    if (imageData.data[i] > 0) {
      imageData.data[i] = 255;
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

function Border(imageData) {
  var nPixels = imageData.data.length;

  var size = this.getAttr('borderSize') || 0;

  // - first set correct dimensions for canvases
  canvas.width = imageData.width;
  canvas.height = imageData.height;

  tempCanvas.width = imageData.width;
  tempCanvas.height = imageData.height;

  // - the draw original shape into temp canvas
  tempCanvas.getContext('2d').putImageData(imageData, 0, 0);

  // - then we need to remove alpha chanel, because it will affect shadow (transparent shapes has smaller shadow)
  removeTransparency(tempCanvas);

  var ctx = canvas.getContext('2d');
  var color = this.getAttr('borderColor') || 'black';

  // 3. we will use shadow as border
  // so we just need apply shadow on the original image
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = size;
  ctx.drawImage(tempCanvas, 0, 0);
  ctx.restore();

  // - Then we will dive in into image data of [original image + shadow]
  // and remove transparency from shadow
  var tempImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  var SMOOTH_MIN_THRESHOLD = 3;
  var SMOOTH_MAX_THRESHOLD = 10;

  let val, hasValue;

  var offset = 3;

  for (var i = 3; i < nPixels; i += 4) {
    // skip opaque pixels
    if (imageData.data[i] === 255) {
      continue;
    }

    val = tempImageData.data[i];
    hasValue = val !== 0;
    if (!hasValue) {
      continue;
    }
    if (val > SMOOTH_MAX_THRESHOLD) {
      val = 255;
    } else if (val < SMOOTH_MIN_THRESHOLD) {
      val = 0;
    } else {
      val =
        ((val - SMOOTH_MIN_THRESHOLD) /
          (SMOOTH_MAX_THRESHOLD - SMOOTH_MIN_THRESHOLD)) *
        255;
    }
    tempImageData.data[i] = val;
  }

  // draw resulted image (original + shadow without opacity) into canvas
  ctx.putImageData(tempImageData, 0, 0);

  // then fill whole image with color (after that shadow is colored)
  ctx.save();
  ctx.globalCompositeOperation = 'source-in';
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  // then we need to copy colored shadow into original imageData
  var newImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  var indexesToProcess = [];
  for (var i = 3; i < nPixels; i += 4) {
    var hasTransparentOnTop =
      imageData.data[i - imageData.width * 4 * offset] === 0;
    var hasTransparentOnTopRight =
      imageData.data[i - (imageData.width * 4 + 4) * offset] === 0;
    var hasTransparentOnTopLeft =
      imageData.data[i - (imageData.width * 4 - 4) * offset] === 0;
    var hasTransparentOnRight = imageData.data[i + 4 * offset] === 0;
    var hasTransparentOnLeft = imageData.data[i - 4 * offset] === 0;
    var hasTransparentOnBottom =
      imageData.data[i + imageData.width * 4 * offset] === 0;
    var hasTransparentOnBottomRight =
      imageData.data[i + (imageData.width * 4 + 4) * offset] === 0;
    var hasTransparentOnBottomLeft =
      imageData.data[i + (imageData.width * 4 - 4) * offset] === 0;
    var hasTransparentAround =
      hasTransparentOnTop ||
      hasTransparentOnRight ||
      hasTransparentOnLeft ||
      hasTransparentOnBottom ||
      hasTransparentOnTopRight ||
      hasTransparentOnTopLeft ||
      hasTransparentOnBottomRight ||
      hasTransparentOnBottomLeft;

    // if pixel presented in original image - skip it
    // because we need to change only shadow area
    if (
      imageData.data[i] === 255 ||
      (imageData.data[i] && !hasTransparentAround)
    ) {
      continue;
    }
    if (!newImageData.data[i]) {
      // skip transparent pixels
      continue;
    }
    indexesToProcess.push(i);
  }

  for (var index = 0; index < indexesToProcess.length; index += 1) {
    var i = indexesToProcess[index];

    var alpha = imageData.data[i] / 255;

    if (alpha > 0 && alpha < 1) {
      var aa = 1 + 1;
    }
    imageData.data[i] = newImageData.data[i];
    imageData.data[i - 1] =
      newImageData.data[i - 1] * (1 - alpha) +
      imageData.data[i - 1] * alpha;
    imageData.data[i - 2] =
      newImageData.data[i - 2] * (1 - alpha) +
      imageData.data[i - 2] * alpha;
    imageData.data[i - 3] =
      newImageData.data[i - 3] * (1 - alpha) +
      imageData.data[i - 3] * alpha;

    if (newImageData.data[i] < 255 && alpha > 0) {
      var bb = 1 + 1;
    }
  }
}




export default {
  version: '1.0.0',
  Stage, //舞台 
  Layer: Konva.Layer, //图层
  Group: Konva.Group, //图组
  BaseMap,
  Grid,
  Location,
  LocationTrack,
  Track,
  Path
}
