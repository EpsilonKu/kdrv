<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>About kdrv | Modern UI Component Library</title>
  <meta name="description" content="Learn about kdrv, a beautiful Material 3 inspired UI component library for Svelte. Discover our story, design philosophy, and commitment to excellent developer experience." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1">
    <section class="py-16 md:py-24 bg-bianca">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto mb-16 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About kdrv</h1>
          <p class="text-xl">A beautiful, expressive UI component library inspired by Material 3 design principles.</p>
        </div>
        
        <div class="card mb-12">
          <h2 class="text-2xl font-bold mb-4">Our Story</h2>
          <p class="mb-6">
            kdrv was created with a vision to bring Material 3's expressive design language to the Svelte ecosystem. We noticed that while Material 3 brought revolutionary design principles, there weren't many high-quality implementations for Svelte developers.
          </p>
          <p>
            We set out to build a comprehensive solution—one that combines beautiful design with exceptional developer experience and performance. Today, kdrv provides a complete set of components that follow Material 3's dynamic color system, motion principles, and accessibility standards.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              To provide Svelte developers with the most beautiful, performant, and accessible UI components. We believe that great design shouldn't be complicated to implement.
            </p>
          </div>
          
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">Design Philosophy</h2>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Expressive</strong> — Components that bring personality to your apps</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Adaptive</strong> — Dynamic theming that works in any context</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Accessible</strong> — Built with accessibility-first principles</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Performant</strong> — Optimized for speed and bundle size</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-12">Ready to build something amazing?</h2>
        <a href="/docs" class="btn text-black bg-selection inline-block hover:-translate-y-1 transition-transform duration-200">
          View Documentation
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  </main>
  
  <Footer />
</div> 