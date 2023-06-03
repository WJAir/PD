const verConfig = require('./package.json')

const copyright = `
<div class="foot">
  Copyright © ${new Date().getFullYear()}
  Built with <a href='https://www.docusaurus.cn/' target='_blank'>Docusaurus</a>.
  V${verConfig.version}
</div>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haiwell',
  tagline: 'Over the mountains,mountains',
  url: 'https://airy.ink',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  noIndex: true,
  organizationName: 'facebook',
  projectName: 'docusaurus',
  // trailingSlash: true,

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  // i18n: {
  //   defaultLocale: "zh-cn",
  //   locales: ["en", "zh-cn"],
  //   localeConfigs: {
  //     en: {
  //       label: "English",
  //     },
  //     "zh-cn": {
  //       label: "中文",
  //     },
  //   },
  // },

  // headTags: [
  //   // 百度统计
  //   {
  //     tagName: 'script',
  //     attributes: {
  //       src: 'https://hm.baidu.com/hm.js?edfa0d378dea973c89efafe56ca2c85f',
  //     },
  //   },
  // ],

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editLocalizedFiles: false,
          blogTitle: 'PD’s blog',
          blogDescription: 'Blog',
          blogSidebarCount: 10,
          blogSidebarTitle: '记录',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--s*(truncate)s*-->/,
          feedOptions: {
            type: 'all',
            title: '',
            description: '',
            copyright: '',
            language: undefined,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // 搜索框
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/docs",
        docsDir: "docs",
        blogDir: "blog",
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 55,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        // theme: require('prism-react-renderer/themes/github'),
        theme: require('prism-react-renderer/themes/dracula'),
        // darkTheme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['lua'],
      },

      // 侧边栏
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      // 代码在线编辑
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },

      // 主题模式
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // 公告条
      announcementBar: {
        id: 'support_us',
        content:
          `<a class="announcement_link" target="_self"  href="/blog">Welcome！🎉🎉🎉</a>`,
        backgroundColor: '#ace0f9',
        textColor: '#091E42',
        isCloseable: false,
      },
      // 导航栏
      navbar: {
        // title: 'Over the mountains,mountains',
        title: '',
        logo: {
          alt: 'Haiwell',
          src: '/img/logo.png',
        },
        // 顶部导航滚动时隐藏
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },

          {
            label: '资料',
            to: '/docs/noun',
            position: 'right',
          },

          {
            label: '记录',
            to: '/blog',
            position: 'right',
          },

          {
            label: "小工具",
            to: '/tools',
            position: 'right'
          },

          {
            label: "作品集",
            to: '/Portfolio',
            position: 'right'
          },

          {
            href: 'https://github.com/WJAir/PD',
            position: 'right',
            className: 'header-github-link header-icon-link',
            'aria-label': 'GitHub repository',
          },

          // {
          //   label: "docsTags",
          //   to: '/docs/tags',
          //   position: 'right'
          // },

          // {
          //   label: "blogTags",
          //   to: '/blog/tags',
          //   position: 'right'
          // },

          // {
          //   label: '查找',
          //   to: '/search',
          //   position: 'right',
          // },

          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },

      // 页脚
      footer: {
        style: 'light',
        links: [
          {
            title: 'Local',
            items: [
              {
                label: 'Docs',
                to: '/docs/noun',
              },
              {
                label: 'Recode',
                href: '/blog',
              },
            ],
          },
          {
            title: 'Haiwell',
            items: [
              {
                label: 'Haiwell',
                href: 'https://haiwell.com',
              },
              {
                label: 'Haiwell Help Center',
                href: 'https://help.haiwell.com',
              },
            ],
          },
          {
            title: 'Haiwell Cloud',
            items: [
              {
                label: 'Haiwell Cloud Platform',
                href: 'https://cloud.haiwell.com',
              },
              {
                label: 'Haiwell Enterprise Platform',
                href: 'https://ecloud..haiwell.com',
              },
            ],
          },
        ],
        copyright: copyright,
      },
    }),
};

module.exports = config;
