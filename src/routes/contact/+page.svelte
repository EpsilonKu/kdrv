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
  <title>Contact Us | kdrv UI Library</title>
  <meta name="description" content="Get in touch with the kdrv team. We're here to help with questions about our UI components, implementation, or contributions." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  
  <main class="flex-1 py-12 md:py-24 bg-bianca">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto mb-12 text-center">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl">Have questions about kdrv or need help with implementation? We're here to help.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <div class="card mb-8">
            <h2 class="text-2xl font-bold mb-4">Get In Touch</h2>
            <p class="mb-6">Whether you have questions about components, need implementation help, or want to contribute, we'd love to hear from you.</p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="mr-3 p-2 bg-bianca rounded-full text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Email</h3>
                  <a href="mailto:hello@kdrv.dev" class="hover:text-highlight">hello@kdrv.dev</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-3 p-2 bg-bianca rounded-full text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">GitHub</h3>
                  <a href="https://github.com/kdrv-team/kdrv" class="hover:text-highlight">github.com/kdrv-team/kdrv</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-3 p-2 bg-bianca rounded-full text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Documentation</h3>
                  <a href="/docs" class="hover:text-highlight">View our comprehensive docs</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">Support Channels</h2>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <div>
                  <strong>Bug Reports:</strong> Use our GitHub issues
                </div>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <div>
                  <strong>Feature Requests:</strong> Submit via GitHub discussions
                </div>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <div>
                  <strong>Implementation Help:</strong> Use the contact form
                </div>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-highlight">•</span>
                <div>
                  <strong>Contributions:</strong> Check our contributing guide
                </div>
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