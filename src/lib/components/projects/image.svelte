<script lang="ts">

    export let src: string;
    export let alt: string;
    export let figCaption: string;


</script>

<figure class="my-4 md:w-4/5 w-full self-center">
    <img {src} {alt}>
    {#if figCaption}
        <figcaption class="text-gray-400 text-sm italic text-center py-4 bottom-line">{figCaption}</figcaption>
    {/if}
</figure>

<style>

    .bottom-line {
        position: relative;
    }

    .bottom-line::after {
        content: "";
        width: 2rem;
        height: 2px;
        position: absolute;
        font-size: 10rem;
        background-color: #e5e7eb;
        left: calc(50% - 1rem);
        bottom: .5rem
        
    }

</style>