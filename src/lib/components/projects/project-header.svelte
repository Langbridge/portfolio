<script lang="ts">
	import type { Project } from "$lib/data/core_types";
	import Heading from "./heading.svelte";



    export let project:Project;

</script>

<div class="flex flex-col items-center pb-8 gap-2">
    <h1 class="font-bold text-4xl">{project.title}</h1>
    <div class="flex flex-wrap gap-x-4 mb-4">
        {#each project.tags as tag}
            <p class="flex text-gray-400 text-sm capitalize">{tag.replace("-", " ")}</p>
        {/each}
    </div>
    <img class="w-full max-w-3xl aspect-16/9 object-cover" src={project.featuredImage.src} alt={project.featuredImage.alt}>
</div>