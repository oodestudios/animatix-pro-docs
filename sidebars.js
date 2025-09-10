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
        'getting-started/quick-start',
        'getting-started/project-setup',
        'getting-started/basic-concepts',
        'getting-started/troubleshooting'
      ]
    },
    
    // Visual Editor
    {
      type: 'category',
      label: '🎨 Visual Editor',
      items: [
        'visual-editor/graphflow-overview',
        'visual-editor/node-types',
        'visual-editor/creating-graphs',
        'visual-editor/node-properties',
        'visual-editor/connections',
        'visual-editor/timeline-view',
        'visual-editor/preview-system'
      ]
    },
    
    // Animation Types
    {
      type: 'category',
      label: '🎬 Animation Types',
      items: [
        'animation-types/ui-animations',
        'animation-types/camera-animations',
        'animation-types/object-animations',
        'animation-types/particle-effects',
        'animation-types/audio-integration',
        'animation-types/custom-animations'
      ]
    },
    
    // Advanced Features
    {
      type: 'category',
      label: '⚙️ Advanced Features',
      items: [
        'advanced-features/conditional-logic',
        'advanced-features/loops-iterations',
        'advanced-features/variables',
        'advanced-features/events-triggers',
        'advanced-features/state-management',
        'advanced-features/performance-optimization'
      ]
    },
    
    // API Reference
    {
      type: 'category',
      label: '🔧 API Reference',
      items: [
        'api/graph-executor-util',
        'api/animatix-pro-controller',
        'api/graph-flow-asset',
        'api/node-interfaces',
        'api/event-system',
        'api/utility-classes'
      ]
    },
    
    // Programming Guide
    {
      type: 'category',
      label: '💻 Programming Guide',
      items: [
        'programming/script-integration',
        'programming/custom-actions',
        'programming/custom-conditions',
        'programming/custom-triggers',
        'programming/runtime-control',
        'programming/debugging'
      ]
    },
    
    // Examples & Tutorials
    {
      type: 'category',
      label: '🎯 Examples & Tutorials',
      items: [
        'examples/ui-ux-animations',
        'examples/gameplay-sequences',
        'examples/mobile-optimizations',
        'examples/vr-ar-integration',
        'examples/multiplayer-sync',
        'examples/real-world-projects'
      ]
    },
    
    // Tools & Utilities
    {
      type: 'category',
      label: '🛠️ Tools & Utilities',
      items: [
        'tools/animation-converter',
        'tools/batch-processing',
        'tools/export-options',
        'tools/performance-profiler',
        'tools/debug-console',
        'tools/asset-management'
      ]
    },
    
    // Reference
    {
      type: 'category',
      label: '🔍 Reference',
      items: [
        'reference/node-reference',
        'reference/property-reference',
        'reference/event-reference',
        'reference/error-codes',
        'reference/changelog',
        'reference/migration-guide'
      ]
    },
    
    // Community & Support
    {
      type: 'category',
      label: '🤝 Community & Support',
      items: [
        'community/forum',
        'community/discord',
        'community/github-issues',
        'community/contact-support',
        'community/feature-requests',
        'community/contributing'
      ]
    }
  ]
};

export default sidebars;
