/*
 * @Author: wjz
 * @Date: 2021-11-12 11:02:13
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-20 02:05:53
 * @FilePath: /kmaps/src/Group.ts
 */
import Konva from "./js/konva.min.js"

/**
 * Group
 * @description 重写的add方法 在原功能基础上增加调用子节点绘制方法
 * @extends Konva.Group
 * @param {boolean} awaitMap 是否等待底图绘制状态
 * @example
 * let node = new Group()
 */
export default class Group extends Konva.Group {
  constructor(attrs) {
    attrs["awaitMap"] = true

    super(attrs)
    if(attrs["awaitMap"]){
      window["_KMap"]["_BaseMap_unpdata"].push(this._position.bind(this))
      this.visible(false)
    }
  }
  async _position(map){
    let {x,y} = map.attrs
    this.position({x,y})
    this.visible(true)
  }
  /**
   * @description 添加子节点元素，参数顺序为节点图层排列顺序
   * @example
   * node.add(child1,child2,child3)
   */
  add() {
    for(let item of arguments){
      super.add(item)
      if(item._draw){
        item._draw()
      }
    }
  }
}