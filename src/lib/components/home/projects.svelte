<script lang="ts">
	import ProjectCard from "../cards/project-card.svelte";
    import type { Project } from "../../data/core_types"
    import { projects } from "../../data/projects"


</script>

<div id="projects" class="self-center max-w-4xl w-full py-24">
    <h2 class="font-bold text-4xl text-center text-secondary-base pb-8">Projects</h2>

    <div class="flex flex-col gap-8">
        {#each $projects as data}
            <ProjectCard {data}/>
        {/each}
    </div>

</div>