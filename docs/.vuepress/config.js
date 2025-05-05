import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: 'en-US',
  title: 'VuePress',
  description: 'My first VuePress Site',
  base: '/material_guideline/', // 根据您的仓库名称设置

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      { text: 'material_guideline', link: '/material_guideline' },
    ],
    sidebar: {
      '/': [
        '',
        'material_guideline',
      ],
    },
  }),

  bundler: viteBundler(),
});