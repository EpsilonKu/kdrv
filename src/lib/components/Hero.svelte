<script>
  import { onMount } from 'svelte';
  
  let designElement;
  let rotationDegree = 0;
  let translateY = 0;
  let scale = 1;
  
  onMount(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      rotationDegree = Math.min(scrollPosition * 0.4, 15); // Max rotation of 15 degrees
      translateY = Math.min(scrollPosition * 0.5, 100); // Slide down by max 100px
      scale = Math.max(1 - scrollPosition * 0.001, 0.7); // Scale down to min 70%
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="relative overflow-hidden pt-4 md:pt-8 lg:pt-16">
  <!-- Background pattern -->
  <div class="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full opacity-50"></div>
  <div class="absolute top-40 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
  
  <!-- Header text centered at top -->
  <div class="container mx-auto px-4 relative z-10 text-center mb-8">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      Beautiful UI components with Material 3 expressiveness
    </h1>
  </div>

  <!-- Main content split into two halves -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Left side - Text content -->
      <div class="space-y-8">
        <p class="text-xl text-secondary max-w-2xl">
          kdrv brings Material 3's expressive design system to your applications with dynamic theming, fluid animations, and beautiful components.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/docs" class="btn text-center text-background bg-black rounded-sm">
            Get Started
          </a>
          <a href="/components" class="btn bg-highlight text-center text-black rounded-sm">
            View Components
          </a>
        </div>
      </div>

      <!-- Right side - Design elements illustration -->
      <div class="relative w-full h-[500px]">
        <!-- Design elements with rotation, sliding and scaling effects -->
        <div 
          bind:this={designElement} 
          class="absolute inset-10 rounded-xl bg-white shadow-lg flex items-center justify-center transition-all duration-300"
          style="transform: rotate({rotationDegree}deg) translateY({translateY}px) scale({scale})">
          
          <!-- Material Design Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-purple-600 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>

          <!-- Design elements -->
          <div 
            class="absolute top-0 right-0 w-64 h-64 bg-pink-500 opacity-10 rounded-2xl flex items-center justify-center transition-all duration-300"
            style="transform: rotate({rotationDegree * -1.2 - 15}deg) ">
            <div class="w-40 h-40 bg-purple-400 opacity-40 rounded-xl"></div>
          </div>
          
          <div 
            class="absolute bottom-0 left-0 w-80 h-72 bg-blue-500 opacity-10 rounded-2xl flex items-center justify-center transition-all duration-300"
            style="transform: rotate({-rotationDegree * 1.4 + 10}deg)">
            <div class="w-48 h-12 bg-amber-500 opacity-40 rounded-lg"></div>
          </div>
          
          <div 
            class="absolute bottom-20 right-20 w-40 h-40 bg-teal-500 opacity-10 rounded-full flex items-center justify-center transition-all duration-300"
            style="transform: rotate({rotationDegree * 1.1}deg)">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>