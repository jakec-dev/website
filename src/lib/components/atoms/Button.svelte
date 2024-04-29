<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cva, type VariantProps } from 'class-variance-authority';

  const button = cva('inline-flex border-none rounded-full', {
    variants: {
      intent: {
        primary: ['text-white bg-blue-500 border-transparent', 'hover:bg-blue-700'],
        secondary: ['text-white bg-green-500 border-transparent', 'hover:bg-green-700'],
      },
      size: {
        small: ['text-sm leading-tight py-1 px-2'],
        medium: ['text-md leading-normal py-2 px-4'],
      },
    },
  });

  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {}

  export let intent: $$Props['intent'] = 'primary';
  export let size: $$Props['size'] = 'medium';
</script>

<button type="button" {...$$props} class={button({ intent, size, class: $$props.class })}>
  <slot />
</button>
