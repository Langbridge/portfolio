<script lang="ts">
	import Button from "../core/button.svelte";




</script>


<div class="flex md:flex-row flex-col">
    <div class="md:w-3/5 min-h-96 md:py-32 md:px-32 px-8 pt-32 pb-16 flex flex-col items-start justify-center gap-2">
        <h1 class="text-2xl font-light">Hi, I am</h1>
        <h1 class="text-6xl font-bold -ml-2 pt-0 -mb-2 text-accent-base">Abi Langbridge</h1>
        <h2 class="text-2xl text-slate-600 font-light">Machine Learning Researcher</h2>
    </div>
    <div class="md:w-2/5 min-h-96 md:bg-accent-base flex items-center p-8 md:p-0">
        <img class="object-contain" src="/portfolio/media/headshot.png" alt="">
    </div>
</div>
<div id="about" class="bg-accent-pastel w-full flex justify-center py-24 md:px-32 px-8">
    <div class="w-full max-w-4xl flex md:gap-8 gap-4 md:flex-row flex-col">
        <div class="flex flex-col justify-start items-center md:items-start gap-4 md:w-1/3">
            <h2 class="text-4xl font-bold text-accent-base">History of Bean</h2>
            <Button type="link" href="/portfolio/">Download CV</Button>
        </div>
        <div class="flex md:w-2/3">
            <p class="font-light pt-2">Etiam sit amet bibendum velit. Vestibulum felis orci, porta vel vehicula et, interdum congue lorem. Cras eu erat consequat, convallis neque vitae, molestie metus. Mauris nec lorem nec dui vestibulum rhoncus ac id lectus. Nulla hendrerit odio eget mauris scelerisque molestie. Pellentesque purus est, eleifend quis dignissim vulputate, condimentum at massa. Suspendisse mi sapien, iaculis a pulvinar quis, volutpat sit amet est. Maecenas suscipit cursus tortor nec facilisis. Morbi vehicula nunc at vehicula ultricies. Duis elementum turpis lectus, ac consequat augue posuere vel. Integer aliquet urna finibus mauris faucibus, vel pellentesque lacus maximus. Mauris accumsan justo sed dui fringilla pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    </div>
</div>