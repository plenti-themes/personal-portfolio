<script>
  import { onMount } from 'svelte';
  export let title, line3, body, link, image;

  onMount(async () => {
    // typing text animation script
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
  });
</script>

<section class="about" id="about">
    <div class="max-width">
        <h2 class="title">{title}</h2>
        <div class="about-content">
            <div class="column left">
                <img src="{image.url}" alt="{image.alt}">
            </div>
            <div class="column right">
                <div class="text">{line3} <span class="typing-2"></span><span class="typed-cursor"></span></div>
                <p>{body}</p>
                <a href="{link.url}">{link.title}</a>
            </div>
        </div>
    </div>
</section>
