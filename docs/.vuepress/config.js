import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: 'en-US',
  title: 'New Purchase & Inventory',
  description: 'material_guideline',
  base: '/material_guideline/', // 根据您的仓库名称设置

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      { text: '', link: '/' },
    ],
    sidebar: {
      '/': [
        '',
      ],
    },
  }),

  bundler: viteBundler(),
});