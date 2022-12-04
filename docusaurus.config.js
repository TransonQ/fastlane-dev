// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fastlane Dev',
  tagline: '前端小灶',
  url: 'https://fastlane-dev.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fastlane', // Usually your GitHub org/user name.
  projectName: 'fastlane-dev', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Fastlane',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.png',
        // },
        hideOnScroll: true,
        items: [
          {
            label: '文档',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          { label: 'Blogs', to: '/blog', position: 'left' },
          {
            href: 'https://github.com/quanscheng/fastlane-dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   // links: [
      //   //   {
      //   //     title: 'Docs',
      //   //     items: [
      //   //       {
      //   //         label: 'Components',
      //   //         to: '/docs/intro',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'Library',
      //   //     items: [
      //   //       {
      //   //         label: 'Shopify Polaris ',
      //   //         href: 'https://polaris.shopify.com/',
      //   //       },
      //   //       {
      //   //         label: 'React Docs (beta) ',
      //   //         href: 'https://beta.reactjs.org/',
      //   //       },
      //   //       {
      //   //         label: 'Recoil ',
      //   //         href: 'https://recoiljs.org/zh-hans/',
      //   //       },
      //   //       {
      //   //         label: 'ahooks ',
      //   //         href: 'https://ahooks.js.org/zh-CN/',
      //   //       },
      //   //       {
      //   //         label: 'Styled-components ',
      //   //         href: 'https://github.com/styled-components/styled-components',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'More',
      //   //     items: [
      //   //       {
      //   //         label: '博客 / 分享',
      //   //         to: '/blog',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: '友情链接',
      //   //     items: [
      //   //       {
      //   //         label: 'Fastlane',
      //   //         href: 'https://fstln.io/',
      //   //       },
      //   //       {
      //   //         label: 'Docusaurus',
      //   //         href: 'https://github.com/facebook/docusaurus',
      //   //       },
      //   //     ],
      //   //   },
      //   // ],
      //   // copyright: `Copyright © ${new Date().getFullYear()} Fasltlane Digital Platform.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
