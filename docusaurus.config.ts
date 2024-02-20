import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

interface customConfig extends Config {
}

const config: customConfig = {
  title: 'Creatif Studio Docs',
  tagline: 'Explore tutorials & documentation by product',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // headTags: [
  //   {
  //     tagName: 'link',
  //     attributes: {
  //       rel: 'stylesheed',
  //       href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  //     },
  //   },
  // ],

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Creatif Studio',
      logo: {
        src: 'img/logo-light.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Home',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Document',
        },
        { to: '/blog', label: 'Product', position: 'left' },
        { to: '/blog', label: 'Resource', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/blog', label: 'Contact Us', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      // logo: {
      //   src: "img/logo1.svg"
      // },
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Products',
          items: [
            {
              label: 'Setapp',
              to: '/blog',
            },
            {
              label: 'Gawe',
              to: '#',
            },
            {
              label: 'Eduka',
              to: '#',
            },
            {
              label: 'Monito',
              to: '#',
            },
            {
              label: 'Linka',
              to: '#',
            },
            {
              label: 'Outlet',
              to: '#',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              to: '/blog',
            },
            {
              label: 'Career',
              to: '/blog',
            },
            {
              label: 'Brand',
              to: '/blog',
            },
            {
              label: 'Contact Us',
              to: '/blog',
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
        {
          title: 'Resource',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Tutorials',
              to: '/blog',
            },
            {
              label: 'Community',
              to: '/blog',
            },
            {
              label: 'Events',
              to: '/blog',
            },
            {
              label: 'Events',
              to: '/blog',
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `©${new Date().getFullYear()} Bina. All right reserved. Created by Creatif Studio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'setapp',
        path: 'setapp',
        routeBasePath: 'setapp',
        sidebarPath: require.resolve('./sidebarsSetapp.ts'),
      },
    ],
  ],
};

export default config;
