<script lang="ts">

    import type { Component } from "../../data/core_types"

    import Heading from "./heading.svelte";
    import Image from "./image.svelte";
    import Note from "./note.svelte";
    import Paragraph from "./paragraph.svelte";
    import Prismjs from "./prismjs.svelte";
    import Quote from "./quote.svelte"; 

    export let components: Component[]

    const componentsMap: Record<string, unknown> = {
        "heading":Heading,
        "paragraph":Paragraph,
        "image":Image,
        "code":Prismjs,
        "note":Note,
        "quote":Quote
    }

</script>

{#each components as component}

<svelte:component this={componentsMap[component.component]} {...component.props}/>

{/each}