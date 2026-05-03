<script lang="ts">
  const sports = [
    {
      name: 'Fantasy Football',
      emoji: '🏈',
      season: 'Sept – Jan',
      color: 'desert-red',
      borderColor: 'border-desert-red/40',
      bgColor: 'bg-desert-red/10',
      glowColor: 'hover:shadow-desert-red/20',
      accentColor: 'text-desert-red',
      description: 'Our flagship league! Draft NFL players and compete weekly in head-to-head matchups. Multiple division formats available including standard, PPR, and dynasty leagues.',
      features: ['Snake & Auction Drafts', 'PPR & Standard Formats', 'Dynasty Leagues', 'Weekly Matchups', 'Playoff Bracket'],
      prize: '$500+ Prize Pool',
      teams: '10–14 Teams',
    },
    {
      name: 'Fantasy Baseball',
      emoji: '⚾',
      season: 'Mar – Oct',
      color: 'desert-blue',
      borderColor: 'border-desert-blue/40',
      bgColor: 'bg-desert-blue/10',
      glowColor: 'hover:shadow-desert-blue/20',
      accentColor: 'text-blue-400',
      description: 'The full MLB season with rotisserie and head-to-head formats. Track batting averages, home runs, ERA, and more across the entire baseball calendar.',
      features: ['Rotisserie & H2H', 'Daily Lineup Changes', 'Waiver Wire', 'Trade Analyzer', 'Keeper Leagues'],
      prize: '$300+ Prize Pool',
      teams: '10–12 Teams',
    },
    {
      name: 'Fantasy Hockey',
      emoji: '🏒',
      season: 'Oct – Jun',
      color: 'desert-green',
      borderColor: 'border-desert-green/40',
      bgColor: 'bg-desert-green/10',
      glowColor: 'hover:shadow-desert-green/20',
      accentColor: 'text-green-400',
      description: 'Full NHL season leagues tracking goals, assists, plus/minus, goalie wins, and save percentages. Perfect for Arizona hockey fans and NHL diehards.',
      features: ['Daily & Weekly Lineups', 'Goalie Streaming', 'Playoff Pool Add-on', 'Trade Deadline Events', 'Injury Alerts'],
      prize: '$200+ Prize Pool',
      teams: '8–12 Teams',
    },
  ];
</script>

<section id="sports" class="py-20 bg-gradient-to-b from-desert-dark/95 via-desert-dark to-desert-maroon/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="text-desert-gold text-sm font-semibold tracking-widest uppercase">Our Leagues</span>
      <h2 class="mt-2 text-4xl font-bold text-white" style="font-family: Georgia, serif;">
        Three Sports, One Community
      </h2>
      <div class="mt-4 w-16 h-1 bg-gradient-to-r from-desert-red to-desert-gold mx-auto rounded-full"></div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      {#each sports as sport}
        <div class="relative group flex flex-col p-6 bg-gradient-to-b from-white/5 to-transparent border {sport.borderColor} rounded-2xl hover:shadow-xl {sport.glowColor} transition-all duration-300 hover:-translate-y-1">
          <!-- Sport icon & season badge -->
          <div class="flex items-start justify-between mb-4">
            <div class="text-5xl">{sport.emoji}</div>
            <span class="text-xs font-medium px-3 py-1 rounded-full {sport.bgColor} {sport.accentColor} border {sport.borderColor}">
              {sport.season}
            </span>
          </div>

          <h3 class="text-2xl font-bold text-white mb-3" style="font-family: Georgia, serif;">{sport.name}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-5">{sport.description}</p>

          <!-- Features list -->
          <ul class="space-y-2 mb-6 flex-1">
            {#each sport.features as feature}
              <li class="flex items-center gap-2 text-sm text-gray-300">
                <svg class="w-4 h-4 {sport.accentColor} flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>

          <!-- Footer meta -->
          <div class="flex items-center justify-between pt-4 border-t border-white/10">
            <div>
              <div class="text-desert-gold font-bold text-sm">{sport.prize}</div>
              <div class="text-gray-500 text-xs">{sport.teams}</div>
            </div>
            <a href="#contact"
               class="text-sm font-semibold px-4 py-2 rounded-full {sport.bgColor} {sport.accentColor} border {sport.borderColor} hover:bg-white/10 transition-colors">
              Join →
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
