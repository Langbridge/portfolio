
<script lang="ts">

    import Footer from '../lib/components/layout/footer.svelte';
    import Nav from '../lib/components/layout/nav.svelte';
    import Pagetransition from '../lib/components/layout/page-transition.svelte';

    import "../app.css";
    
</script>


<Nav/>
<Pagetransition>
    <slot />
</Pagetransition>
<Footer />