<script lang="ts">
    import type { Project } from "$lib/data/core_types";
    import { fly } from "svelte/transition";

    export let data: Project;

    const cardBaseStyle = "rounded-xl shadow-md border border-slate-200 bg-white hover:shadow-lg hover:scale-[1.02] duration-200";
    const contentStyle = "p-6 flex flex-col justify-between";
</script>

<article class="grid md:grid-cols-6 grid-cols-1 mx-8 md:mx-0 {cardBaseStyle}" in:fly={{ x: -150, delay: 200 }} out:fly={{ x: 150 }}>
    <!-- Image (left column on desktop, top on mobile) -->
    <div class="md:col-span-2 col-span-1 flex items-center">
        <img
            class="w-full h-auto object-cover aspect-video rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            src={data.featuredImage.src}
            alt={data.featuredImage.alt}
        />
    </div>

    <!-- Content -->
    <div class="md:col-span-4 col-span-1 {contentStyle}">
        <div>
            <h3 class="text-2xl font-bold text-slate-800">{data.title}</h3>
            <div class="flex flex-wrap gap-x-3 mt-1">
                {#each data.tags as tag}
                    <p class="text-gray-500 text-sm capitalize">{tag.replace("-", " ")}</p>
                {/each}
            </div>
            <p class="mt-3 text-slate-700 leading-relaxed">{data.excerpt}</p>
        </div>

        {#if data.links}
            <div class="flex gap-3 mt-4">
                {#each data.links as link}
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        class="text-sm font-medium px-4 py-1 rounded-md transition
                               {link.type === 'primary'
                                   ? 'bg-secondary-dark text-white hover:opacity-90'
                                   : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}"
                    >
                        {link.label}
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</article>