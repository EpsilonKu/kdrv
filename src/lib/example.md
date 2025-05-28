# Using KDRV UI in a Svelte Project

This example shows how to use KDRV UI components in a SvelteKit project.

## Basic Setup

1. Install the package:

```bash
npm install kdrv-ui
```

2. Import the styles in your main layout file (e.g., `src/routes/+layout.svelte`):

```svelte
<script>
  import 'kdrv-ui/styles.css';
</script>

<slot />
```

3. Use components in your pages:

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import { Button } from 'kdrv-ui';
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Welcome to My App</h1>
  
  <div class="flex gap-2">
    <Button>Default Button</Button>
    <Button variant="outline">Outline Button</Button>
    <Button variant="destructive">Destructive Button</Button>
  </div>
  
  <div class="mt-4 flex gap-2">
    <Button size="sm">Small Button</Button>
    <Button>Default Size</Button>
    <Button size="lg">Large Button</Button>
  </div>
</div>
```

## Working with Component Variants

Button components support these variants:

```svelte
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

And these sizes:

```svelte
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

You can also add custom classes:

```svelte
<Button class="custom-class">Custom Button</Button>
``` 