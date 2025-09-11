import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/animatix-pro-docs/',
    component: ComponentCreator('/animatix-pro-docs/', '0c9'),
    exact: true
  },
  {
    path: '/animatix-pro-docs/',
    component: ComponentCreator('/animatix-pro-docs/', 'beb'),
    routes: [
      {
        path: '/animatix-pro-docs/',
        component: ComponentCreator('/animatix-pro-docs/', 'bd4'),
        routes: [
          {
            path: '/animatix-pro-docs/',
            component: ComponentCreator('/animatix-pro-docs/', '90b'),
            routes: [
              {
                path: '/animatix-pro-docs/api/graph-executor-util',
                component: ComponentCreator('/animatix-pro-docs/api/graph-executor-util', 'b1c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/animatix-pro-docs/examples',
                component: ComponentCreator('/animatix-pro-docs/examples', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/examples/ui-ux-animations',
                component: ComponentCreator('/animatix-pro-docs/examples/ui-ux-animations', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/getting-started/installation',
                component: ComponentCreator('/animatix-pro-docs/getting-started/installation', '363'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/getting-started/overview',
                component: ComponentCreator('/animatix-pro-docs/getting-started/overview', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/getting-started/quick-start',
                component: ComponentCreator('/animatix-pro-docs/getting-started/quick-start', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/intro',
                component: ComponentCreator('/animatix-pro-docs/intro', '2b5'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/visual-editor/graphflow-overview',
                component: ComponentCreator('/animatix-pro-docs/visual-editor/graphflow-overview', 'ca5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
