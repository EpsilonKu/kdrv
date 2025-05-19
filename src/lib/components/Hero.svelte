<script>
  import { onMount } from 'svelte';
  
  let designElement;
</script>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg) scale(1);
    }
    50% {
      transform: translateY(-20px) rotate(5deg) scale(0.95);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  .rotating {
    animation: rotate 20s linear infinite;
  }

  .rotating-reverse {
    animation: rotate 15s linear infinite reverse;
  }
</style>

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
          <a href="/docs" class="btn text-center text-bianca bg-black rounded-sm">
            Get Started
          </a>
          <a href="/components" class="btn bg-highlight text-center text-black rounded-sm">
            View Components
          </a>
        </div>
      </div>

      <!-- Right side - Design elements illustration -->
      <div class="relative w-full h-[500px]">
        <!-- Design elements with continuous animations -->
        <div 
          bind:this={designElement} 
          class="absolute inset-10 rounded-xl flex items-center justify-center ">

          <img 
            src="/images/logo/main.svg" 
            alt="kdrv logo" 
            class="w-full h-full object-contain p-8"
          />

          <!-- Design elements -->
          <div 
            class="absolute top-0 right-0 w-64 h-64 bg-pink-500 opacity-10 rounded-4xl flex items-center justify-center rotating">
            <div class="w-40 h-40 bg-purple-400 opacity-40 rounded-xl"></div>
          </div>
          
          <div 
            class="absolute bottom-0 left-0 w-80 h-72 bg-blue-500 opacity-10 rounded-4xl flex items-center justify-center rotating-reverse">
            <div class="w-48 h-12 bg-amber-500 opacity-40 rounded-lg"></div>
          </div>
          
          <div 
            class="absolute bottom-20 right-20 w-40 h-40 bg-teal-500 opacity-10 rounded-full flex items-center justify-center rotating">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>