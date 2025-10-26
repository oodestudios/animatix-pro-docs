/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/graphflow-system',
      ],
    },
    {
      type: 'category',
      label: 'Animation Modules',
      items: [
        'animation-modules/overview',
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
      label: 'Events & Actions',
      items: [
        'events-actions/overview',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/overview',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        'best-practices/organization',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
      ],
    },
    {
      type: 'category',
      label: 'Quick Reference',
      items: [
        'quick-reference/overview',
      ],
    },
  ],
};

module.exports = sidebars;