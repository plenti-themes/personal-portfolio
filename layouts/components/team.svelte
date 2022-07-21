<script>
    export let title, items;
</script>
   <!-- teams section start -->
    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">{title}</h2>
            <div class="carousel owl-carousel">
                {#each items as item}
                    <div class="card">
                        <div class="box">
                            <img src="/assets{item.image.url}" alt="{item.image.alt}">
                            <div class="text">{item.name}</div>
                            <p>{item.body}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>