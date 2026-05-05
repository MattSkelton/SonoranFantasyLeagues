<script lang="ts">
  import Icon from "@iconify/svelte";
  const steps = [
    {
      number: "01",
      title: "Fill Out the Form",
      desc: "Complete the interest form below with your contact info and which sport(s) you want to play.",
      icon: "mdi:clipboard-list-outline",
    },
    {
      number: "02",
      title: "Get Placed in a League",
      desc: "We'll match you with an open league spot based on your experience and format preferences.",
      icon: "mdi:target",
    },
    {
      number: "03",
      title: "Draft Your Team",
      desc: "Join our live online draft or submit an auto-pick list. Build your championship roster.",
      icon: "mdi:account-group-outline",
    },
    {
      number: "04",
      title: "Compete & Win",
      desc: "Set weekly lineups, work the waiver wire, make trades, and climb to the top of the standings.",
      icon: "mdi:trophy-outline",
    },
  ];
</script>

<section
  id="how-it-works"
  class="py-20 bg-gradient-to-b from-desert-bg to-desert-surface/50"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span
        class="text-desert-gold text-sm font-semibold tracking-widest uppercase"
        >Getting Started</span
      >
      <h2
        class="mt-2 text-4xl font-bold text-desert-brown"
        style="font-family: Georgia, serif;"
      >
        How It Works
      </h2>
      <div
        class="mt-4 w-16 h-1 bg-gradient-to-r from-desert-red to-desert-gold mx-auto rounded-full"
      ></div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each steps as step, i}
        <div
          class="relative text-center p-6 bg-desert-surface/70 border border-desert-brown/10 rounded-2xl hover:border-desert-gold/40 transition-colors group"
        >
          <!-- Connector line (all but last) -->
          {#if i < steps.length - 1}
            <div
              class="hidden lg:block absolute top-1/2 right-0 w-6 h-px bg-desert-gold/30 translate-x-full -translate-y-1/2"
            ></div>
          {/if}

          <div
            class="w-12 h-12 rounded-xl bg-desert-red/10 border border-desert-red/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-desert-red/20 transition-colors"
          >
            <Icon
              icon={step.icon}
              class="text-desert-red"
              width="24"
              height="24"
            />
          </div>
          <div
            class="text-5xl font-bold text-desert-brown/8 mb-2 group-hover:text-desert-red/15 transition-colors"
            style="font-family: Georgia, serif;"
          >
            {step.number}
          </div>
          <h3 class="text-desert-brown font-semibold mb-2">{step.title}</h3>
          <p class="text-desert-brown/60 text-sm leading-relaxed">
            {step.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
