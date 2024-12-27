import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig(({ envMode = '' }) => {

  return {
    html: {
      template: './public/index.html',
      title: 'rsbuild',
      inject: 'body',
      scriptLoading: 'blocking',
    },
    plugins: [pluginReact()],
    server: {
      port: 3000,
      host: '0.0.0.0',
      proxy: {
        '/admin': {
          //target: 'http://192.168.32.211:8510',
          target: 'https://artvista-web-test.yutang.work'
        }
      }
    }
  }
})
