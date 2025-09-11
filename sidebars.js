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
    // 1. Home
    {
      type: 'category',
      label: '🏠 Home',
      items: [
        'intro',
        'getting-started/quick-start'
      ]
    },
    
    // 2. Getting Started
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/first-animation',
        'getting-started/project-setup'
      ]
    },
    
    // 3. GraphFlow Editor
    {
      type: 'category',
      label: '🎨 GraphFlow Editor',
      items: [
        'visual-editor/interface-overview',
        'visual-editor/node-types',
        'visual-editor/connections-flow'
      ]
    },
    
    // 4. Animation Types
    {
      type: 'category',
      label: '✨ Animation Types',
      items: [
        'animation-types/ui-animations',
        'animation-types/text-animations',
        'animation-types/3d-object-animations',
        'animation-types/camera-animations',
        'animation-types/particle-animations',
        'animation-types/audio-animations'
      ]
    },
    
    // 5. API Reference
    {
      type: 'category',
      label: '🔧 API Reference',
      items: [
        'api/graph-executor-util'
      ]
    },
    
    // 6. Examples & Tutorials
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
