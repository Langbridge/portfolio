<script lang="ts">
    import Icon from "../core/icons.svelte";
    
    type socialIcon = {
        name:string,
        href:string,
        icon:string
    }

    const icons:socialIcon[] = [
        {
            name:"Github",
            href:"https://github.com/Langbridge",
            icon:"github"
        },
        {
            name:"LinkedIn",
            href:"https://www.linkedin.com/in/abi-langbridge",
            icon:"linkedin"
        },
        {
            name:"Email",
            href:"mailto: abi.langbridge@gmail.com",
            icon:"mail"
        },
    ]

</script>

<footer class="w-full bg-zinc-900 text-zinc-400 text-sm min-h-32 flex justify-center">
    <div class="max-w-3xl w-full flex flex-col justify-between self-center gap-4 py-8">
        <p class="text-center">Find me on:</p>
        <div class="flex justify-center items-center gap-4 -mt-2">
            {#each icons as icon}
                <a target="_blank" rel="noreferrer" class="hover:scale-105 duration-150" href={icon.href}>
                    <Icon type={icon.icon} style="fill-white"/>
                </a>
            {/each}
        </div>
        <p class="text-center">Copyright Abi Langbridge 2022</p>
        <p class="text-center">Built with &lt;3 by Chris Vail</p>
    </div>
</footer>