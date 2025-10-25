/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Core Concepts',
      items: [
        'core-concepts/graphflow-system',
        'core-concepts/node-types',
        'core-concepts/graph-executor',
      ],
    },
    {
      type: 'category',
      label: '🎬 Animation Modules',
      items: [
        'animation-modules/ui-animations',
        'animation-modules/text-animations',
        'animation-modules/3d-animations',
        'animation-modules/camera-animations',
        'animation-modules/audio-animations',
        'animation-modules/material-animations',
        'animation-modules/particle-systems',
      ],
    },
    {
      type: 'category',
      label: '🔗 Events & Actions',
      items: [
        'events-actions/triggers',
        'events-actions/actions',
        'events-actions/events',
        'events-actions/conditions',
      ],
    },
    {
      type: 'category',
      label: '📚 API Reference',
      items: [
        'api-reference/overview',
        'api-reference/examples',
      ],
    },
    {
      type: 'category',
      label: '⭐ Best Practices',
      items: [
        'best-practices/organization',
        'best-practices/performance',
        'best-practices/mobile-considerations',
      ],
    },
    {
      type: 'category',
      label: '🔧 Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/debug-mode',
      ],
    },
    {
      type: 'category',
      label: '📋 Quick Reference',
      items: [
        'quick-reference/animation-types',
        'quick-reference/easing-curves',
        'quick-reference/keyboard-shortcuts',
      ],
    },
  ],
};

module.exports = sidebars;