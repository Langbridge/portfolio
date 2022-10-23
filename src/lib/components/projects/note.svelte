<script lang="ts">

    export let icon:string|undefined = undefined;
    export let iconAlt:string|undefined = undefined;
    export let content:string;

</script>

<aside class="mb-8 mt-2 px-4 py-4 border-l-4 border-accent-base flex items-center gap-2 shadow-lg bg-gray-100 rounded">
    {#if icon}
        <img class="h-8 w-8" src={icon} alt={iconAlt}>
    {/if}
    <p class="px-2">{content}</p>
</aside>