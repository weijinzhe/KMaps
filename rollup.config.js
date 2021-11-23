/*
 * @Author: wjz
 * @Date: 2021-10-19 10:12:19
 * @LastEditors: wjz
 * @LastEditTime: 2021-11-22 09:42:41
 * @FilePath: /kmaps/rollup.config.js
 */
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: `src/index.ts`, //入口文件
  output: [
    {
      file: 'lib/KMaps.js', //出口文件
      name: 'KMaps', //名字
      format: 'umd',
      sourcemap: false,
      freeze: false,
    },
  ],
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    commonjs(), //将引入的js模块一起打包
    typescript({
      useTsconfigDeclarationDir: true,
      abortOnError: false,
      removeComments: false,
    })
  ],
};
