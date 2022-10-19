const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/app/dashboard/default',
          icon: 'feather icon-home',
        }
      ]
    },
    {
      id: 'ui-element',
      title: 'UI ELEMENT',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'basic',
          title: 'Component',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            
            {
              id: 'button',
              title: 'Button',
              type: 'item',
              url: '/basic/button'
            },
            {
              id: 'badges',
              title: 'Badges',
              type: 'item',
              url: '/basic/badges'
            },
            {
              id: 'breadcrumb',
              title: 'Breadcrumb',
              type: 'item',
              url: '/basic/breadcrumb'
            },
            {
              id: 'pagination',
              title: 'Pagination',
              type: 'item',
              url: '/basic/pagination'
          },
            {
              id: 'collapse',
              title: 'Collapse',
              type: 'item',
              url: '/basic/collapse'
            },
            {
              id: 'tabs-pills',
              title: 'Tabs & Pills',
              type: 'item',
              url: '/basic/tabs-pills'
            },
            {
              id: 'typography',
              title: 'Typography',
              type: 'item',
              url: '/basic/typography'
            }
          ]
        }
      ]
    },
    {
      id: 'forms-tables',
      title: 'Forms & Tables',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'forms',
          title: 'Form Elements',
          type: 'item',
          url: '/forms/form-basic',
          icon: 'feather icon-file-text',
        },
        {
          id: 'tables',
          title: 'Table',
          type: 'item',
          url: '/tables/bootstrap',
          icon: 'feather icon-server',
        }
      ]
    },
    {
      id: 'chart-maps',
      title: 'Chart & Maps',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'charts',
          title: 'Charts',
          type: 'item',
          url: '/charts/nvd3',
          icon: 'feather icon-pie-chart'
        },
        {
          id: 'maps',
          title: 'Map',
          type: 'item',
          url: '/maps/google-map',
          icon: 'feather icon-map'
        }
      ]
    },
   
  ]
};

export default menuItems;
