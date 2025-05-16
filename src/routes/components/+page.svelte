<script lang="ts">
  // Components with images and descriptions
  const components = [
    { 
      name: "Button", 
      path: "/components/button",
      description: "Buttons help people initiate actions and make choices",
      image: "/images/components/button-placeholder.svg" 
    },
    { 
      name: "Alert", 
      path: "/components/alert",
      description: "Alerts display brief messages for user notification",
      image: "/images/components/alert-placeholder.svg" 
    },
    { 
      name: "Alert Dialog", 
      path: "/components/alert-dialog",
      description: "Alert dialogs require attention and confirmation",
      image: "/images/components/alert-dialog-placeholder.svg" 
    },
    { 
      name: "Badge", 
      path: "/components/badge",
      description: "Badges show notifications or item counts",
      image: "/images/components/badge-placeholder.svg" 
    },
    { 
      name: "Card", 
      path: "/components/card",
      description: "Cards contain content and actions about a single subject",
      image: "/images/components/card-placeholder.svg" 
    },
    { 
      name: "Input", 
      path: "/components/input",
      description: "Inputs allow users to enter and edit text",
      image: "/images/components/input-placeholder.svg" 
    },
    { 
      name: "Label", 
      path: "/components/label",
      description: "Labels describe the associated input elements",
      image: "/images/components/label-placeholder.svg" 
    },
    { 
      name: "Select", 
      path: "/components/select",
      description: "Select menus display a list of choices on a surface",
      image: "/images/components/select-placeholder.svg" 
    },
    { 
      name: "Textarea", 
      path: "/components/textarea",
      description: "Textareas allow for multi-line text input",
      image: "/images/components/textarea-placeholder.svg" 
    },
    { 
      name: "Avatar", 
      path: "/components/avatar",
      description: "Avatars represent people with images or initials",
      image: "/images/components/avatar-placeholder.svg" 
    },
  ];
</script>

<svelte:head>
  <title>Component Library</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold mb-2">Components</h1>
  <p class="text-lg mb-8">Building blocks for creating consistent, accessible interfaces</p>

  {#if components.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each components as component}
        <a 
          href={component.path}
          class="bg-black text-highlight flex flex-col group rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="text-hightlight aspect-[4/3] flex items-center justify-center overflow-hidden">
            <div class="w-full h-full flex items-center justify-center bg-selection">
              <!-- Image placeholder -->
              <div class="text-black text-center text-sm">
                Image placeholder
              </div>
            </div>
          </div>
          <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-medium mb-1">{component.name}</h2>
            <p class="text-sm ">{component.description}</p>
          </div>
        </a>
      {/each}
    </div>
  {:else}
    <p class="text-xl text-gray-600 dark:text-gray-400">
      No components available yet. Stay tuned!
    </p>
  {/if}
</div>

<style lang="postcss">
  /* Material Design inspired styles */
  :global(body) {
    --transition-standard: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  a {
    transition: var(--transition-standard);
  }
</style> 