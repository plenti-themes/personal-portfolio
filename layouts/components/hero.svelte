   <script>
       export let first, middle, last, link;
   </script>
   <!-- hero section start -->
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">{first}</div>
                <div class="text-2">{middle}</div>
                <div class="text-3">{last}<span class="typing"></span></div>
                <a href="{link.url}">{link.title}</a>
                <!-- <img class="home" src="/assets{image.url} "alt=""> -->
            </div>
        </div>
    </section>