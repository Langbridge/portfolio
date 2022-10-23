<script lang="ts">

    import Content from "$lib/components/projects/content.svelte";
	import ProjectHeader from "$lib/components/projects/project-header.svelte";
	import type { Component, Project } from "$lib/data/core_types";

    export let data: any;

    // console.log(data)

</script>


<div class="w-full max-w-4xl self-center py-24 px-4 md:px-16">
    <ProjectHeader project={data.project}/>
    <Content components={data.projectContent} />
</div>