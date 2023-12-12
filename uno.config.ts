import { defineConfig, presetUno } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

// 2023-12-12
// config 정의
// theme의 colors, fontFamily등 로지소프트 정의 테마를 정의하면 css로 바로 정의 가능 (rules 필요 없음)
// fontsize, padding, margin, zindex, width, height, float등 기본 css는 모두 tailwind css 를 참조
// tailwind 테마가 있으나 추가된 사이즈, value 값이 없다면 'Arbitrary values' 를 사용해서 추가한다. z-[100]
// 기본 component와 props에 따른 css는 shortcuts에 추가하여 단일 class 명으로 유지한다.
// 기본 global.css 에 해당하는 부분은 기본 presets 로 정의하고
// 그외 main, sub 등 각 부분에 따른 preset은 따로 정의하여 uno.config.ts에 import로 구분하여 정의해준다.

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    // you could still have object style
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    // dynamic shortcuts

    'dropdown-button':
      'w-38 h-10 p-2 border border-color-#E0E0E0 rounded text-left flex flex-items-center flex-justify-between',
    'dropdown-arrow': 'transition-all',
    'dropdown-arrow-active': 'transform-rotate-180',
    'dropdown-content':
      'w-38 h-28 mt-1 rounded border border-color-#E0E0E0 p-2 overflow-auto',
    'dropdown-item':
      'py-1 pl-1 bg-cover rounded-sm hover-font-500 hover-color-#143B75',
    submenu: 'float-left mr-5 font-size-5',
    focused: 'color-#4749fb font-bold border-b-2 border-b-#4749fb',
  },
  theme: {
    colors: {
      primary: '#00bfa5',
      secondary: '#2979ff',
      error: '#ff878d',
      success: '#4f9a94',
      gray: {
        '100': '#cfd9de',
        '200': '#b0bec5',
        '300': '#90a4ae',
        '400': '#78909c',
        '500': '#607d8b',
      },
      status: {
        good: '#4f9a94',
        normal: '#5d99c6',
        danger: '#bb848d',
        empty: '78909c',
      },
    },
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '1.75rem',
      xxl: '2rem',
      xxxl: '2.25rem',
    },
    zIndex: {
      '2': '2',
      '3': '3',
    },
  },
  rules: [],
  transformers: [transformerVariantGroup()],
});
