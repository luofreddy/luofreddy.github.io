const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Freddy',
  tagline: '不用變得很厲害才開始，而是開始了才會變得很厲害',
  url: 'https://luofreddy.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'luofreddy', // Usually your GitHub org/user name.
  projectName: 'luofreddy.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
      navbar: {
        title: 'Freddy',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png  ',
        },
        items: [
          {
            position: 'left',
            label: 'Docs',
            to: '/docs/NPM/yarn-workspaces'
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/luofreddy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Freddy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadatas:[
        {name: 'google-site-verification', content: 'AtD5Ibng1T6JZI370vhIWYWXqaBBUj-OAsE7mccWJFM'}
      ],
      
    }),
    scripts: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-TMNX80PVNL',
        async: true,
      },
      {
        src: '/js/ga4-init.js',
        async: false
      }
    ]
});
