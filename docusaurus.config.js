// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Onmyoji Auto Script',
  tagline: '阴阳师小助手  一键托管',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/OnmyojiAutoScript-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'runhey', // Usually your GitHub org/user name.
  projectName: 'OnmyojiAutoScript-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/runhey/OnmyojiAutoScript-website/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OnmyojiAutoScript',
        logo: {
          alt: 'OnmyojiAutoScript',
          src: 'img/logo.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userManualSidebar',
            position: 'right',
            label: '用户手册',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developmentSidebar',
            position: 'right',
            label: '开发文档',
          },
          {
            href: 'https://github.com/runhey/OnmyojiAutoScript',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/runhey/OASX',
            label: 'OASX',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '其他手游脚本精选',
          },
          {
            items: [
              {
                label: 'AzurLaneAutoScript',
                href: 'https://github.com/LmeSzinc/AzurLaneAutoScript',
              },
              {
                label: 'FGO-py',
                href: 'https://github.com/hgjazhgj/FGO-py',
              },
            ],
          },
          {
            items: [
              {
                label: 'MaaAssistantArknights',
                href: 'https://github.com/MaaAssistantArknights/MaaAssistantArknights',
              },
              {
                label: 'ArknightsAutoHelper',
                href: 'https://github.com/ArknightsAutoHelper/ArknightsAutoHelper',
              },
            ],
          },
          {
            items: [
              {
                label: 'Princess-connection-farm',
                href: 'https://github.com/SimonShi1994/Princess-connection-farm',
              },
              {
                label: 'genshin_impact_assistant',
                href: 'https://github.com/infstellar/genshin_impact_assistant',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} OnmyojiAutoScript, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
