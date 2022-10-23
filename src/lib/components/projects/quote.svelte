<script lang="ts">

    export let quote: string;
    export let author: string;
    export let cite: string|undefined;

</script>

<blockquote class="mb-16 mt-8 py-8 px-16 text-center border-y border-accent-base flex flex-col items-center gap-4" {cite}>
    <p class="text-xl font-light">"{quote}"</p>
    <p class="text-gray-500 font-light italic">- {author}</p>
</blockquote>