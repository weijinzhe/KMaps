/*
 * @Author: wjz
 * @Date: 2021-10-26 15:59:56
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-14 00:42:53
 * @FilePath: /kmaps/src/BaseMap.ts
 */
import Konva from "./js/konva.min.js"
/**
 * @description 底图类,用于绘制地图图片，计算初始坐标系
 * @constructor
 * @class
 * @extends {Konva.Image}
 * @augments Konva.Image
 * @example 
 * let node = new BaseMap(可选参数) //详情参照Konva中的Image
 */
export default class BaseMap extends Konva.Group {
    constructor(attrs:object = {}) {
      attrs['id'] = 'BaseMap';
      super(attrs);
      this._image = new  Konva.Image()
      this.add(this._image)
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
      return this
    }
  }