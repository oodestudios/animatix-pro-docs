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
  // Animatix Pro Documentation Sidebar
  tutorialSidebar: [
    // Home & Getting Started
    {
      type: 'category',
      label: '🏠 Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/installation',
        'getting-started/quick-start'
      ]
    },
    
    // Visual Editor
    {
      type: 'category',
      label: '🎨 Visual Editor',
      items: [
        'visual-editor/graphflow-overview'
      ]
    },
    
    // API Reference
    {
      type: 'category',
      label: '🔧 API Reference',
      items: [
        'api/graph-executor-util'
      ]
    },
    
    // Examples & Tutorials
    {
      type: 'category',
      label: '🎯 Examples & Tutorials',
      items: [
        'examples',
        'examples/ui-ux-animations'
      ]
    }
  ],

  // API Sidebar for the API Reference page
  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/graph-executor-util'
      ]
    }
  ]
};

export default sidebars;
