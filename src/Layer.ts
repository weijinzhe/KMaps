/*
 * @Author: wjz
 * @Date: 2021-11-12 10:46:30
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-16 11:04:11
 * @FilePath: /kmaps/src/Layer.ts
 */
import Konva from "./js/konva.min.js"

/**
 * Layer
 * @description 重写add方法 在原功能基础上增加调用子节点绘制方法
 * @example
 * let node = new Layer()
 */
export default class Layer extends Konva.Layer {
  constructor(attrs) {
    super(attrs)
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