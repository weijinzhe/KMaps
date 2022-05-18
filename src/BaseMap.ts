/*
 * @Author: wjz
 * @Date: 2021-10-26 15:59:56
 * @LastEditors: wjz
 * @LastEditTime: 2022-04-18 15:28:54
 * @FilePath: /kmaps/src/BaseMap.ts
 */
import Konva from "./js/konva.min.js"


/**
 * @description 底图类,用于绘制地图图片，计算初始坐标系
 * @constructor
 * @class
 * @extends {Konva.Image}
 * @param {boolean} awaitMap 是否等待底图绘制状态,开启坐标重置订阅器
 * @example 
 * let node = new BaseMap(可选参数) //详情参照Konva中的Image
 */
export default class BaseMap extends Konva.Group {
    constructor(attrs:object = {}) {
      attrs['id'] = 'BaseMap';
      // !attrs["awaitMap"]? attrs["awaitMap"] = true : null
      attrs["awaitMap"] !== false ? attrs["awaitMap"] = true : null
      super(attrs);
      this._image = new  Konva.Image({id:"_image"})
      this._state = false
      this.add(this._image)
      let self = this
      window["_KMap"]["_BaseMap"] = this; //将_KMap挂载到window对象上
      this._wacth = new Proxy({},{ //监听图片绘制变化，调用图形坐标重置
        set: function (target, propKey, value, receiver) {
          window["_KMap"]["_BaseMap_unpdata"].forEach((item:any) => {
            item(self)
          });
          return Reflect.set(target, propKey, value, receiver);
        }
      })
    }
    /**
     * @description 绘制图片到此图层
     * @param {Object} img 图片节点
     * @example 
     * node.images(img)
     * return BaseMap对象
     */
    image(img:any) {
      let width = img.width, //图片宽度
        height = img.height; //图片高度
      let stage = super.getStage()
      this.position({
        x: stage.size().width / 2 - width / 2,
        y: stage.size().height / 2 - height / 2
      })
      this.size({
        width,
        height
      })
      this._image.image(img)
      this._state = true
      if(this.attrs["awaitMap"]){
        this._wacth.time = new Date().getTime();
      }
      return this
    }
    /**
     * @description 根据图片坐标重置图层的默认坐标系归零点
     * @param {boolean}  默认true
     */
    awaitMap(param?:boolean){
      if (!arguments.length) { return this.attrs.awaitMap }
      this.attrs.awaitMap = param
    }
    /**
     * @description 将目标坐标转换为相对图片的坐标（图片左上角为0，0 点）
     * @param pos {x,y} 坐标位置 
     * @returns 转换后的坐标位置
     */
    relativePosition(pos){
      let scale = this.getStage().scaleX()
      let absPos = this.getAbsolutePosition()
      return {
        x:(pos.x-absPos.x)/scale,
        y:(pos.y-absPos.y)/scale
      }
    }
  }