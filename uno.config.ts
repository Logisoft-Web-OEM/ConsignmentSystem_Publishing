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
});
