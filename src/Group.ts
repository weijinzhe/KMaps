/*
 * @Author: wjz
 * @Date: 2021-11-12 11:02:13
 * @LastEditors: wjz
 * @LastEditTime: 2022-04-06 15:03:48
 * @FilePath: /kmaps/src/Group.ts
 */
import Konva from "./js/konva.min.js"

/**
 * Group
 * @description 重写的add方法 在原功能基础上增加调用子节点绘制方法
 * @extends Konva.Group https://konvajs.org/api/Konva.Group.html
 * @param {boolean} awaitMap 是否等待底图绘制状态
 * @example
 * let node = new Group()
 */
export default class Group extends Konva.Group {
  constructor(attrs) {
    attrs["awaitMap"] !== false ? attrs["awaitMap"] = true : null
    super(attrs)
    if(attrs["awaitMap"]){
      window["_KMap"]["_BaseMap_unpdata"].push(this._position.bind(this))
      if(attrs.visible !== false){return}
      this.visible(false)
    }
  }
  async _position(map){
    if(this.attrs.visible !== false){
      this.visible(true)
      this.attrs.visible = true
    }

    if(!this.attrs.awaitMap){return}
    let {x,y} = map.attrs
    this.position({x,y})
    // this.offsetX(x*-1)
    // this.offsetY(y*-1)

  }
  /**
   * @description 添加子节点元素，参数顺序为节点图层排列顺序
   * @override
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
  /**
   * @description 是否自动响应修改底图尺寸变化带来的坐标系变化
   * @param param 
   * @returns 
   */
  awaitMap(param?:boolean){
    if (!arguments.length) { return this.attrs.awaitMap }
    this.attrs.awaitMap = param
  }
}