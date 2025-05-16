<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>About DeliverTrack | Modern Package Tracking</title>
  <meta name="description" content="Learn about DeliverTrack's mission to provide reliable package tracking. Discover our story, values, and commitment to excellent service." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1">
    <section class="py-16 md:py-24 bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto mb-16 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About DeliverTrack</h1>
          <p class="text-xl">Simplifying delivery tracking for businesses and customers around the world.</p>
        </div>
        
        <div class="card mb-12">
          <h2 class="text-2xl font-bold mb-4">Our Story</h2>
          <p class="mb-6">
            DeliverTrack was founded in 2020 with a simple mission: to bring transparency and peace of mind to the package delivery experience. We noticed that tracking systems were often confusing, outdated, and provided limited information.
          </p>
          <p>
            We set out to build a better solution—one that combines real-time tracking with beautiful design and an intuitive user experience. Today, we're proud to serve thousands of businesses and millions of customers worldwide.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              To provide the most reliable, transparent, and stress-free package tracking experience for everyone. We believe that knowing where your package is shouldn't be complicated.
            </p>
          </div>
          
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">Our Values</h2>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Transparency</strong> — Clear information at every step</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Reliability</strong> — Accurate tracking you can count on</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Simplicity</strong> — Easy to use for everyone</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <span><strong>Innovation</strong> — Always improving our service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-12">Ready to track your package?</h2>
        <a href="/track" class="btn text-black bg-selection inline-block hover:-translate-y-1 transition-transform duration-200">
          Track Now
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  </main>
  
  <Footer />
</div> 