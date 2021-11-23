/*
 * @Author: wjz
 * @Date: 2021-11-17 15:18:38
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-22 19:12:58
 * @FilePath: /kmaps/test/util.js
 */
export function bezierData(data) {
 let pathArr = []
  data.forEach(items => {
    let arr = []
    items.edges.forEach((item, index, array) => {
      //贝塞尔曲线升阶
      let cor = []
      if (index == 0) {
        cor = [item.point[2], item.point[0], item.point[1], item.point[3]]
      } else if (index > 0 && index < array.length) {
        cor = [item.point[0], item.point[1], item.point[3]]
      }
      cor.forEach((item2, index2, array2) => {
        //console.log(item2);
        let [x, y] = item2
        arr.push(x,y)
        // arr.push(Math.round(x), Math.round(y))
      })
    })
    pathArr.push({
      id: items.id,
      edges: arr
    })
  })
  return pathArr
}
