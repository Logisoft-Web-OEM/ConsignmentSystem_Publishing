import { defineConfig, presetUno } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

// 2023-12-12
// config 정의
// colors, fontFamily등 로지소프트 테마를 정의하면 css로 바로 적용 가능 (rules 필요 없음)
// fontsize, padding, margin, zindex, width, height, float등 기본 css는 모두 tailwind css 를 참조
// tailwind 테마가 있으나 추가된 사이즈, value 값이 없다면 'Arbitrary values' 를 사용해서 추가한다. z-[100]
// 기본 component와 props에 따른 css는 shortcuts에 추가하여 단일 class 명으로 유지한다.
// 기본 global.css 에 해당하는 부분은 기본 presets 로 정의하고
// 그외 main, sub 등 각 부분에 따른 preset은 따로 정의하여 uno.config.ts에 import로 구분하여 정의해준다.

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],
  shortcuts: [
    // componets shortcuts
    {
      'dropdown-button':
        'w-38 h-10 p-2 border border-color-#E0E0E0 rounded text-left flex flex-items-center flex-justify-between',
      'dropdown-arrow': 'transition-all',
      'dropdown-arrow-active': 'transform-rotate-180',
      'dropdown-content':
        'w-38 h-28 mt-1 rounded border border-color-#E0E0E0 p-2 overflow-auto absolute bg-white z-10',
      'dropdown-item':
        'py-1 pl-1 bg-cover rounded-sm hover-font-500 hover-color-#143B75',
      submenu: 'float-left mr-5 font-size-5',
      focused: 'color-#41C2D1 font-bold border-b-2 border-b-#41C2D1',
      isNone: 'hidden',
      isBlack: 'black',
      disabled: 'bg-gray',

      button: 'font-bold py-2 px-4 c w-auto relative',
      'btn-blue': 'bg-#41C2D1 text-white hover:bg-#349ca8',
      'btn-line-blue':
        'py-1.8 px-3.8 bg-white text-#41C2D1 border border-color-#41C2D1 hover:(bg-#41C2D1 text-white)',
      'btn-icon':
        'before:(absolute bg-center bg-no-repeat bg-cover w-3 h-3 top-1/2 translate-y-2/-4)',
      'btn-list': 'rounded-none',

      checkbox:
        'appearance-none checked:(bg-#41C2D1 border-#41C2D1 bg-[url(/btn-checkbox.svg)]) bg-[url(/check.svg)] bg-center relative block w-5 h-5 rounded-sm bg-white border border-color-#BDBDBD',
      radiobox:
        'appearance-none checked:(bg-#41C2D1 border-#41C2D1 bg-[url(/radio.svg)]) bg-(center no-repeat) relative block w-5 h-5 rounded-100 bg-white border border-color-#BDBDBD',

      'switch-button':
        'w-8 h-5 before:(content-[""] block absolute w-3.5 h-3.5 rounded-full bg-white top-1/2 translate-y-2/-4 left-0.5)',
      'switch-button-active': 'before:(right-0.5 left-auto)',

      'select-box':
        'w-38 h-10 p-2 border border-color-#E0E0E0 rounded text-left flex flex-items-center flex-justify-between',
      'select-options':
        'w-38 h-28 mt-1 rounded border border-color-#E0E0E0 p-2 overflow-auto absolute bg-white z-10',
      'option-item':
        'py-1 pl-1 bg-cover rounded-sm hover-font-500 hover-color-#143B75',
    },
  ],
});
