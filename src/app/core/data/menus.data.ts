import {Menu} from "../../shared/models/menu.model";

export const MAIN_NAVIGATION_MENU: Menu[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    icon: {
      name: 'home'
    }
  }, {
    name: 'Link1',
    path: '/link',
    icon: {
      name: 'info'
    }
  }, {
    name: 'Link2',
    path: '/link',
    icon: {
      name: 'info'
    }
  }, {
    name: 'System',
    path: '/system',
    icon: {
      name: 'settings_suggest'
    },
  }
]

export const SIDEBAR_SYSTEM_MENU: Menu[] = [
  {
    name: 'navigation',
    path: '/system',
    children: [
      {
        name: 'Dashboard',
        icon: {name: 'dashboard'},
        path: '/system/dashboard'
      }, {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      },
    ]
  }, {
    name: '',
    path: '/system',
    children: [
      {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      }, {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      }, {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      }, {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      },
    ]
  }, {
    name: '',
    path: '/system',
    children: [
      {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      }, {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      }, {
        name: 'Link',
        icon: {name: 'info'},
        path: '/system/link'
      },
    ]
  }
];
