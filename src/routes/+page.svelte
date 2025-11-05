<script lang="ts">
	import { runTest } from './test.remote';
</script>

<h1>Landing Page</h1>

<svelte:boundary>
	{#snippet pending()}
		<p>Pending</p>
	{/snippet}
	{#snippet failed(error, reset)}
		<p class="text-red-600">Failed to runTest</p>
		<p class="text-red-600">Error message: {error}</p>
		<button onclick={reset}>Try Again</button>
	{/snippet}

	<form {...runTest}><button type="submit">runTest</button></form>
</svelte:boundary>
