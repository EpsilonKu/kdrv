<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let Button: any = null;
  let Card: any = null;
  let CardHeader: any = null;
  let CardContent: any = null;
  let CardTitle: any = null;
  let Badge: any = null;
  
  // Load UI components only on client side to avoid SSR issues
  onMount(async () => {
    if (browser) {
      const module = await import('@kdrv/ui');
      Button = module.Button;
      Card = module.Card;
      CardHeader = module.CardHeader;
      CardContent = module.CardContent;
      CardTitle = module.CardTitle;
      Badge = module.Badge;
    }
  });
  
  // Component categories with examples
  const componentExamples = [
    {
      category: 'Actions',
      components: [
        {
          name: 'Button',
          description: 'Interactive buttons with multiple variants',
          component: 'button'
        }
      ]
    },
    {
      category: 'Layout',
      components: [
        {
          name: 'Card',
          description: 'Flexible containers for grouping content',
          component: 'card'
        }
      ]
    },
    {
      category: 'Feedback',
      components: [
        {
          name: 'Alert',
          description: 'Display important messages and notifications',
          component: 'alert'
        }
      ]
    },
    {
      category: 'Data Display',
      components: [
        {
          name: 'Badge',
          description: 'Small status indicators and labels',
          component: 'badge'
        },
        {
          name: 'Avatar',
          description: 'User profile pictures and initials',
          component: 'avatar'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Components | kdrv UI Library</title>
  <meta name="description" content="Explore all the beautiful UI components in the kdrv library. See live examples and learn how to use each component." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1 py-12 md:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto mb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Component Library</h1>
        <p class="text-xl">Explore our collection of beautiful, accessible UI components</p>
      </div>
      
      <!-- Live Examples Section -->
      <section class="mb-16">
        <div class="card">
          <h2 class="text-3xl font-bold mb-8">Live Examples</h2>
          <p class="text-lg mb-8">See our components in action</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Button Examples -->
            <div class="space-y-4">
              <h3 class="font-bold text-lg">Buttons</h3>
              <div class="space-y-2">
                {#if Button}
                  <svelte:component this={Button} variant="default">Default Button</svelte:component>
                  <svelte:component this={Button} variant="outline">Outlined Button</svelte:component>
                  <svelte:component this={Button} variant="ghost">Ghost Button</svelte:component>
                {:else}
                  <!-- Fallback buttons while loading -->
                  <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">Default Button</button>
                  <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">Outlined Button</button>
                  <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">Ghost Button</button>
                {/if}
              </div>
            </div>
            
            <!-- Other components would be added here when they're available -->
            <div class="space-y-4">
              <h3 class="font-bold text-lg">Cards</h3>
              <div class="p-4 bg-white rounded-lg shadow-md border">
                <h4 class="font-semibold mb-2">Sample Card</h4>
                <p class="text-sm text-gray-600">This is an example of a card component with some content.</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="font-bold text-lg">Badges</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Default</span>
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Secondary</span>
                <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Success</span>
                <span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">Danger</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Component Categories -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">All Components</h2>
        
        <div class="space-y-8">
          {#each componentExamples as category}
            <div class="card">
              <h3 class="text-2xl font-bold mb-6">{category.category}</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each category.components as component}
                  <a 
                    href="/components/{component.component}" 
                    class="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors group"
                  >
                    <h4 class="font-bold text-lg mb-2 group-hover:text-highlight">{component.name}</h4>
                    <p class="text-gray-600">{component.description}</p>
                    
                    <div class="mt-4 flex items-center text-sm text-highlight">
                      <span>View examples</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </a>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </section>
      
      <!-- Call to Action -->
      <section class="text-center">
        <div class="card bg-black text-bianca">
          <h2 class="text-3xl font-bold mb-6">Ready to start building?</h2>
          <p class="text-lg mb-8">Get started with kdrv and create beautiful applications.</p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/docs" class="btn bg-bianca text-black hover:bg-gray-100">
              Get Started
            </a>
            <a href="https://github.com/kdrv-team/kdrv" class="btn border border-bianca text-bianca hover:bg-bianca hover:text-black">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
  
  <Footer />
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