<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';
  import { onMount } from 'svelte';
  import LightModeIcon from './assets/icon-theme-light.svelte';
  import DarkModeIcon from './assets/icon-theme-dark.svelte';
  import { writable } from 'svelte/store';

  let theme = writable('unknown');

  onMount(() => {
    theme.set(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if ($theme !== 'unknown') {
      if ($theme === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        theme.set('dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        theme.set('light');
      }
    }
  };
</script>

<button
  type="button"
  on:click={handleClick}
  class="border border-solid rounded-full border-slate-400 dark:border-slate-400"
>
  <span
    class="flex items-center content-center h-8 py-1 pl-4 pr-8 transition-transform duration-75 pointer-events-none dark:translate-x-4"
  >
    <LightModeIcon />
    <DarkModeIcon />
  </span>
</button>
