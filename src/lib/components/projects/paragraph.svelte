<script lang="ts">

    export let content: string;
    export let target = "_blank"

    $: processedContent = content.replaceAll("<a href", `<a target='${target}' class='underline decoration-accent-base decoration-2 italic' href`)

</script>

<p class="pb-6 leading-relaxed">
    {@html processedContent}    
</p>
<!-- <p class="pb-6 leading-relaxed">{content}</p> -->