<script>
  let y, navActive;

  const toggleMenu = () => {
    navActive = !navActive;
  }

  const scroll = e => {
    document.getElementById(e.target.hash.substring(1)).scrollIntoView();
  }
</script>

<svelte:window bind:scrollY={y}/>

<nav class="navbar {y > 20 ? ' sticky' : ''}">
    <div class="max-width">
        <div class="logo"><a href=".">Portfo<span>lio.</span></a></div>
        <ul class="menu{navActive ? ' active' : ''}">
            <li><a on:click|preventDefault={e => scroll(e)} href="#home" class="menu-btn">Home</a></li>
            <li><a on:click|preventDefault={e => scroll(e)} href="#about" class="menu-btn">About</a></li>
            <li><a on:click|preventDefault={e => scroll(e)} href="#services" class="menu-btn">Services</a></li>
            <li><a on:click|preventDefault={e => scroll(e)} href="#skills" class="menu-btn">Skills</a></li>
            <li><a on:click|preventDefault={e => scroll(e)} href="#teams" class="menu-btn">Teams</a></li>
            <li><a on:click|preventDefault={e => scroll(e)} href="#contact" class="menu-btn">Contact</a></li>
        </ul>
        <div class="menu-btn" on:click={toggleMenu}>
          <i class="fas fa-bars{navActive ? ' active' : ''}"></i>
        </div>
    </div>
</nav>
