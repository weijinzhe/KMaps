/*
 * @Author: wjz
 * @Date: 2021-10-22 14:14:27
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-16 10:44:07
 * @FilePath: /kmaps/src/Stage.ts
 */
import Konva from "./js/konva.min.js"

import {dragBoundFunc,Hammer} from './_util'


/**
 * @description 非地理坐标地图 创建舞台
 * @constructor
 * @extends Konva.Stage
 * @example
 * var stage = new Stage(attrs)
 */
export default class Stage extends Konva.Stage{
    constructor(attrs){
        attrs.id = 'stage'
        attrs.draggable = true //拖拽
        attrs.dragBoundFunc = dragBoundFunc
        !attrs.scaleMax ? attrs.scaleMax = 10 : null //最大缩放
        !attrs.scaleMin ? attrs.scaleMin = 0.3 : null //最小缩放
        super(attrs);
        (window as any)._KMap_Stage = this; //将_KMap挂载到window对象上

        let hammer = Hammer.bind(this)
        hammer()



        // this.addEventListener()


    }
}



