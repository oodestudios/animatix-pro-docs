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
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/oodestudios/animatix-pro-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
            type: 'doc',
            docId: 'getting-started/introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/oodestudios/animatix-pro-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/introduction',
              },
              {
                label: 'API Reference',
                to: '/docs/api-reference/overview',
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
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Contact',
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
    }),
};

module.exports = config;