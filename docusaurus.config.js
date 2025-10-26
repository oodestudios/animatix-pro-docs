// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Animatix Pro Documentation',
  tagline: 'Unity\'s most powerful visual animation system',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://oodestudios.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/animatix-pro-docs/',

  // GitHub pages deployment config.
  organizationName: 'oodestudios',
  projectName: 'animatix-pro-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/oodestudios/animatix-pro-docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/animatix-pro-social-card.jpg',
      navbar: {
        title: 'Animatix Pro',
        logo: {
          alt: 'Animatix Pro Logo',
          src: 'img/logo/animatix-pro-logo-small.svg',
          width: 40,
          height: 40,
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'getting-started/introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'dropdown',
            label: 'API Reference',
            position: 'left',
            items: [
              {
                label: 'Core Classes',
                to: '/docs/api-reference/overview',
              },
              {
                label: 'Examples',
                to: '/docs/api-reference/examples',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Community',
                to: '/docs/community/contact-support',
              },
              {
                label: 'FAQ',
                to: '/docs/community/faq',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting/common-issues',
              },
            ],
          },
          {
            href: 'https://github.com/oodestudios/animatix-pro-docs',
            label: 'GitHub',
            position: 'right',
            className: 'navbar__item--github',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Animatix Pro Logo',
          src: 'img/logo/animatix-pro-logo-small.svg',
          width: 32,
          height: 32,
        },
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/introduction',
              },
              {
                label: 'Core Concepts',
                to: '/docs/core-concepts/graphflow-system',
              },
              {
                label: 'API Reference',
                to: '/docs/api-reference/overview',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Examples',
                to: '/docs/examples/ui-ux-animations',
              },
              {
                label: 'Best Practices',
                to: '/docs/best-practices/organization',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting/common-issues',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/oodestudios/animatix-pro-docs',
              },
              {
                label: 'Unity Asset Store',
                href: 'https://assetstore.unity.com/packages/tools/animation/animatix-pro',
              },
              {
                label: 'Support',
                href: 'mailto:oode.contact@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OODE Studios. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'support_us',
        content: '🎉 Animatix Pro is now available on Unity Asset Store! <a target="_blank" rel="noopener noreferrer" href="https://assetstore.unity.com/packages/tools/animation/animatix-pro">Get it now</a>',
        backgroundColor: 'rgba(139, 58, 58, 0.9)',
        textColor: '#ffffff',
        isCloseable: true,
      },
    }),
};

module.exports = config;