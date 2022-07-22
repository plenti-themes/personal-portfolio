<script>
    export let title, items;
    import { onMount } from 'svelte';
    onMount(async () => {
      // owl carousel script
      window.$('.carousel').owlCarousel({
          margin: 20,
          loop: true,
          autoplay: true,
          autoplayTimeOut: 2000,
          autoplayHoverPause: true,
          responsive: {
              0:{
                  items: 1,
                  nav: false
              },
              600:{
                  items: 2,
                  nav: false
              },
              1000:{
                  items: 3,
                  nav: false
              }
          }
      });
    });
</script>
   <!-- teams section start -->
    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">{title}</h2>
            <div class="carousel owl-carousel">
                {#each items as item}
                    <div class="card">
                        <div class="box">
                            <img src="{item.image.url}" alt="{item.image.alt}">
                            <div class="text">{item.name}</div>
                            <p>{item.body}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
