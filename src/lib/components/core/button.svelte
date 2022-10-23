<script lang="ts">

    export let type:string = "link"
    export let callback: Function = () => {};
    export let href:string = "";
    export let style = "";
    export let target = "_self";
    export let rel = "noreferrer";

</script>

{#if type === "button"}
    <button on:click={(e) => callback(e)} class="py-2 px-8 bg-accent-base rounded font-bold w-max text-white hover:scale-105 duration-150 {style}"><slot/></button>
{:else}
    <a class="py-2 px-8 bg-accent-base rounded font-bold w-max text-white hover:scale-105 duration-150 {style}" {href} {target} {rel}><slot/></a>
{/if}