<!-- PageTransition.svelte -->
<script lang="ts">
    import { fly } from "svelte/transition";
    import { page } from '$app/stores';
    
    $: refresh = $page.url.pathname;

</script>
  
{#key refresh}
    <div class="min-h-[100vh] overflow-hidden flex flex-col" in:fly={{  x:-5, duration: 500, delay: 500 }}
            out:fly={{ x: 5, duration: 500             }}>
        <slot />
    </div>
{/key}