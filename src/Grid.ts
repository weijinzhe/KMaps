/*
 * @Author: wjz
 * @Date: 2021-10-29 09:54:14
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-13 23:41:27
 * @FilePath: /KMap-ts/src/Grid.ts
 */
import Konva from "./js/konva.min.js"

import {wheelEvent} from './_util'

/**
 * @description 网格图层，网格参照层
 * @constructor
 * @augments Konva.Group
 * @param {Node} attrs.stage 网格基准节点（以舞台为准）
 * @param {number} attrs.size 网格尺寸
 * @example
 * let grid = new KMap.Grid()
 * grid.drawGrid({
 *  size:50
 * })
 */
export default class Grid extends Konva.Group {
    constructor(attrs:object = {} ) {
      attrs['id'] = 'Grid'
      attrs['x'] = 0
      attrs['y'] = 0
      super(attrs)
    }
    /** 节点被添加到图层后自动绘制 */
    _draw(){
      this.drawGraph()
    }
    /**
     * @description 绘制网格图层
     * @param {number} param.size 网格单格大小默认50px
     */
    drawGraph(){
      let stageNode = super.getStage()
      //未获取到舞台节点，抛出异常
      if(stageNode == null){ console.error(new Error("The stage node was not obtained")); return}
      let sizeW = stageNode.width(),
        sizeH = stageNode.height();
      let self = this
      let size = this.attrs.grid || 50
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
        super.add(levelLine)
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
        super.add(verticalLine)
      }
      stageNode.addEventListener('dragmove', function(e) {
        self.absolutePosition({
          x: 0,
          y: 0
        }) //反向位移，将网格重置为初始位置
      })

      wheelEvent(stageNode , (e) => {
        if(e.type == "wheelend"){

          self.absolutePosition({
            x: 0,
            y: 0
          }) //将网格重置为0点
          self.scale({
            x: 1 / stageNode.scale().x,
            y: 1 / stageNode.scale().y
          })
        }
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
  