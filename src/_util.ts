/*
 * @Author: wjz
 * @Date: 2021-10-22 16:20:15
 * @LastEditors: wjz
 * @LastEditTime: 2022-04-12 10:31:50
 * @FilePath: /kmaps/src/_util.ts
 */


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
  let rgb:string = colorHextoRGBA(color)
  let rgbArr = rgb.split(',').map((item)=>Number(item.replace(/[^0-9]+/g,'')))
  // console.log(rgbArr);
  
  // let colorStr = new RegExp(/(?<=\()\S+(?=\))/).exec(color); //校验是否为颜色值 此方式不兼容某些移动端
  // console.log(colorStr);
  
  // if (colorStr) {
  //   ret = colorStr[0].split(",");
  //   ret.map(item => {
  //     return Number.parseFloat(item);
  //   });
  // }

  // if (normalized) {
  // 	ret = ret.map(item => {
  // 		return (item = +item / 255);
  // 	});
  // }
  return rgbArr;
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

/**
 * @description 拖拽点吸附
 * @param target 检测目标(当前识别的目标)
 * @param layer 可选参数 碰撞检测图层，默认为Stage(搜索全局可拖拽锚点) 
 */
export function adsorb (target:any, layer:any) {
  let targetAnchor = target.find("._drag_anchor") //当前正在编辑的图形节点内的拖拽锚点
  for (let item of targetAnchor) {
    item.off('dragend') //先解除绑定事件防止重复绑定
    item.on('dragend', function (e) { //拖拽锚点触发
       e.cancelBubble = true;
      let ta = target.find("._drag_anchor") //当前正在编辑的图形节点内的拖拽锚点
      let layerAnchor = layer.find("._drag_anchor")
      // for (let t of targetAnchor) {
      //   let index = layerAnchor.indexOf(t)
      //   layerAnchor.splice(index,1)

      // }

      let tarRect = this.getClientRect();
      for (let ar of layerAnchor) {
        if(ar == this ) continue
        if (haveIntersection(ar.getClientRect(), tarRect)) { //进入目标碰撞监测范围
          if(this.getParent() == ar.getParent()){ //图形自身锚点
            
            if(ta.length <=2){return}
            // if(ta.indexOf(this) !== 0 && ta.indexOf(this) !== (ta.length-1)){
            if(ta.indexOf(this) >0 && ta.indexOf(this) < ta.length-1){ return }
            if(ta.indexOf(ar) !==0 && ta.indexOf(ar) !== ta.length-1){ return }
            if(this.getParent().attrs.closed){return}
          }

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
    })
  }
  //包围盒碰撞判定 缩小包围盒碰撞范围 / 4 缩小4倍
  function haveIntersection(r1:any, r2:any,scope:number = 2) {
    return !(
      r2.x > r1.x + (r1.width / scope) ||
      r2.x + (r2.width / scope) < r1.x ||
      r2.y > r1.y + (r1.height / scope) ||
      r2.y + (r2.height / scope) < r1.y
    );
  }
}




