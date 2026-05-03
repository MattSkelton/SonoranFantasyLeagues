<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Sports from '$lib/components/Sports.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Sonoran Fantasy Leagues</title>
  <meta name="description" content="Arizona's premier fantasy sports league for football, baseball, and hockey." />
</svelte:head>

<Nav />
<main>
  <Hero />
  <About />
  <Sports />
  <HowItWorks />
  <Contact />
</main>
<Footer />
