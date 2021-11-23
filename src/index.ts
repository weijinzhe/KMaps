/*
 * @Author: wjz
 * @Date: 2021-10-21 15:30:30
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-23 10:24:50
 * @FilePath: /kmaps/src/index.ts
 */
import Konva from './js/konva.min.js'

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
import Circle from './Circle';

export default {
    Konva,
    Hammer,
    Util,
    Stage, //舞台
    Layer, //底层 图层
    Group,
    BaseMap,
    Grid,
    Location,
    Track,
    Path,
    Line,
    Polygon,
    Circle,
    versions:"1.0.0"
}