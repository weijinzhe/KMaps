/*
 * @Author: wjz
 * @Date: 2022-02-09 14:26:02
 * @LastEditors: wjz
 * @LastEditTime: 2022-04-08 15:52:34
 * @FilePath: /kmaps/src/AnchorLine.ts
 */


import Konva from "./js/konva.min";


import { arrayConvert ,adsorb} from './_util'

// import Hammer from "./js/hammer-konva"



interface attrs {
  id: string, //id
  name?: string, //名字
  points: [[number, number], [number, number]] //坐标点数据
  stroke: string, //画笔颜色
  strokeWidth?: number, //画笔宽度
  hitStrokeWidth?: number, // 点击识别范围
  fill?: string, //填充颜色
  dash?: Array<number>, // 虚线数组 详情参照konva.Line
  closed?: boolean, //是否闭合图形
  draggable?: boolean, //是否可拖拽
  anchor?: boolean //是否绘制拖拽锚点 默认为true
  anchorVisible?: boolean, //拖拽锚点是否显示默认 false, anchor 为true时有效
  absoluteSize?: boolean //绝对尺寸，不与舞台一同缩放 默认false
  adsorb?: boolean //是否开启拖拽锚点吸附 只有富含拖拽锚点的图形才能对其吸附
}



/**
 * @description 带有拖拽锚点的 Line 允许闭合为多边形
 * @param {Object} attrs 详情参数参考Konva.Circle
 * 
 * @param {String} attrs.id id 
 * @param {String} attrs.name name
 * @param {Array} attrs.points 坐标点数据
 * @param {String} attrs.stroke 画笔颜色 仅初始化时可设置
 * @param {Number} attrs.strokeWidth 画笔宽度 仅初始化时可设置
 * @param {Number} attrs.hitStrokeWidth 点击识别范围 仅初始化时可设置
 * @param {String} attrs.fill 填充颜色
 * @param {Array} attrs.dash  虚线数组 详情参照konva.Line 仅初始化时可设置
 * @param {Boolean} attrs.closed 是否闭合图形 仅初始化时可设置
 * @param {Boolean} attrs.draggable 是否可拖拽 
 * @param {Boolean} attrs.anchor 是否绘制拖拽锚点 默认为true 仅初始化时可设置
 * @param {Boolean} attrs.anchorVisible 拖拽锚点是否显示默认 true, anchor 为true时有效 
 * @param {Boolean} attrs.absoluteSize 绝对尺寸，与舞台一同缩放 默认true 仅初始化时可设置
 * @param {Boolean} attrs.adsorb 是否开启锚点吸附
 * 
 * @example 
 * let node = new KMaps.AnchorLine({...})
 */
export default class AnchorLine extends Konva.Group {
  constructor(attrs: attrs) {
    attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true //绝对尺寸，与舞台一同缩放
    attrs["anchor"] === false ? null : attrs["anchor"] = true //拖拽锚点

    super(attrs)
    this._strokeWidth = attrs.strokeWidth || 1//宽度默认为1
    this._hitStrokeWidth = attrs.hitStrokeWidth
    if (attrs.draggable) {
      this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
        e.cancelBubble = true;//阻止事件冒泡
      })
    }
    this._stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage
    this._lineFun(attrs)
    if (attrs['anchor'] !== false) {
      attrs.points.forEach((_item: any, _index: any, _array: any) => {
        this._circleFun({ x: _item[0], y: _item[1] }, _index)
      });
    }
    //锚点拖拽吸附
    if (this.attrs.adsorb) {
      adsorb(this, this._stage) 
    }

    let self: any = this
    // let hammer = new Hammer(self, { //绑定事件
    //   domEvents: true,
    //   recognizers: [
    //     [Hammer["Press"], {
    //       time: 500 //长按响应时间
    //     }]
    //   ]
    // });

    //缩放事件监听
    this._stage.addEventListener("scaleend setscale", function (e: any) {
      e.cancelBubble = true;
      let scale = self._stage.scaleX()
      if (self.attrs.absoluteSize) {
        self._line.strokeWidth(self._strokeWidth / scale) //缩放边缘线宽度
        if (!self.attrs.closed) {
          // self._line.strokeWidth(self._strokeWidth / scale) //缩放线宽度
          self._line.hitStrokeWidth(self._hitStrokeWidth / scale) //缩放点击识别范围
        }
      }

      //获取拖拽锚点
      let anchorArr = self.find("._drag_anchor")
      for (let item of anchorArr) { //缩放锚点大小
        item.scale({
          x: 1 / scale,
          y: 1 / scale
        })
      }
    })

  }
  private _lineFun(attrs: any) {
    if (!attrs.points) { return }
    let scale = this._stage.scale()
    // let rgb = attrs.stroke ? colorHextoRGBA(attrs.stroke, 0.5) : ""
    // let _points = arrayConvert(attrs.points)
    let config = JSON.parse(JSON.stringify(attrs))
    let ats = Object.assign(config,{
      id: `_line`,
      name: "_line",
      x: 0,
      y: 0,
      points:arrayConvert(config.points),
      draggable:false,
      strokeWidth:(config.strokeWidth || 1) / scale.x,
    })
    // console.log('object :>> ', ats);
    let _line = new Konva.Line(ats)
    this.add(_line)
    this._line = _line
    // this._line = new Proxy(_line, { //监听图片绘制变化，调用图形坐标重置
    //   set: (target, propKey, value, receiver) => {
    //     this._line.position({ x: 0, y: 0 })
    //     return Reflect.set(target, propKey, value, receiver);
    //   }
    // })
  }
  /**
   * @description 虚线参数设置
   * 
   * @example 
   * 应用10像素长，间隔5像素的虚线描边
   * line.dash([10, 5]);
   * //应用由交替虚线组成的虚线描边
   * //10像素长，20像素宽的线，还有点
   * //半径为5px，相距20px
   * line.dash([10, 20, 0.001, 20]);
   */
  dash(arr: Array<number>) {
    this._line.dash(arr)
    this.attrs.dash = arr
  }
  private _circleFun({ x, y }, index: number) {
    let scale = this._stage.scale()
    let self = this
    let _anchor = new Konva.Circle({
      id: `_drag_anchor-${index}`, //拖拽点id
      name: "_drag_anchor",
      x, y,
      scale: { x: 1 / scale.x, y: 1 / scale.y },
      radius: 20,
      fill: 'rgba(255,255,255,0.6)',
      stroke: "rgba(0,200,100,1)",//'#00aaff',
      strokeWidth: 2,
      hitStrokeWidth: this.attrs.hitStrokeWidth, //自定义图形选取范围 
      visible: this.attrs.anchorVisible || false,//super.draggable() || false, //默认显示状态
      // visible: super.draggable() || false, //默认显示状态

      draggable: this.attrs.anchorVisible || false,
    })
    this.add(_anchor)
    if(index){
      this.findOne(`#_drag_anchor-${index-1}`).stroke("#00aaff")
    }
    
    _anchor.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
      e.cancelBubble = true;
      if(e.type == "dragmove"){
        let points = [] //拖拽锚点当前坐标
        let anchorArr = self.find("._drag_anchor")
        for (let item of anchorArr) {
          let { x, y } = item.position()
          points.push(x, y)
        }
        self._line.points(points)
      }
      
    })
    

    return _anchor
  }

  /**
   * @description 获取或设置图形可拖拽状态
   * @override
   * @param {boolean} param 可拖拽状态
   */
  draggable(param: boolean) {
    if (!arguments.length) { return super.draggable() }
    super.draggable(param)
    // let anchorArr = this.find("._drag_anchor")
    // for (let item of anchorArr) {
    //   item.visible(param)
    // }

    //防止事件冒泡，提前阻止，拖拽关闭后 移除
    if (param) {
      this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
        e.cancelBubble = true;//阻止事件冒泡
      })
    } else {
      this.off("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom")
    }
    return param
  }
  /**
   * @description 添加点，折线端点 拖拽锚点
   * @param {Array} points 点坐标数组 [x,y] 一次只能添加一个点
   * @returns {Object} this 返回更新后的对象本身
   */
  addPoints(points: [number, number]) {
    //添加拖拽锚点
    let anchor = super.find("._drag_anchor") //锚点序号index
    let pos = this.position()
    if (this.attrs.anchor) { 
      let ar = this._circleFun({ x: points[0]-pos.x, y: points[1] -pos.y}, anchor.length)
      if (this.attrs.adsorb) {
        adsorb(this, this._stage) //锚点拖拽吸附
      }
    }
    let line = this._line.points()
    line.push(points[0]-pos.x, points[1]-pos.y)
    this._line.points(line)
    this.attrs.points = this.getPoints()
    return this
  }
  /**
   * @description 移除点，线端点 拖拽锚点
   * @param {Array} index 移除的目标点 数组下标位置 index
   * @returns {Object} this 返回更新后的对象本身
   */
  removePoints(index) {
    let anchor = super.findOne(`#_drag_anchor-${index}`)
    //销毁目标锚点
    if (anchor) { anchor.destroy() } else { return }

    let points = this.getPoints() //获取当前锚点坐标数据
    // points.splice(index,1)
    this._line.points(arrayConvert(points))
    //获取需要移除的锚点对象
    this.attrs.points = this.getPoints()
    return this
  }

  /**
   * @description 锚点显示状态 anchor 为ture 可用 
   * @param {boolean} param 显示状态
   * @returns {boolean} anchorVisible 锚点显示状态
   * 
   */
  anchorVisible(param: boolean) {
    if (!arguments.length) { return this.attrs.anchorVisible || false }
    this.attrs.anchorVisible = param
    let anchorArr = this.find("._drag_anchor")
    for (let item of anchorArr) {
      item.visible(param)
      item.draggable(param)
      // if (param) {
      //   item.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
      //     e.cancelBubble = true;//阻止事件冒泡
      //   })
      // } else {
      //   item.off("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom")
      // }
    }

    

    return param
  }
  /**
   * @description 获取当前图形的锚点坐标
   * @returns 端点坐标 二维数组
   * @example
   * let points = node.getPoints() //[[10，10],[2020],...]
   */
  getPoints() {
    return this.find("._drag_anchor").map(item => {
      let { x, y } = item.getAbsolutePosition(this.getParent()) //相对父级节点的绝对位置
      return [x, y]
    })
  }
  /**
   * @description 获取锚点数组，参数传入锚点对象 #id .class 不传默认返回所有拖拽锚点的数组
   * @param {string} selector 选择器
   * @returns {Array} anchor 节点对象
   */
  getAnchor(selector:any): Array<any> | any{
    if(selector){
      return this.findOne(selector)
    }
    return this.find("._drag_anchor")
  }
  /**
   * @description 克隆对象
   * @override
   * @param {object} object json格式详情参考 Konva
   * @returns 克隆后的节点
   */
  clone(object: any = {}) {
    let points = this.getPoints() //获取当前最新锚点坐标位置数组
    let _obj = Object.assign({ points }, object) //与传入的参数合并，覆盖
    var node = Konva.Node.prototype.clone.call(this, _obj);
    node.position({ x: 0, y: 0 })
    return node;
  }
  
  /**
   * @description 是否允许锚点吸附 
   * @param {boolean} param json格式详情参考 Konva
   * @returns 克隆后的节点
   */
  adsorb(param?: boolean) {
    if (!arguments.length) { return this.attrs.adsorb || false }
    if (param && this.attrs.adsorb !== true) {
      adsorb(this, this._stage) //锚点拖拽吸附
      this.attrs.adsorb = param
    } else if(param == false){
      //移除 拖拽结束事件 关闭吸附功能
      for (let item of this.find("._drag_anchor")) {
        item.off('dragend')
      }
      this.attrs.adsorb = param
    }

    return param
  }
}



