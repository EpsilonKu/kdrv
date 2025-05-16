<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Button Component</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">Button</h1>

  <div class="space-y-4">
    <div>
      <h2 class="text-xl font-semibold mb-2">Default Button</h2>
      <Button>Click Me</Button>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-2">Outline Button</h2>
      <Button variant="outline">Click Me</Button>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-2">Destructive Button</h2>
      <Button variant="destructive">Delete</Button>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-2">Small Button</h2>
      <Button size="sm">Small</Button>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-2">Large Button</h2>
      <Button size="lg">Large</Button>
    </div>
  </div>
</div> 