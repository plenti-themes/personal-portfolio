<script>
  import Footer from './footer.svelte';
  import Head from './head.svelte';
  import Nav from './nav.svelte';
 
  export let content, layout, allLayouts;
  let y;
  
</script>
<svelte:window bind:scrollY={y}/>
<html lang="en">
<Head title={content.filename} />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<body>
  <div class="scroll-up-btn {y > 500 ? ' show' : ''}">
    <i class="fas fa-angle-up"></i>
</div>
  <header class="navigation">
    <Nav /> 
  </header>
  <svelte:component this={layout} {...content.fields} {allLayouts} {content} />
  <Footer />
</body>
</html>
