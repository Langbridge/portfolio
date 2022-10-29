<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/core/button.svelte";
</script>

<div class="h-[100vh] flex flex-col items-center justify-center gap-2 self-center max-w-4xl">
    <h1 class="text-2xl text-slate-600 font-light">Looks like we encountered an error</h1>
    <h1 class="text-6xl font-bold -ml-2 pt-0 text-accent-base">{$page.status}: {$page.error.message}</h1>
    <h2 class="text-2xl text-slate-600 font-light py-2">Are any of us really surprised?</h2>
    <Button href="/portfolio/" style="my-8">Go Home</Button>
</div>