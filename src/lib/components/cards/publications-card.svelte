<script lang="ts">

    import type { Publication } from '../../../lib/data/core_types'

    export let data:Publication;

</script>

<article class="border-b-[1px] last:border-b-0 py-4 border-slate-300">
    <div class="">
        <h2 class="font-bold text-xl">{data.title}</h2>
        <div class="flex gap-4">
            {#each data.authors as tag}
                <p class="flex text-sm capitalize {tag === 'A. Langbridge' ? 'text-black' : 'text-gray-400'}">{tag.replace("-", " ")}</p>
            {/each}
        </div>
        <div class="flex gap-4 text-sm pt-2">
            <a class="text-sm font-bold text-white bg-secondary-dark rounded px-4 py-[1px]" href={data.paper} target="_blank" rel="noreferrer">Paper</a>
            <a class="text-sm font-bold text-white bg-secondary-dark rounded px-4 py-[1px]" href={data.code} target="_blank" rel="noreferrer">Code</a>
        </div>
    </div>
    <div class="">

    </div>
</article>