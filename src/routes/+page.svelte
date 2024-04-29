<script lang="ts">
  import LightSwitch from '$lib/components/atoms/LightSwitch/LightSwitch.svelte';
  import Button from '$lib/components/atoms/Button.svelte';
</script>

<div class="flex flex-col items-start gap-4 p-4">
  <h1 class="dark:text-white">Hi, I'm Jake Clayton</h1>

  <LightSwitch />

  <Button intent="secondary">Hello there</Button>
</div>
