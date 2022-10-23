<script lang="ts">
	import ProjectCard from "../cards/project-card.svelte";
    import type { Project } from "../../data/core_types"

    let project:[Project] = [
        {
            title:"Respiratory Aware Routing",
            slug:"air-pollution-monitoring",
            featuredImage: {
                src:"",
                alt:""
            },
            tags:[
                "Machine Learning",
                "Optimisation",
                "Sharing Economy"
            ],
            excerpt:"Proin gravida ex quis leo bibendum eleifend. Ut id ornare massa. Etiam placerat arcu lorem, id aliquam enim tincidunt ac. Phasellus id quam in justo mollis dictum ac et arcu. Donec vestibulum, ligula quis mollis aliquam, ante quam bibendum nisi, sit amet ullamcorper dolor ante pretium leo. Morbi vitae pharetra diam, vel porttitor odio. Donec eleifend dolor nec massa porttitor, vel ultricies risus faucibus. Duis non elit nisl. Aenean a aliquet ligula."
        }
    ]


</script>

<div id="projects" class="self-center max-w-4xl w-full py-24">
    <h2 class="font-bold text-4xl text-center text-secondary-base pb-8">Projects</h2>

    {#each project as data}
        <ProjectCard {data}/>
    {/each}

</div>