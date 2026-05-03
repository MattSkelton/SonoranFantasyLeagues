<section id="about" class="py-20 bg-gradient-to-b from-desert-dark to-desert-dark/95">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section header -->
    <div class="text-center mb-16">
      <span class="text-desert-gold text-sm font-semibold tracking-widest uppercase">About Us</span>
      <h2 class="mt-2 text-4xl font-bold text-white" style="font-family: Georgia, serif;">
        Born in the Valley of the Sun
      </h2>
      <div class="mt-4 w-16 h-1 bg-gradient-to-r from-desert-red to-desert-gold mx-auto rounded-full"></div>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: text content -->
      <div>
        <p class="text-gray-300 text-lg leading-relaxed mb-6">
          Sonoran Fantasy Leagues was founded by passionate Arizona sports fans who wanted a better, 
          more community-focused fantasy sports experience. Named after the legendary Sonoran Desert 
          that defines our state, we bring together competitors from across the Valley.
        </p>
        <p class="text-gray-400 leading-relaxed mb-8">
          Whether you're a die-hard Cardinals fan, bleeding teal for the Coyotes, or rooting on the 
          D-Backs from Chase Field, there's a place for you here. Our leagues run year-round, covering 
          NFL, MLB, and NHL seasons with cash prizes, trophies, and serious bragging rights on the line.
        </p>

        <!-- Stats grid -->
        <div class="grid grid-cols-3 gap-6">
          <div class="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div class="text-3xl font-bold text-desert-gold">200+</div>
            <div class="text-xs text-gray-400 mt-1">Active Members</div>
          </div>
          <div class="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div class="text-3xl font-bold text-desert-red">12</div>
            <div class="text-xs text-gray-400 mt-1">Active Leagues</div>
          </div>
          <div class="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div class="text-3xl font-bold text-desert-sand">5+</div>
            <div class="text-xs text-gray-400 mt-1">Years Running</div>
          </div>
        </div>
      </div>

      <!-- Right: feature cards -->
      <div class="grid grid-cols-2 gap-4">
        {#each features as feature}
          <div class="p-5 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-desert-gold/30 transition-colors group">
            <div class="text-3xl mb-3">{feature.icon}</div>
            <h3 class="text-white font-semibold mb-1 group-hover:text-desert-gold transition-colors">{feature.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  const features = [
    { icon: '🏆', title: 'Cash Prizes', desc: 'Real money on the line every season with transparent prize pools.' },
    { icon: '🌵', title: 'AZ Community', desc: 'Connect with passionate sports fans right here in the Valley.' },
    { icon: '📊', title: 'Live Scoring', desc: 'Real-time stats and standings updated throughout game day.' },
    { icon: '🤝', title: 'Fair Play', desc: 'Commissioner-run leagues with clear rules and dispute resolution.' },
  ];
</script>
