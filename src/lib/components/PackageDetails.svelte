<script lang="ts">
  let { trackingNumber, packageInfo } = $props<{ trackingNumber: string, packageInfo: any }>();
  // Define types for packageInfo more specifically if available, 
  // or use a general type like 'any' or a custom interface for now.
</script>

<div class="max-w-4xl mx-auto">
  <div class="card mb-8">
    <div class="flex flex-col md:flex-row justify-between gap-4 mb-6">
      <div>
        <p class="text-sm text-secondary">Tracking Number</p>
        <h2 class="text-lg font-bold">{trackingNumber}</h2>
      </div>
      <div>
        <p class="text-sm text-secondary">Status</p>
        <div class="flex items-center">
          <span class="mr-2 w-3 h-3 rounded-full border border-black"></span>
          <span class="text-lg font-bold">{packageInfo.status}</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-secondary">Estimated Delivery</p>
        <p class="text-lg font-bold  ">{packageInfo.estimatedDelivery}</p>
      </div>
    </div>
    
    <div class="relative flex justify-between items-center py-4">
      <div class="text-left">
        <p class="text-sm text-secondary mb-1">From</p>
        <p class="text-lg font-bold">{packageInfo.origin}</p>
      </div>
      
      <div class="w-full">
        <div class="border-t-2 border-dotted border-black opacity-50"></div>
      </div>
      
      <div class="text-right">
        <p class="text-sm text-secondary mb-1">To</p>
        <p class="text-lg font-bold">{packageInfo.destination}</p>
      </div>
    </div>
  </div>
  
  <div class="card">
    <h3 class="text-xl font-bold mb-6">Tracking History</h3>
    
    <div class="space-y-8">
      {#each packageInfo.updates as update, idx}
        <div class="flex">
          <div class="mr-4 relative flex flex-col items-center">
            <div class={`w-6 h-6 rounded-full flex items-center justify-center border ${update.completed ? 'border-black' : 'border-black opacity-50'}`}>
              {#if update.completed}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              {:else}
                <div class="w-2 h-2 rounded-full border border-black opacity-50"></div>
              {/if}
            </div>
            {#if idx < packageInfo.updates.length - 1}
              <div class={`h-full w-0.5 ${packageInfo.updates[idx + 1].completed ? 'border-r border-black' : 'border-r border-black opacity-50'}`}></div>
            {/if}
          </div>
          
          <div class="flex-1 pb-8">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h4 class="font-medium">{update.status}</h4>
                <p class="text-secondary">{update.location}</p>
              </div>
              <div class="text-right mt-2 md:mt-0">
                <p class="text-sm">{update.date}</p>
                <p class="text-sm text-secondary">{update.time}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div> 