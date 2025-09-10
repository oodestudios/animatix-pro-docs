import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/animatix-pro-docs/docs',
    component: ComponentCreator('/animatix-pro-docs/docs', '604'),
    routes: [
      {
        path: '/animatix-pro-docs/docs',
        component: ComponentCreator('/animatix-pro-docs/docs', '377'),
        routes: [
          {
            path: '/animatix-pro-docs/docs',
            component: ComponentCreator('/animatix-pro-docs/docs', '824'),
            routes: [
              {
                path: '/animatix-pro-docs/docs/api/graph-executor-util',
                component: ComponentCreator('/animatix-pro-docs/docs/api/graph-executor-util', 'e07'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/examples',
                component: ComponentCreator('/animatix-pro-docs/docs/examples', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/installation',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/installation', '3f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/quick-start',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/quick-start', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/intro',
                component: ComponentCreator('/animatix-pro-docs/docs/intro', 'd17'),
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
