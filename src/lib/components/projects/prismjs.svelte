<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" type="text/css">  
  <link rel="stylesheet" href="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism_okaidia.css">    
</svelte:head>

<script lang="ts">

    // Eddie Florea - viper6277@gmail.com wrote all this and I just lightly stole it

  import { onMount } from 'svelte';
  
  export let language: string;
  export let code: string;
  export let caption: string|undefined = undefined;

  onMount(() => {

   let script = document.createElement('script');
   script.src = "https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js"
   document.head.append(script);

   script.onload = function() {

     let langJS = false;
     let lang_script;
     let lang_module;

     // This switch statement, evaluates what language is being used, if one of a key language is being used, it will
     // load the proper Prisim support tool, like Python requires "prism-python.js" to modify the raw code so that
     // Prisim can render it properly.
     switch (language) {

       case "json":
         lang_module = "https://prismjs.com/components/prism-json.js"
         langJS = true;
         break    

       case "python":
         lang_module = "https://prismjs.com/components/prism-python.js"
         langJS = true;
         break                

       case "rust":
         lang_module = "https://prismjs.com/components/prism-rust.js"
         langJS = true;
         break   

       case "r":
         lang_module = "https://prismjs.com/components/prism-r.js"
         langJS = true;
         break   

       case "sql":
         lang_module = "https://prismjs.com/components/prism-sql.js"
         langJS = true;
         break           
     }

     if (langJS == true) {

        lang_script = document.createElement('script');
        lang_script.src = lang_module
        lang_script.async = true
        document.head.append(lang_script);

        lang_script.onload = () => {
          Prism.highlightAll();
         }

     }
     else {
       Prism.highlightAll();
     }

   };

  });

</script>

<div class="w3-container w-full self-center py-2">
  <pre class="custom-scroll"><code class="language-{language}">{code}</code></pre>
    {#if caption}
        <div class="text-gray-400 text-sm italic text-center pb-4 bottom-line w-full">{caption}</div>
    {/if}
</div>


<style>

    .bottom-line {
        position: relative;
    }

    .bottom-line::after {
        content: "";
        width: 2rem;
        height: 2px;
        position: absolute;
        font-size: 10rem;
        background-color: #e5e7eb;
        left: calc(50% - 1rem);
        bottom: .5rem;
    }

    .custom-scroll::-webkit-scrollbar {
        height: 5px;
    }

    .custom-scroll::-webkit-scrollbar-thumb {
        background: #eb2337;
    }

    .custom-scroll::-webkit-scrollbar-track {
        background: #272822;
    }

</style>