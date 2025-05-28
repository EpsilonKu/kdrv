<script lang="ts">
  import { Button, ButtonGroups } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Button Component</title>
</svelte:head>

<div class="container mx-auto p-6">
  <h1 class="text-3xl font-bold mb-6">Button Group Examples</h1>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-4">Filled Button Groups (Default)</h2>
    <div class="flex flex-col space-y-4">
      <ButtonGroups>
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroups>
      
      <ButtonGroups segmented>
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroups>
      
      <ButtonGroups fullWidth>
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroups>
    </div>
  </section>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-4">Outlined Button Groups</h2>
    <div class="flex flex-col space-y-4">
      <ButtonGroups variant="outlined">
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroups>
      
      <ButtonGroups variant="outlined" segmented>
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroups>
    </div>
  </section>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-4">Elevated Button Groups</h2>
    <div class="flex flex-col space-y-4">
      <ButtonGroups variant="elevated">
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroups>
      
      <ButtonGroups variant="elevated" segmented>
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroups>
    </div>
  </section>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-4">Density Variations</h2>
    <div class="flex flex-col space-y-4">
      <div class="flex items-center gap-2">
        <span class="w-24">Default:</span>
        <ButtonGroups>
          <Button>Option 1</Button>
          <Button>Option 2</Button>
          <Button>Option 3</Button>
        </ButtonGroups>
      </div>
      
      <div class="flex items-center gap-2">
        <span class="w-24">Comfortable:</span>
        <ButtonGroups density="comfortable">
          <Button>Option 1</Button>
          <Button>Option 2</Button>
          <Button>Option 3</Button>
        </ButtonGroups>
      </div>
      
      <div class="flex items-center gap-2">
        <span class="w-24">Compact:</span>
        <ButtonGroups density="compact">
          <Button>Option 1</Button>
          <Button>Option 2</Button>
          <Button>Option 3</Button>
        </ButtonGroups>
      </div>
    </div>
  </section>
</div> 