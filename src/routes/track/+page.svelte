<script lang="ts">
  import TrackingSearch from '$lib/components/TrackingSearch.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  // FAQ data
  const faqItems = [
    {
      question: "How do I track my package?",
      answer: "Enter your tracking number in the search box above. You'll receive detailed information about your package's journey."
    },
    {
      question: "Where can I find my tracking number?",
      answer: "Your tracking number is typically provided in your order confirmation email or on your receipt. It's usually a combination of letters and numbers."
    },
    {
      question: "How often is tracking information updated?",
      answer: "Tracking information is updated in real-time as your package moves through our delivery network. You'll see the most recent status whenever you check."
    },
    {
      question: "What if my package is delayed?",
      answer: "If your package is delayed, you'll see the updated delivery estimate in your tracking information. For additional assistance, please contact our support team."
    }
  ];
</script>

<svelte:head>
  <title>Track Your Package | DeliverTrack</title>
  <meta name="description" content="Enter your tracking number to get real-time updates on your package's location and delivery status." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1 py-12 md:py-24">
    <div class="container mx-auto px-4">
      <div class="mb-16 text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Track Your Package</h1>
        <p class="text-xl text-black text-left ps-2"><span class="ps-3">Enter your tracking number below to get real-time</span> <br>updates on your package's exact location, delivery status, and receive instant notifications via SMS or email. Our advanced tracking<br> system provides detailed information about your shipment's journey.</p>
      </div>
      
      <TrackingSearch />
      
      <div class="mt-24">
        <h2 class="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div class="max-w-3xl mx-auto divide-y divide-black">
          {#each faqItems as faq, i}
            <div class="py-3" data-accordion-id={i}>
              <h3>
                <button
                  id="faq-title-{i}"
                  class="flex items-center justify-between w-full text-left font-semibold py-2"
                  aria-expanded="false"
                  aria-controls="faq-content-{i}"
                  on:click={(e) => {
                    const content = document.getElementById(`faq-content-${i}`);
                    const btn = e.currentTarget;
                    const isOpen = btn.getAttribute('aria-expanded') === 'true';
                    
                    // Update button aria state
                    btn.setAttribute('aria-expanded', (!isOpen).toString());
                    
                    // Find SVG rects for animation
                    const rects = btn.querySelectorAll('rect');
                    
                    if (content) {
                      if (!isOpen) {
                        // Open the accordion
                        content.style.gridTemplateRows = '1fr';
                        content.style.opacity = '1';
                        
                        // Animate SVG to minus icon
                        if (rects && rects.length >= 2) {
                          rects[0].classList.add('rotate-180');
                          rects[1].classList.add('rotate-180');
                        }
                      } else {
                        // Close the accordion
                        content.style.gridTemplateRows = '0fr';
                        content.style.opacity = '0';
                        
                        // Animate SVG back to plus icon
                        if (rects && rects.length >= 2) {
                          rects[0].classList.remove('rotate-180');
                          rects[1].classList.remove('rotate-180');
                        }
                      }
                    }
                  }}
                >
                  <span class="text-xl font-bold">{faq.question}</span>
                  <svg class="fill-black shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" />
                    <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" />
                  </svg>
                </button>
              </h3>
              <div
                id="faq-content-{i}"
                role="region"
                aria-labelledby="faq-title-{i}"
                class="grid text-black overflow-hidden transition-all duration-300 ease-in-out grid-rows-[0fr] opacity-0"
              >
                <div class="overflow-hidden">
                  <p class="py-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </main>
  
  <Footer />
</div>

<style>
  /* SVG animations */
  .rotate-180 {
    transform: rotate(180deg);
  }
</style> 