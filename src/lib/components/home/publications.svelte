<script lang="ts">
    import PublicationsCard from "../cards/publications-card.svelte";
    import type { Publication } from "../../data/core_types"
    import { publications } from "../../data/publications"

</script>

<div id="publications" class="bg-slate-100 w-full flex justify-center py-24">
    <div class="self-center max-w-4xl w-full">
        <h2 class="font-bold text-4xl text-center text-secondary-base pb-8">Publications</h2>

        <div class="flex flex-col">
            {#each $publications as data}
                <PublicationsCard {data}/>
            {/each}
        </div>
    
    </div>
</div>