<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import PackageDetails from '$lib/components/PackageDetails.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  // Get the tracking ID from the URL
  $: trackingId = $page.params.id;
</script>

<svelte:head>
  <title>Package Tracking: {trackingId} | DeliverTrack</title>
  <meta name="description" content="Real-time tracking information for your package. View current status, location, and estimated delivery date." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Header activePage="track" />
  
  <main class="flex-1 py-12 md:py-24">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Tracking Details</h1>
        <p class="text-xl text-secondary">Here's the latest information about your package</p>
      </div>
      
      <PackageDetails trackingNumber={trackingId} />
      
      <div class="mt-12 text-center">
        <a href="/track" class="btn text-black bg-selection inline-flex items-center justify-center hover:-translate-y-1 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          <span class="ml-2">Track Another Package</span>
        </a>
      </div>
    </div>
  </main>
  
  <Footer />
</div> 