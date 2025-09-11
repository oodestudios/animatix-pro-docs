import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Animatix Pro',
  tagline: 'Professional Animation System for Unity',
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
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/oodestudios/animatix-pro-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
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
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API Reference',
          },
          {
            to: '/examples',
            label: 'Examples',
            position: 'left',
          },
          {
            href: 'https://github.com/oodestudios/animatix-pro',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'API Reference',
                to: '/docs/api/graph-executor-util',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/animatix-pro',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/animatixpro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/oodestudios/animatix-pro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OODE Studios. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'json', 'bash'],
      },
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'animatix-pro',
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
    }),
};

export default config;
