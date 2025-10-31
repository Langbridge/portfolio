<script lang="ts">
	import Button from "../core/button.svelte";
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
            href:"mailto:abi.langbridge@gmail.com",
            icon:"mail"
        }
    ]

</script>


<div class="flex md:flex-row flex-col">
    <div class="md:w-3/5 min-h-96 md:py-32 md:px-32 px-8 pt-32 pb-16 flex flex-col items-start justify-center gap-2">
        <h1 class="text-2xl font-light">Hi, I am</h1>
        <h1 class="text-6xl font-bold -ml-2 pt-0 -mb-2 text-accent-base">Abi Langbridge</h1>
        <h2 class="text-2xl text-slate-600 font-light">Researcher · PhD Student · SCUBA Instructor</h2>
        <div class="flex justify-center items-center gap-6 mt-6 ">
            {#each icons as icon}
                <a target="_blank" rel="noreferrer" class="hover:scale-105 duration-150" href={icon.href}>
                    <Icon type={icon.icon} style="fill-slate-300"/>
                </a>
            {/each}
        </div>
    </div>
    <div class="md:w-2/5 min-h-96 md:bg-accent-base flex items-center p-8 md:p-0">
        <img class="object-contain" src="/media/tetons.jpg" alt="">
    </div>
</div>
<div id="about" class="bg-accent-pastel w-full flex justify-center py-24 md:px-32 px-8">
    <div class="w-full max-w-4xl flex md:gap-8 gap-4 md:flex-row flex-col">
        <div class="flex flex-col justify-start items-center md:items-start gap-4 md:w-1/3">
            <h2 class="text-4xl font-bold text-black">About Me</h2>
            <Button style="mt-6 bg-accent-base" type="link" href="/documents/abi-langbridge.pdf">Download CV</Button>
        </div>
        <div class="flex md:w-2/3 md:mt-0 mt-4">
            <p class="font-light pt-2">I’m a PhD researcher at Imperial College London, co-supervised by IBM Research, where I develop and apply novel machine learning and optimal transport methods across a range of domains. My work focuses on connecting rigorous research with practical impact through collaborations, international projects, and industrial partnerships.
            <br><br>
            As I approach the final year of my PhD, I’m looking for research scientist roles that will allow me to broaden my experience across computer science and machine learning, and to continue building methods that translate effectively between theory and application.</p>
        </div>
    </div>
</div>