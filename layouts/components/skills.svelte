<script>
    export let title, line3, body, link, skills;
</script>

<section class="skills" id="skills">
    <div class="max-width">
        <h2 class="title">{title}</h2>
        <div class="skills-content">
            <div class="column left">
                <div class="text">{line3}</div>
                <p>{body}</p>
                <a href="{link.url}">{link.title}</a>
            </div>
            <div class="column right">
                {#each skills.bars as bar}
                    <div class="bars">
                        <div class="info">
                            <span>{bar.info}</span>
                            <span>{bar.percent}</span>
                        </div>
                        <div class="line">
                          <div class="percent" style="width: {bar.percent};"></div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
  .percent {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: crimson;
  }
</style>
