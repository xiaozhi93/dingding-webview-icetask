import { IRouterConfig, lazy } from 'ice';
// import Home from '@/pages/Home';
// import About from '@/pages/About';
// import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';

const routes: IRouterConfig[] = [{
  path: '/about',
  component: lazy(() => import(/* webpackChunkName: 'wx-notice' */'@/pages/About')),
}, {
  path: '/login',
  component: lazy(() => import(/* webpackChunkName: 'wx-notice' */'@/pages/Login')),
}, {
  path: '/',
  exact: true,
  component: lazy(() => import(/* webpackChunkName: 'wx-notice' */'@/pages/Home')),
}, {
  component: NotFound,
}];

export default routes;
