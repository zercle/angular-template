import {Menu} from "../../shared/models/menu.model";

export const MINI_SIDENAV_MENU: Menu[] = [
  {
    name: 'Link',
    path: '/link',
    icon: {
      name: 'info'
    }
  }, {
    name: 'Link',
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
