<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  
  let name = '';
  let email = '';
  let subject = '';
  let message = '';
  let isSubmitted = false;
  let isLoading = false;
  
  function handleSubmit() {
    if (!name || !email || !message) return;
    
    isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      isLoading = false;
      isSubmitted = true;
      
      // Reset form
      name = '';
      email = '';
      subject = '';
      message = '';
    }, 1000);
  }
</script>

<svelte:head>
  <title>Contact Us | DeliverTrack</title>
  <meta name="description" content="Get in touch with the DeliverTrack team. We're here to help with any questions about package tracking or delivery issues." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1 py-12 md:py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto mb-12 text-center">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl">Have questions or need assistance? We're here to help.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <div class="card mb-8">
            <h2 class="text-2xl font-bold mb-4">Get In Touch</h2>
            <p class="mb-6">Fill out the form and our team will get back to you as soon as possible.</p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="mr-3 p-2 bg-background rounded-full text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Email</h3>
                  <a href="mailto:support@delivertrack.com" class="hover:text-highlight">support@delivertrack.com</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-3 p-2 bg-background rounded-full text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-3 p-2 bg-background rounded-full text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Address</h3>
                  <p>1234 Delivery Street</p>
                  <p>Logistic City, LC 56789</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">Hours of Operation</h2>
            <ul class="space-y-2">
              <li class="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          {#if isSubmitted}
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-highlight rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Thank You!</h3>
              <p class="mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
              <button
                type="button"
                class="btn"
                on:click={() => isSubmitted = false}
              >
                Send Another Message
              </button>
            </div>
          {:else}
            <h2 class="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form on:submit|preventDefault={handleSubmit} class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  class="input"
                  bind:value={name}
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  class="input"
                  bind:value={email}
                  required
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  class="input"
                  bind:value={subject}
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message"
                  class="input"
                  bind:value={message}
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn w-full" disabled={isLoading}>
                {#if isLoading}
                  <span>Sending...</span>
                {:else}
                  <span>Send Message</span>
                {/if}
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </main>
  
  <Footer />
</div> 