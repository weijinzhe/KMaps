/*
 * @Author: wjz
 * @Date: 2021-10-21 15:30:30
 * @LastEditors: wjz
 * @LastEditTime: 2022-02-09 15:17:40
 * @FilePath: /kmaps/src/index.ts
 */
import Konva from './js/konva.min.js'

window["_KMap"] = {};
window["_KMap"]["_BaseMap_unpdata"] = [] //地图图片更新


import Hammer from "./js/hammer-konva";

import {wheelEvent,colorHextoRGBA} from "./_util"

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
import Polygon from "./Polygon";
import Circle from './Circle';

import Text from './Text';

export default {
    Konva,
    Hammer,
    Util:{
        wheelEvent,
        colorHextoRGBA,
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
    Polygon,
    Circle,
    Text,
    versions:"1.1.2"
}