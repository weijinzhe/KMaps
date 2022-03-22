/*
 * @Author: wjz
 * @Date: 2021-10-22 16:20:15
 * @LastEditors: wjz
 * @LastEditTime: 2022-03-22 19:19:27
 * @FilePath: /kmaps/src/_util.ts
 */
import Hammers from './js/hammer-konva.js'

/*
 * 
 * @param pos 图层拖拽范围限制
 * @returns pos 拖拽后的坐标
 */
export function dragBoundFunc(pos: object) {
  let apos = this.absolutePosition() //获取舞台实际位置
  let {
    x,
    y
  }: any = pos //舞台移动位置
  let scope: any = {
    ...pos
  }
  let baseMap = this.findOne('#BaseMap') //获取图片对象
  if (!baseMap) { //舞台没有添加图层，没有可参照图形做范围限制，不可拖拽移动
    return { x: 0, y: 0 }
  }
  let imgPos = baseMap.position() //图片位置
  let img = baseMap.size() //图片尺寸
  let scale = this.scale() // 舞台缩放
  let size = this.size() // 舞台尺寸

  //单独x轴拖拽限制
  if (img.width * scale.x > size.width) { //放大超出屏幕 
    if (apos.x > x) { //左滑
      if (x + (imgPos.x + img.width) * scale.x <= size.width - 200) scope.x = apos.x
    }
    if (apos.x < x) { //右滑 
      if (x >= imgPos.x * -1 * scale.x + 200) scope.x = apos.x
    }
  } else { //未超出屏幕显示范围
    if (apos.x > x) { //左滑
      if (imgPos.x * -1 > x / scale.x + 200) scope.x = apos.x
    }
    if (apos.x < x) { //右滑 
      if (x + (imgPos.x + img.width) * scale.x > size.width + 200) scope.x = apos.x
    }
  }
  //单独y轴拖拽限制
  if (img.height * scale.x > size.height) {
    if (apos.y > y) { //上滑
      if (y + (imgPos.y + img.height) * scale.y < size.height - 200) scope.y = apos.y
    }
    if (apos.y < y) { //下滑 
      if (y >= imgPos.y * -1 * scale.y + 200) scope.y = apos.y
    }
  } else {
    if (apos.y > y) { //上滑
      if (imgPos.y * -1 > y / scale.y + 200) scope.y = apos.y
    }
    if (apos.y < y) { //下滑 
      if (y + (imgPos.y + img.height) * scale.y > size.height + 200) scope.y = apos.y
    }
  }
  return scope
}

/*
 * @description 手势以及鼠标缩放控制
 */
export function Hammer() {


  let scaleRange = {
    max: this.attrs.scaleMax,
    min: this.attrs.scaleMin
  }

  let hammer: any = new Hammers(this, { //绑定事件
    domEvents: true
  });
  hammer.get('tap').set({
    enable: false
  });
  hammer.get('pinch').set({
    enable: true
  })

  var scaleStart = new CustomEvent('scalestart', {
    detail: {
      scale: 1,
      pointer: [0, 0]
    }
  });
  var scaleMove = new CustomEvent('scalemove', {
    detail: {
      scale: 1,
      pointer: [0, 0]
    }
  });
  var scaleend = new CustomEvent('scaleend', {
    detail: {
      scale: 1,
      pointer: [0, 0]
    }
  });



  var scaleBy = 1.05;
  var pointer: any = { x: 0, y: 0 }
  let st = null; //鼠标滚轮反馈
  let wheelState = true
  this.on(' pinchstart pinchmove pinchend wheel', (e) => { //鼠标缩放
    e.cancelBubble = true;
    //全局缩放事件
    var oldScale = this.scaleX();
    let mousePointTo: any = {},
      newScale = 1,
      newPos = {};
    switch (e.type) {
      case 'wheel': //鼠标滚轮 
        pointer = this.getPointerPosition();
        mousePointTo = {
          x: (pointer.x - this.x()) / oldScale,
          y: (pointer.y - this.y()) / oldScale,
        };
        newScale =
          e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        if (newScale >= scaleRange.max || newScale <= scaleRange.min) {
          return
        }
        newPos = {
          x: pointer.x - mousePointTo.x * newScale,
          y: pointer.y - mousePointTo.y * newScale,
        };
        this.scale({
          x: newScale,
          y: newScale
        });
        this.position(newPos);
        if (wheelState) {
          scaleStart.detail.scale = newScale
          scaleStart.detail.pointer == [pointer.x, pointer.y]
          this.dispatchEvent(scaleStart);
          wheelState = false
        } else {
          scaleMove.detail.scale = newScale
          scaleMove.detail.pointer == [pointer.x, pointer.y]
          this.dispatchEvent(scaleMove);
          wheelState = false
        }
        clearTimeout(st)
        st = setTimeout(() => { //滚动触发间隔50ms为滚动结束
          scaleend.detail.scale = newScale
          scaleend.detail.pointer == [pointer.x, pointer.y]
          this.dispatchEvent(scaleend);
          wheelState = true
        }, 100)
        break;
      case 'pinchstart': //捏放开始
        this.draggable(false)
        pointer = this.getPointerPosition(); //e.evt.gesture.center; //缩放基准点
        scaleStart.detail.scale = this.scaleX()
        scaleStart.detail.pointer == [pointer.x, pointer.y]
        this.dispatchEvent(scaleStart);
        break;
      case 'pinchmove': //捏放中
        mousePointTo = {
          x: (pointer.x - this.x()) / oldScale,
          y: (pointer.y - this.y()) / oldScale,
        };
        newScale = e.evt.gesture.scale > 1 ? oldScale * (scaleBy + 0.04) : oldScale / (scaleBy + 0.04);
        if (newScale >= scaleRange.max || newScale <= scaleRange.min) {
          return
        }
        newPos = {
          x: pointer.x - mousePointTo.x * newScale,
          y: pointer.y - mousePointTo.y * newScale,
        };
        this.scale({
          x: newScale,
          y: newScale
        });
        this.position(newPos);

        scaleMove.detail.scale = newScale
        scaleMove.detail.pointer == [pointer.x, pointer.y]
        this.dispatchEvent(scaleMove);
        break;
      case 'pinchend': //捏放结束
        this.draggable(true)
        this.dispatchEvent(scaleend);

        scaleend.detail.scale = this.scaleX()
        scaleend.detail.pointer == [pointer.x, pointer.y]
        this.dispatchEvent(scaleend);
        break;
    }
  });
}


/*
 * @description 鼠标滚轮结束事件
 * @param {Object} target 响应目标
 * @param {Object} callBack 事件结束回调
 */
export function wheelEvent(target: Node, callBack: Function) {
  let st = null;
  target.addEventListener('wheel', function (e) {

    let a = Reflect.defineProperty(e, "type", {
      value: "wheelmove",
      enumerable: false,
      configurable: false,
      writable: true,
    })
    callBack(e)
    clearTimeout(st)
    st = null
    st = setTimeout(() => {
      Reflect.defineProperty(e, "type", {
        value: "wheelend",
        enumerable: false,
        configurable: false,
        writable: true,
      })
      callBack(e)
    }, 50)
  })
}

//  hex 转rgb
export function colorHextoRGBA(sHex: any, alpha: number = 1) {
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  /* 16进制颜色转为RGB格式 */
  let sColor = sHex.toLowerCase()
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    //  处理六位的颜色值
    var sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    // return sColorChange.join(',')
    // 或
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
  } else {
    return sColor
  }
}

//rgb 转数组
export function rgbaToArray(color: string) {
  let ret = [];
  let colorStr = new RegExp(/(?<=\()\S+(?=\))/).exec(color); //校验是否为颜色值
  if (colorStr) {
    ret = colorStr[0].split(",");
    ret.map(item => {
      return Number.parseFloat(item);
    });
  }

  // if (normalized) {
  // 	ret = ret.map(item => {
  // 		return (item = +item / 255);
  // 	});
  // }
  return ret;
}


//rgb 转 hex
export function colorRGBtoHex(color: any) {
  if (color.charAt(0) == '#') {
    return color
  }
  var rgb = color.split(',');
  var r = parseInt(rgb[0].split('(')[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(')')[0]);
  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

//二维数组转一维
export function arrayConvert(arr: [number]) {
  let points = []
  for (let item of arr) {
    points.push(item[0], item[1])
  }
  return points
}


let _stage = window["_KMap"]["_Stage"]  //(window as any)._KMap_Stage
/**
 * @description 拖拽点吸附
 * @param target 检测目标(当前识别的目标)
 * @param layer 可选参数 碰撞检测图层，默认为Stage(搜索全局可拖拽锚点) 
 */
export function adsorb (target:any, layer:any = _stage) {
  let targetAnchor = target.find("._drag_anchor") //当前正在编辑的图形节点内的拖拽锚点
  
  for (let item of targetAnchor) {
    
    item.on('dragend', function (e) { //拖拽锚点触发
       e.cancelBubble = true;
       
      let layerAnchor = layer.find("._drag_anchor")
      
      for (let t of targetAnchor) {
        layerAnchor.splice(layerAnchor.indexOf(t),1)
      }
      let tarRect = this.getClientRect();
      for (let ar of layerAnchor) {
        
        if (haveIntersection(ar.getClientRect(), tarRect)) { //进入目标碰撞监测范围
          let arPos = ar.getAbsolutePosition(ar.getParent().getParent())
          let node = this.getParent() //获取父级图组  富信息图形节点
          let line = node.findOne('._line') //线图形、主图
          let anchor = node.find('._drag_anchor')

          let pts = []
          anchor.forEach((item, index, arr) => { //遍历当前图组中的锚点
            if (item == this) {
              //当前锚点与目标锚点一致时
              var { x, y } = arPos
            } else {
              //当前锚点与目标锚点不一致时获取相对地图的绝对坐标位置
              var { x, y } = item.getAbsolutePosition(node.getParent()) //获取图形节点相对于父级图组（图片的绝对位置）
              pts.push(x, y)
            }
            pts.push(x, y)
            item.position({ x, y }) //重置两个锚点为绝对位置
          })
          line.points(pts) //绘制图形
          node.position({ x: 0, y: 0 }) //重置图组节点坐标为初始状态
        }
      }
      // this.off('dragend')
    })
  }
  //包围盒碰撞判定 缩小包围盒碰撞范围 / 4 缩小4倍
  function haveIntersection(r1:any, r2:any,scope:number = 3) {
    return !(
      r2.x > r1.x + (r1.width / scope) ||
      r2.x + (r2.width / scope) < r1.x ||
      r2.y > r1.y + (r1.height / scope) ||
      r2.y + (r2.height / scope) < r1.y
    );
  }
}




