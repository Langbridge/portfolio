<script lang="ts">
    
    import type { Project } from "$lib/data/core_types";
    import { fly } from 'svelte/transition'

    export let data: Project;
    
    const cardBaseStyle = "rounded-lg shadow-xl overflow-hidden hover:scale-105 duration-150"
    const contentStyle = "px-8 pb-8 text-sm"

</script>



<article class="grid grid-cols-6 mx-8 md:mx-0 {cardBaseStyle}" in:fly="{{x:-200, delay:400}}" out:fly="{{x:200}}">
    <a class="md:col-span-2 col-span-6" href="/portfolio/{data.slug}">
        <img class="md:w-full md:h-full aspect-16/9 object-cover" src={data.featuredImage.src} alt={data.featuredImage.alt}>
    </a>
    <a href="/portfolio/{data.slug}" class="flex flex-col justify-center md:col-span-4 col-span-6 md:mt-0 pt-4 {contentStyle}">
        <div class="mb-4">
            <h3 class="md:text-3xl text-2xl font-black capitalize">{data.title}</h3>
            <div class="flex flex-wrap gap-x-4 mb-2">
                {#each data.tags as tag}
                    <p class="flex text-gray-400 text-sm capitalize">{tag.replace("-", " ")}</p>
                {/each}
            </div>
            <p class="">{data.excerpt}</p>
        </div>
    </a>
</article>