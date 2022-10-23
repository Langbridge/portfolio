<script lang="ts">

    export let level: number;
    export let content: string;

</script>

{#if level === 1}
    <h1 class="font-bold text-4xl py-4 text-center capitalize">{content}</h1>
{:else if level === 2}
    <h2 class="font-bold text-2xl pt-4">{content}</h2>
{:else if level === 3}
    <h3 class="font-light text-xl text-gray-500">{content}</h3>
{:else if level === 4}
    <h4 class="font-black text-base">{content}</h4>

{/if}