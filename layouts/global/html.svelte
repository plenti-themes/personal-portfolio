<script>
  import Footer from './footer.svelte';
  import Head from './head.svelte';
  import Nav from './nav.svelte';
 
  export let content, layout, allLayouts, env;
  let y;
</script>

<svelte:window bind:scrollY={y}/>

<html lang="en">
  <Head title={content.filename} {env} />
  <body>
    <div class="scroll-up-btn {y > 500 ? ' show' : ''}" on:click={() => window.scrollTo(0,0)}>
      <i class="fas fa-angle-up"></i>
    </div>
    <header class="navigation">
      <Nav /> 
    </header>
    <svelte:component this={layout} {...content.fields} {allLayouts} {content} />
    <Footer />
  </body>
</html>
