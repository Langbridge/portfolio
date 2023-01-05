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
        <h2 class="text-2xl text-slate-600 font-light">Machine Learning Researcher</h2>
        <div class="flex justify-center items-center gap-6 mt-6 ">
            {#each icons as icon}
                <a target="_blank" rel="noreferrer" class="hover:scale-105 duration-150" href={icon.href}>
                    <Icon type={icon.icon} style="fill-slate-300"/>
                </a>
            {/each}
        </div>
    </div>
    <div class="md:w-2/5 min-h-96 md:bg-accent-base flex items-center p-8 md:p-0">
        <!-- <img class="object-contain" src="/media/headshot.png" alt=""> -->
        <img class="object-contain" src="/media/dark_headshot.jpg" alt="">
    </div>
</div>
<div id="about" class="bg-accent-pastel w-full flex justify-center py-24 md:px-32 px-8">
    <div class="w-full max-w-4xl flex md:gap-8 gap-4 md:flex-row flex-col">
        <div class="flex flex-col justify-start items-center md:items-start gap-4 md:w-1/3">
            <h2 class="text-4xl font-bold text-black">About Me</h2>
            <Button style="mt-6 bg-accent-base" type="link" href="/documents/ahl_mlcv.pdf">Download CV</Button>
        </div>
        <div class="flex md:w-2/3 md:mt-0 mt-4">
            <p class="font-light pt-2">I am a driven and excited machine learning scientist who has worked extensively with big spatio-temporal data. My current work at Imperial College London in collaboration with IBM Research Dublin involves designing scalable algorithms for leveraging causal discovery techniques to improve the accuracy and robustness of forecasts in complex systems.
            <br><br>
            My masters' project addressed leveraging urban big data to demystify the health impacts of air pollution, and find ways to mitigate them while commuting actively. I was inspired to work in this area by the general lack of access to data amongst the individuals impacted by air pollution, and the overly-scientific discourse surrounding air pollution  which leaves individuals in the dark about the risks they are exposed to. This work culminated in a collaboration with Westminster City Council, working as an advocate for wider accessibility of urban big data for citizens.
            <br><br>
            I have strong communication and collaboration skills, with experience working directly with clients, writing academic publications and giving presentations to varied (technical and layperson) audiences. Additionally, I always strive to find context and a deep understanding of my work and relate this to client or project needs.</p>
        </div>
    </div>
</div>