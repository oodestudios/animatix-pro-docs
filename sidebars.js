/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: '❤️ Welcome',
      items: [
        'welcome/index',
        'welcome/what-is-animatix-pro',
        'welcome/key-features',
        'welcome/games-showcase',
        'welcome/quick-start',
        'welcome/interface-overview',
      ],
    },
    {
      type: 'category',
      label: '🔷 Core Concepts',
      items: [
        'core-concepts/graphflow-system',
        'core-concepts/graph-structure',
        'core-concepts/graph-categories',
        'core-concepts/connection-system',
        'core-concepts/parallel-sequential',
      ],
    },
    {
      type: 'category',
      label: '🎨 Node Types',
      items: [
        'node-types/trigger-nodes',
        'node-types/animation-nodes',
        'node-types/action-nodes',
        'node-types/event-nodes',
        'node-types/condition-nodes',
        'node-types/delay-nodes',
      ],
    },
    {
      type: 'category',
      label: '✨ Animations',
      items: [
        'animations/ui-animations',
        'animations/text-animations',
        'animations/3d-animations',
        'animations/camera-animations',
        'animations/audio-animations',
        'animations/material-animations',
        'animations/particle-systems',
        'animations/easing-curves',
      ],
    },
    {
      type: 'category',
      label: '🚀 Advanced',
      items: [
        'advanced/complex-graphs',
        'advanced/parallel-execution',
        'advanced/event-architecture',
        'advanced/looping',
        'advanced/graph-composition',
        'advanced/state-management',
      ],
    },
    {
      type: 'category',
      label: '🔧 Components',
      items: [
        'components/graph-executor',
        'components/event-handler',
        'components/event-manager',
        'components/animator-manager',
        'components/ui-event-system',
      ],
    },
    {
      type: 'category',
      label: '💻 API',
      items: [
        'api/runtime-api',
        'api/component-api',
        'api/event-system',
        'api/graph-manipulation',
        'api/custom-nodes',
        'api/integration-examples',
      ],
    },
    {
      type: 'category',
      label: '📚 Best Practices',
      items: [
        'best-practices/organization',
        'best-practices/performance',
        'best-practices/timing',
        'best-practices/mobile-webgl',
        'best-practices/collaboration',
        'best-practices/version-control',
      ],
    },
    {
      type: 'category',
      label: '❓ Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/graph-not-playing',
        'troubleshooting/node-errors',
        'troubleshooting/debug-logging',
        'troubleshooting/platform-issues',
        'troubleshooting/getting-help',
      ],
    },
  ],
};

