/*
 * @Author: wjz
 * @Date: 2021-11-12 11:02:13
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-12 11:22:05
 * @FilePath: /KMap-ts/src/Group.ts
 */
import Konva from "./js/konva.min.js"


/**
 * @description 重写的add方法 在原功能基础上增加调用子节点绘制方法
 */

export default class Group extends Konva.Group {
  constructor(attrs) {
    super(attrs)
  }
  add() {
    for(let item of arguments){
      super.add(item)
      if(item._draw){
        item._draw()
      }
    }
  }
}