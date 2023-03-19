<script>
  import { onMount } from 'svelte';
  import Footer from './footer.svelte';
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Login from './login.svelte';
 
  export let content, layout, allLayouts, env, user;

  let hash;
  onMount(async () => {
    hash = window.location.hash;
  });

  let y;
</script>

<svelte:window bind:scrollY={y}/>

<html lang="en">
  <Head title={content.fields?.meta?.title} {env} />
  <body>
    {#if user && $user.isAuthenticated}
      <svelte:component this={$user.menu} {user} bind:content={content} />
    {/if}
    <Login bind:hash {user} />
    <main>
      <div class="scroll-up-btn {y > 500 ? ' show' : ''}" on:click={() => window.scrollTo(0,0)}>
        <i class="fas fa-angle-up"></i>
      </div>
      <header class="navigation">
        <Nav /> 
      </header>
      <svelte:component this={layout} {...content.fields} {allLayouts} {content} />
      <Footer />
    </main>
  </body>
</html>
