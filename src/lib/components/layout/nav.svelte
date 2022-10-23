<script lang="ts">
    
    
    import { page } from '$app/stores';
    import Hamburger from './hamburger.svelte';
    import { slide } from 'svelte/transition'

    $: key = $page.url.pathname.split("/");

    interface PageLinks {
        name:string,
        url:string,
        dropdown: Array<PageLinks>
    }

    let pages:Array<PageLinks> = [
        {
            name:"About Me",
            url:"/about",
            dropdown:[]
        },
        // {
        //     name: "Posts",
        //     url:"/#posts",
        //     dropdown:[]
        // }, 
        {
            name: "Projects",
            url:"/projects",
            dropdown:[]
        },
        {
            name:"Publications",
            url:"/playground",
            dropdown:[]
        }
    ]

    let currentY:number;
    let previousY: number;
    let clientHeight: number;

    const getDirection = (y:number) => {
        const direction = !previousY || previousY < y ? "down" : "up"
        previousY = y
        return direction
    }

    let open = false
    $: scrollDir = getDirection(currentY)
    $: offscreen = (scrollDir === "down" && currentY > clientHeight * 5) && !(open)
    
    

</script>

<svelte:window bind:scrollY={currentY}/>

<header class="sticky -top-1 ease-out duration-300 translate-y-0 z-50" class:motion-safe:-translate-y-full={offscreen} bind:clientHeight>
    <div class="absolute w-full top-0 flex flex-col justify-center py-4 bg-slate-100 bg-opacity-70 backdrop-blur-md backdrop-saturate-150 z-50">
        <div class="flex justify-between max-w-3xl w-full self-center">
            <div class="font-bold text-xl">
                <a href="/">Abi Langbridge</a>
            </div>
            
            <Hamburger {open} onClick={() => open = !open} width="30" />
            
            <nav class="hidden md:block">
                <ul class="flex gap-8">
                    {#each pages as page}
                    <li>
                        <a class="{key[1] === page.url.split('/')[1] ? 'font-bold text-slate-600' : ''}" href={page.url}>{page.name}</a>
                        <!-- <p class="">{key[1] === page.url.split("/")[1]}</p> -->

                    </li>
                    {/each}
                </ul>
            </nav>
        </div>
        
        {#if open}
            <!-- bg-slate-100 bg-opacity-70 backdrop-blur-md backdrop-saturate-150 z-50 -->
            <nav class="flex w-full relative self-center h-[100vh] top-full" transition:slide>
                <ul class="flex flex-col items-center font-bold my-8 gap-8 w-full ">
                    {#each pages as page}
                    <li>
                        <a href={page.url} class="border-b-2 border-accent-base" on:click={() => open = false} >{page.name}</a>
                    </li>
                    {/each}
                </ul>
            </nav>
        {/if}
    </div>
    
</header>