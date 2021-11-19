/*
 * @Author: wjz
 * @Date: 2021-10-21 15:30:30
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-20 02:20:28
 * @FilePath: /kmaps/src/index.ts
 */
// import konva from './js/konva.min.js'

window["_KMap"] = {};
window["_KMap"]["_BaseMap_unpdata"] = [] //地图图片更新


import Hammer from "./js/hammer-konva";

import*as Util from "./_util"

import Stage from './Stage'
import Layer from './Layer'
import Group from './Group'
import BaseMap  from './BaseMap'
import Grid from './Grid'
import Location from './Location'
import Track from './Track'

import Path from './Path'
import Line from "./Line"
import Polygon from "./Polygon";

export default {
    Hammer,
    Util,
    Stage, //舞台
    Layer, //底层库 图层
    Group,
    BaseMap,
    Grid,
    Location,
    Track,
    Path,
    Line,
    Polygon,
    versions:"1.0.0"
}