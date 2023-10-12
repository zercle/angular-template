import {Menu} from "../../shared/models/menu.model";

export const MINI_SIDENAV_MENU: Menu[] = [
  {
    name: 'POS',
    path: '/pos',
    icon: {
      name: 'point_of_sale'
    }
  }, {
    name: 'Reports',
    path: '/reports',
    icon: {
      name: 'monitoring'
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
        name: 'Transactions',
        icon: {name: 'receipt_long'},
        path: '/system/transactions'
      },
    ]
  }, {
    name: '',
    path: '/system',
    children: [
      {
        name: 'Projects',
        icon: {name: 'widgets'},
        path: '/system/projects'
      }, {
        name: 'Connections',
        icon: {name: 'dataset_linked'},
        path: '/system/connections'
      }, {
        name: 'Banks',
        icon: {name: 'account_balance'},
        path: '/system/banks'
      }, {
        name: 'Divisions',
        icon: {name: 'domain'},
        path: '/system/divisions'
      },
    ]
  }, {
    name: '',
    path: '/system',
    children: [
      {
        name: 'Users & Permissions',
        icon: {name: 'group'},
        path: '/system/uap'
      }, {
        name: 'Logs',
        icon: {name: 'history'},
        path: '/system/logs'
      }
    ]
  }, {
    name: '',
    path: '/system',
    children: [
      {
        name: 'APIs',
        icon: {name: 'code'},
        path: '/system/apis'
      }, {
        name: 'Documentation',
        icon: {name: 'chrome_reader_mode'},
        path: '/docs'
      }
    ]
  }
];
