/*
 * @Author: wjz
 * @Date: 2021-10-22 14:14:27
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-20 02:15:42
 * @FilePath: /kmaps/src/Stage.ts
 */
import Konva from "./js/konva.min.js"

import { dragBoundFunc, Hammer } from './_util'


/**
 * @description 非地理坐标地图 创建舞台
 * @constructor
 * @extends Konva.Stage
 * @param {String} container 地图容器
 * @param {Number} width 地图宽度
 * @param {Number} height 地图高度
 * @param {Number} scaleMax 最大缩放倍数 默认10
 * @param {Number} scaleMin 最小缩放倍数 默认0.1
 * 
 * @example
 * var stage = new Stage(attrs)
 */
export default class Stage extends Konva.Stage {
    constructor(attrs) {
        attrs.id = 'stage'
        attrs.draggable = true //拖拽
        attrs.dragBoundFunc = dragBoundFunc
        !attrs.scaleMax ? attrs.scaleMax = 10 : null //最大缩放
        !attrs.scaleMin ? attrs.scaleMin = 0.1 : null //最小缩放
        super(attrs);
        // (window as any)._KMap_Stage = this; //将_KMap挂载到window对象上
        window["_KMap"]["_Stage"] = this; //将_KMap挂载到window对象上
        let hammer = Hammer.bind(this)
        hammer()
    }
    /**
     * @description 获取当前位置画布的中心坐标
     * @returns {x,y} 返回当前舞台中心对应在画布上的坐标位置（已转换缩放问题）
     */
    centre() {
      let {px,py} = this.position() //当前坐标
      let scale = this.scaleX() //x,y同时缩放的，获取其一即可
      let x = (this.attrs.width / 2 - px) / scale,
          y = (this.attrs.height / 2 - py) / scale;
      return{x,y}
    }
}



