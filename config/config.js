import { defineConfig } from 'umi';
import subRoutes from './subRoute';
export default defineConfig({
  mountElementId: 'root',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: subRoutes,
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'chartsApp', // 唯一 id
          // entry: '//localhost:8080/react/', // 打包后配置
          entry: '//localhost:7001/', // html entry
          props: {
            onClick: (event) => console.log('threeJsApp', event),
            browser: 'qiankun',
          },
        },
        {
          name: 'threeJsApp', // 唯一 id
          // entry: '//localhost:8080/vue/', // 打包后配置
          entry: '//localhost:7002/', // html entry
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
});
