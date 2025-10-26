import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/animatix-pro-docs/docs',
    component: ComponentCreator('/animatix-pro-docs/docs', '6ea'),
    routes: [
      {
        path: '/animatix-pro-docs/docs',
        component: ComponentCreator('/animatix-pro-docs/docs', 'be2'),
        routes: [
          {
            path: '/animatix-pro-docs/docs',
            component: ComponentCreator('/animatix-pro-docs/docs', 'fa8'),
            routes: [
              {
                path: '/animatix-pro-docs/docs/',
                component: ComponentCreator('/animatix-pro-docs/docs/', '63a'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/advanced-features/events-actions',
                component: ComponentCreator('/animatix-pro-docs/docs/advanced-features/events-actions', 'c0b'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/advanced-features/loops-variables',
                component: ComponentCreator('/animatix-pro-docs/docs/advanced-features/loops-variables', '5b6'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/advanced-features/state-management',
                component: ComponentCreator('/animatix-pro-docs/docs/advanced-features/state-management', '535'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/advanced-features/triggers-conditions',
                component: ComponentCreator('/animatix-pro-docs/docs/advanced-features/triggers-conditions', 'd47'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/3d-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/3d-animations', '1cc'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/audio-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/audio-animations', '079'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/camera-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/camera-animations', '42a'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/material-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/material-animations', 'ca1'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/overview',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/overview', '6d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/particle-systems',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/particle-systems', 'e57'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/text-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/text-animations', 'c01'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-modules/ui-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-modules/ui-animations', 'd81'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-types/3d-object-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-types/3d-object-animations', '6f0'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-types/audio-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-types/audio-animations', 'dec'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-types/camera-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-types/camera-animations', '2e9'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-types/particle-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-types/particle-animations', '1f8'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-types/text-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-types/text-animations', 'd5e'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/animation-types/ui-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/animation-types/ui-animations', '14d'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/api-reference/examples',
                component: ComponentCreator('/animatix-pro-docs/docs/api-reference/examples', '4f2'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/api-reference/overview',
                component: ComponentCreator('/animatix-pro-docs/docs/api-reference/overview', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/api/graph-executor-util',
                component: ComponentCreator('/animatix-pro-docs/docs/api/graph-executor-util', 'deb'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/best-practices/mobile-considerations',
                component: ComponentCreator('/animatix-pro-docs/docs/best-practices/mobile-considerations', '9fd'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/best-practices/organization',
                component: ComponentCreator('/animatix-pro-docs/docs/best-practices/organization', '62d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/best-practices/performance',
                component: ComponentCreator('/animatix-pro-docs/docs/best-practices/performance', '721'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/community/contact-support',
                component: ComponentCreator('/animatix-pro-docs/docs/community/contact-support', '390'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/community/contributing',
                component: ComponentCreator('/animatix-pro-docs/docs/community/contributing', '762'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/community/faq',
                component: ComponentCreator('/animatix-pro-docs/docs/community/faq', 'aaf'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/community/troubleshooting',
                component: ComponentCreator('/animatix-pro-docs/docs/community/troubleshooting', 'e9d'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/core-concepts/graph-executor',
                component: ComponentCreator('/animatix-pro-docs/docs/core-concepts/graph-executor', 'bcb'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/core-concepts/graphflow-system',
                component: ComponentCreator('/animatix-pro-docs/docs/core-concepts/graphflow-system', '9f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/core-concepts/node-types',
                component: ComponentCreator('/animatix-pro-docs/docs/core-concepts/node-types', '0ee'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/developer-guide/custom-actions',
                component: ComponentCreator('/animatix-pro-docs/docs/developer-guide/custom-actions', '858'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/developer-guide/custom-conditions',
                component: ComponentCreator('/animatix-pro-docs/docs/developer-guide/custom-conditions', '788'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/developer-guide/custom-triggers',
                component: ComponentCreator('/animatix-pro-docs/docs/developer-guide/custom-triggers', '9cf'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/developer-guide/runtime-control',
                component: ComponentCreator('/animatix-pro-docs/docs/developer-guide/runtime-control', 'b15'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/events-actions/actions',
                component: ComponentCreator('/animatix-pro-docs/docs/events-actions/actions', 'e6a'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/events-actions/conditions',
                component: ComponentCreator('/animatix-pro-docs/docs/events-actions/conditions', '798'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/events-actions/events',
                component: ComponentCreator('/animatix-pro-docs/docs/events-actions/events', '4cb'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/events-actions/overview',
                component: ComponentCreator('/animatix-pro-docs/docs/events-actions/overview', '2aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/events-actions/triggers',
                component: ComponentCreator('/animatix-pro-docs/docs/events-actions/triggers', 'be0'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/examples',
                component: ComponentCreator('/animatix-pro-docs/docs/examples', 'eb5'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/examples/cinematic-camera',
                component: ComponentCreator('/animatix-pro-docs/docs/examples/cinematic-camera', '091'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/examples/gameplay-sequences',
                component: ComponentCreator('/animatix-pro-docs/docs/examples/gameplay-sequences', '8dc'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/examples/ui-ux-animations',
                component: ComponentCreator('/animatix-pro-docs/docs/examples/ui-ux-animations', '05e'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/examples/vr-ar-mobile',
                component: ComponentCreator('/animatix-pro-docs/docs/examples/vr-ar-mobile', 'a6f'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/first-animation',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/first-animation', '890'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/installation',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/installation', '975'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/introduction',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/introduction', 'c7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/overview',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/overview', 'eaf'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/project-setup',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/project-setup', '6cd'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/getting-started/quick-start',
                component: ComponentCreator('/animatix-pro-docs/docs/getting-started/quick-start', '0f4'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/intro',
                component: ComponentCreator('/animatix-pro-docs/docs/intro', '3dc'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/quick-reference/animation-types',
                component: ComponentCreator('/animatix-pro-docs/docs/quick-reference/animation-types', '0e8'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/quick-reference/easing-curves',
                component: ComponentCreator('/animatix-pro-docs/docs/quick-reference/easing-curves', '27a'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/quick-reference/keyboard-shortcuts',
                component: ComponentCreator('/animatix-pro-docs/docs/quick-reference/keyboard-shortcuts', 'c1c'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/quick-reference/overview',
                component: ComponentCreator('/animatix-pro-docs/docs/quick-reference/overview', '3ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/reference/changelog',
                component: ComponentCreator('/animatix-pro-docs/docs/reference/changelog', '5cc'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/reference/error-codes',
                component: ComponentCreator('/animatix-pro-docs/docs/reference/error-codes', '02a'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/reference/node-reference',
                component: ComponentCreator('/animatix-pro-docs/docs/reference/node-reference', '98d'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/reference/properties-reference',
                component: ComponentCreator('/animatix-pro-docs/docs/reference/properties-reference', '783'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/troubleshooting/common-issues',
                component: ComponentCreator('/animatix-pro-docs/docs/troubleshooting/common-issues', 'b1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/animatix-pro-docs/docs/troubleshooting/debug-mode',
                component: ComponentCreator('/animatix-pro-docs/docs/troubleshooting/debug-mode', 'b85'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/visual-editor/connections-flow',
                component: ComponentCreator('/animatix-pro-docs/docs/visual-editor/connections-flow', 'f35'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/visual-editor/graphflow-overview',
                component: ComponentCreator('/animatix-pro-docs/docs/visual-editor/graphflow-overview', '828'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/visual-editor/interface-overview',
                component: ComponentCreator('/animatix-pro-docs/docs/visual-editor/interface-overview', '881'),
                exact: true
              },
              {
                path: '/animatix-pro-docs/docs/visual-editor/node-types',
                component: ComponentCreator('/animatix-pro-docs/docs/visual-editor/node-types', '999'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/animatix-pro-docs/',
    component: ComponentCreator('/animatix-pro-docs/', '341'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
