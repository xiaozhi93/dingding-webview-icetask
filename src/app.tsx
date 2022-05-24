/* eslint-disable @iceworks/best-practices/no-http-url */
import { runApp, IAppConfig } from 'ice';
import { ConfigProvider } from '@alifd/next';
// import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';
// import UserLayout from '@/layouts/UserLayout';

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
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [{
        path: '/ice',
        title: '商家平台',
        loadScriptMode: 'fetch',
        sandbox: true,
        entry: 'https://icetask-child.vercel.app',
        // entry: 'http://localhost:3333/',
      },
      ];
      return apps;
    },
    // appRouter: {
    //   LoadingComponent: PageLoading,
    // },
  },
};

runApp(appConfig);
