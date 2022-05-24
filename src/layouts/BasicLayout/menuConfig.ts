const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie',
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie',
  },
  {
    name: 'Login',
    path: '/login',
    icon: 'account',
  },
  {
    name: '飞冰子应用',
    icon: 'account',
    children: [
      {
        path: '/ice',
        name: '首页',
      },
      {
        path: '/ice/#/list',
        name: '列表',
      },
      {
        path: '/ice/#/detail',
        name: '详情',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
