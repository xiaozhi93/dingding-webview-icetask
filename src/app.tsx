/* eslint-disable @iceworks/best-practices/no-http-url */
import { runApp, IAppConfig } from 'ice';
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
// import FrameworkLayout from '@/layouts/FrameworkLayout';
import UserLayout from '@/layouts/UserLayout';

const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
    onLaunch() {
      if (window.dd) {
        window.dd.enableUrlChangeDetect = true;
      }
    },
  },
  router: {
    type: 'browser',
  },
  icestark: {
    Layout: UserLayout,
    getApps: async () => {
      const apps = [{
        path: '/seller',
        title: '商家平台',
        loadScriptMode: 'import',
        sandbox: true,
        // React app demo: https://github.com/ice-lab/react-materials/tree/master/scaffolds/icestark-child
        entry: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-ice-vite/index.html',
      }, {
        path: '/waiter',
        title: '小二平台',
        loadScriptMode: 'import',
        sandbox: true,
        entry: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-vue3-vite/index.html',
      },

      ];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

runApp(appConfig);
