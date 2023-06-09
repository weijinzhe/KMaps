/*
 * @Author: wjz
 * @Date: 2021-10-21 15:30:30
 * @LastEditors: wjz
 * @LastEditTime: 2022-04-18 16:21:28
 * @FilePath: /kmaps/src/index.ts
 */
import Konva from './js/konva.min.js'

window["_KMap"] = {};
window["_KMap"]["_BaseMap_unpdata"] = [] //地图图片更新


// import Hammer from "./js/hammer-konva";

import {wheelEvent,colorHextoRGBA ,adsorb} from "./_util"

import Stage from './Stage'
import Layer from './Layer'
import Group from './Group'
import BaseMap  from './BaseMap'
import Grid from './Grid'
import Location from './Location'
import Track from './Track'

import Path from './Path'
import AnchorLine from './AnchorLine'

import Line from "./Line"
// import Polygon from "./Polygon";
import Circle from './Circle';

import Text from './Text';

import Magnifying from "./Magnifying";
export default {
    Konva,
    // Hammer,
    Util:{
        wheelEvent,
        colorHextoRGBA,
        adsorb
    },
    Stage, //舞台
    Layer, //底层 图层
    Group,
    BaseMap,
    Grid,
    Location,
    Track,
    Path,
    AnchorLine,
    Line,
    // Polygon,
    Circle,
    Text,
    Magnifying,
    versions:"1.4.0"
}