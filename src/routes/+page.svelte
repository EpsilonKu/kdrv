<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>kdrv - Material 3 Inspired UI Library</title>
  <meta name="description" content="kdrv is a beautiful, expressive UI component library inspired by Material 3 design principles." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1">
    <Hero />
    
    <section class="py-16 bg-black text-bianca">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose kdrv?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card-black flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Expressive Design</h3>
            <p class="text-secondary">Beautiful components that follow Material 3's expressive design principles with dynamic color theming.</p>
          </div>
          
          <div class="card-black flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Highly Performant</h3>
            <p class="text-secondary">Optimized components that deliver smooth animations and interactions with minimal bundle size.</p>
          </div>
          
          <div class="card-black flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Developer Friendly</h3>
            <p class="text-secondary">Fully typed components with extensive documentation and customization options.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-3">Dynamic Theming</h3>
            <p class="mb-4">Create custom themes with our color system that adapts to light and dark modes automatically.</p>
            <div class="flex gap-2 mt-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
              <div class="w-8 h-8 bg-pink-500 rounded-full"></div>
              <div class="w-8 h-8 bg-purple-500 rounded-full"></div>
              <div class="w-8 h-8 bg-amber-500 rounded-full"></div>
              <div class="w-8 h-8 bg-teal-500 rounded-full"></div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-3">Motion and Animation</h3>
            <p class="mb-4">Fluid transitions and micro-interactions that bring your UI to life following Material 3 motion principles.</p>
            <div class="h-8 bg-gray-200 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-2/3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>
