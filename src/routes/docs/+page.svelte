<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  
  // Example component categories
  const componentCategories = [
    {
      name: 'Layout & Navigation',
      components: ['Header', 'Footer', 'Sidebar', 'Navigation']
    },
    {
      name: 'Forms & Inputs',
      components: ['Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio']
    },
    {
      name: 'Data Display',
      components: ['Card', 'Badge', 'Avatar', 'Table', 'List']
    },
    {
      name: 'Feedback',
      components: ['Alert', 'Dialog', 'Toast', 'Progress', 'Spinner']
    }
  ];
  
  const quickStartSteps = [
    {
      step: 1,
      title: 'Install kdrv',
      code: 'npm install @kdrv/svelte'
    },
    {
      step: 2,
      title: 'Import Components',
      code: `import { Button, Card } from '@kdrv/svelte';`
    },
    {
      step: 3,
      title: 'Use in Your App',
      code: `<Button variant="filled">Click me</Button>`
    }
  ];
</script>

<svelte:head>
  <title>Documentation | kdrv UI Library</title>
  <meta name="description" content="Complete documentation for kdrv - a beautiful Material 3 inspired UI component library for Svelte. Get started with installation, examples, and API reference." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1 py-12 md:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto mb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
        <p class="text-xl">Everything you need to build beautiful UIs with kdrv</p>
      </div>
      
      <!-- Quick Start Section -->
      <section class="mb-16">
        <div class="card">
          <h2 class="text-3xl font-bold mb-8">Quick Start</h2>
          <p class="text-lg mb-8">Get up and running with kdrv in minutes</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each quickStartSteps as step}
              <div class="relative">
                <div class="absolute -top-3 -left-3 w-8 h-8 bg-highlight text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div class="bg-gray-100 p-6 rounded-lg border-2 border-gray-200">
                  <h3 class="font-bold text-lg mb-3">{step.title}</h3>
                  <pre class="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto"><code>{step.code}</code></pre>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>
      
      <!-- Components Overview -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Component Library</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each componentCategories as category}
            <div class="card">
              <h3 class="text-xl font-bold mb-4">{category.name}</h3>
              <div class="grid grid-cols-2 gap-3">
                {#each category.components as component}
                  <a 
                    href="/docs/components/{component.toLowerCase()}" 
                    class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                  >
                    {component}
                  </a>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </section>
      
      <!-- Features Section -->
      <section class="mb-16">
        <div class="card">
          <h2 class="text-3xl font-bold mb-8">Key Features</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
                </svg>
                Material 3 Design
              </h3>
              <p>Components built following Google's latest Material Design principles with expressive theming and adaptive layouts.</p>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                TypeScript Ready
              </h3>
              <p>Fully typed components with excellent IDE support and auto-completion for better developer experience.</p>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                </svg>
                High Performance
              </h3>
              <p>Optimized for speed with minimal bundle size impact. Components are tree-shakeable and lazy-loaded.</p>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                Accessibility First
              </h3>
              <p>Built with WCAG 2.1 AA compliance in mind. All components include proper ARIA labels and keyboard navigation.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Getting Help Section -->
      <section class="mb-16">
        <div class="card bg-black text-bianca">
          <h2 class="text-3xl font-bold mb-6">Need Help?</h2>
          <p class="text-lg mb-8">We're here to help you build amazing applications with kdrv.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/contact" class="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 class="font-bold text-lg mb-2">Contact Support</h3>
              <p class="text-gray-300">Get help with implementation or report issues</p>
            </a>
            
            <a href="https://github.com/kdrv-team/kdrv" class="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 class="font-bold text-lg mb-2">GitHub Repository</h3>
              <p class="text-gray-300">View source code and contribute</p>
            </a>
            
            <a href="/about" class="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 class="font-bold text-lg mb-2">About kdrv</h3>
              <p class="text-gray-300">Learn more about our mission and values</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
  
  <Footer />
</div> 