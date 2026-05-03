<script lang="ts">
  import { onMount } from 'svelte';
  let scrolled = $state(false);
  let menuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Sports', href: '#sports' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Join Us', href: '#contact' },
  ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-desert-dark/95 backdrop-blur-sm shadow-lg shadow-desert-red/10' : 'bg-transparent'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-desert-red to-desert-maroon flex items-center justify-center shadow-lg group-hover:shadow-desert-red/40 transition-shadow">
          <span class="text-white font-bold text-sm">SFL</span>
        </div>
        <span class="text-white font-bold text-lg hidden sm:block">Sonoran <span class="text-desert-gold">Fantasy</span> Leagues</span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-6">
        {#each navLinks as link}
          <a href={link.href}
             class="text-gray-300 hover:text-desert-gold transition-colors text-sm font-medium {link.label === 'Join Us' ? 'bg-desert-red hover:bg-desert-maroon text-white px-4 py-2 rounded-full' : ''}">
            {link.label}
          </a>
        {/each}
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden text-white p-2" onclick={() => menuOpen = !menuOpen} aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if menuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    {#if menuOpen}
      <div class="md:hidden pb-4 border-t border-white/10 mt-2 pt-2">
        {#each navLinks as link}
          <a href={link.href}
             onclick={() => menuOpen = false}
             class="block py-2 text-gray-300 hover:text-desert-gold transition-colors text-sm font-medium">
            {link.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</nav>
