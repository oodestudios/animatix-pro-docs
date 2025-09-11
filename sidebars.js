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
    
    // 5. Advanced Features
    {
      type: 'category',
      label: '⚙️ Advanced Features',
      items: [
        'advanced-features/triggers-conditions',
        'advanced-features/events-actions',
        'advanced-features/loops-variables',
        'advanced-features/state-management'
      ]
    },
    
    // 6. Developer Guide
    {
      type: 'category',
      label: '💻 Developer Guide',
      items: [
        'developer-guide/custom-actions',
        'developer-guide/custom-triggers',
        'developer-guide/custom-conditions',
        'developer-guide/runtime-control'
      ]
    },
    
    // 7. API Reference
    {
      type: 'category',
      label: '🔧 API Reference',
      items: [
        'api/graph-executor-util'
      ]
    },
    
    // 8. Examples & Tutorials
    {
      type: 'category',
      label: '🎯 Examples & Tutorials',
      items: [
        'examples',
        'examples/ui-ux-animations',
        'examples/gameplay-sequences',
        'examples/cinematic-camera',
        'examples/vr-ar-mobile'
      ]
    },
    
    // 9. Reference
    {
      type: 'category',
      label: '📖 Reference',
      items: [
        'reference/node-reference',
        'reference/properties-reference',
        'reference/error-codes',
        'reference/changelog'
      ]
    },
    
    // 10. Community & Support
    {
      type: 'category',
      label: '🤝 Community & Support',
      items: [
        'community/faq',
        'community/troubleshooting',
        'community/contact-support',
        'community/contributing'
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
