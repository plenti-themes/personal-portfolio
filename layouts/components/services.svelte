<script>
    export let title, items;
</script>

<section class="services" id="services">
    <div class="max-width">
        <h2 class="title">{title}</h2>
        <div class="serv-content">
            {#each items as item}
                <div class="card">
                    <div class="box">
                        <i class="{item.icon}"></i>
                        <div class="text">{item.title}</div>
                        <p>{item.body}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>