<script lang="ts">
	let trackingNumber = '';
	let isLoading = false;

	function handleSubmit() {
		if (!trackingNumber) return;

		isLoading = true;
		// Simulate API call
		setTimeout(() => {
			isLoading = false;
			window.location.href = `/track/${trackingNumber}`;
		}, 1000);
	}
</script>

<div class="card mx-auto max-w-2xl bg-black text-white">
	<p class="text-background mb-6">
		Enter your tracking number to get real-time updates on your delivery.
	</p>

	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<div>
			<div class="flex gap-2">
				<div class="relative flex-1">
					<input
						id="tracking"
						type="text"
						placeholder=" "
						class="input peer rounded-sm bg-white text-black transition-all duration-300"
						bind:value={trackingNumber}
						required
						autocomplete="off"
					/>
					<label
						for="tracking"
						class="bg-background absolute left-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-xs font-medium text-black transition-all duration-300 peer-placeholder-shown:top-1/2 peer-focus:opacity-0 peer-focus:blur-xl"
						>NUMBER</label
					>
				</div>
				<button
					type="submit"
					class="btn bg-selection text-black hover:-translate-y-1 transition-transform duration-200"
					on:click={handleSubmit}
					disabled={isLoading}
				>
					{#if isLoading}
						<span>Searching...</span>
					{:else}
						<span>Track Package</span>
					{/if}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-1 inline-block h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	</form>
</div>
