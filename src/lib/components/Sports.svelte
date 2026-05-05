<script lang="ts">
  const sports = [
    {
      name: "Fantasy Football",
      season: "Sept – Jan",
      color: "desert-red",
      borderColor: "border-desert-red/30",
      bgColor: "bg-desert-red/10",
      glowColor: "hover:shadow-desert-red/15",
      accentColor: "text-desert-red",
      description:
        "Our flagship league! Draft NFL players and compete weekly in head-to-head matchups. Multiple division formats available including standard, PPR, and dynasty leagues.",
      features: [
        "Snake & Auction Drafts",
        "PPR & Standard Formats",
        "Dynasty Leagues",
        "Weekly Matchups",
        "Playoff Bracket",
      ],
      prize: "$500+ Prize Pool",
      teams: "10–14 Teams",
    },
    {
      name: "Fantasy Baseball",
      season: "Mar – Oct",
      color: "desert-blue",
      borderColor: "border-desert-blue/30",
      bgColor: "bg-desert-blue/10",
      glowColor: "hover:shadow-desert-blue/15",
      accentColor: "text-desert-blue",
      description:
        "The full MLB season with rotisserie and head-to-head formats. Track batting averages, home runs, ERA, and more across the entire baseball calendar.",
      features: [
        "Rotisserie & H2H",
        "Daily Lineup Changes",
        "Waiver Wire",
        "Trade Analyzer",
        "Keeper Leagues",
      ],
      prize: "$300+ Prize Pool",
      teams: "10–12 Teams",
    },
    {
      name: "Fantasy Hockey",
      season: "Oct – Jun",
      color: "desert-sage",
      borderColor: "border-desert-sage/30",
      bgColor: "bg-desert-sage/10",
      glowColor: "hover:shadow-desert-sage/15",
      accentColor: "text-desert-sage",
      description:
        "Full NHL season leagues tracking goals, assists, plus/minus, goalie wins, and save percentages. Perfect for Arizona hockey fans and NHL diehards.",
      features: [
        "Daily & Weekly Lineups",
        "Goalie Streaming",
        "Playoff Pool Add-on",
        "Trade Deadline Events",
        "Injury Alerts",
      ],
      prize: "$200+ Prize Pool",
      teams: "8–12 Teams",
    },
  ];
</script>

<section
  id="sports"
  class="py-20 bg-gradient-to-b from-desert-surface/60 via-desert-bg to-desert-bg"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span
        class="text-desert-gold text-sm font-semibold tracking-widest uppercase"
        >Our Leagues</span
      >
      <h2
        class="mt-2 text-4xl font-bold text-desert-brown"
        style="font-family: Georgia, serif;"
      >
        Three Sports, One Community
      </h2>
      <div
        class="mt-4 w-16 h-1 bg-gradient-to-r from-desert-red to-desert-gold mx-auto rounded-full"
      ></div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      {#each sports as sport, i}
        <div
          class="relative group flex flex-col p-6 bg-gradient-to-b from-desert-surface/80 to-desert-bg border {sport.borderColor} rounded-2xl hover:shadow-xl {sport.glowColor} transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Sport icon & season badge -->
          <div class="flex items-start justify-between mb-4">
            <!-- Sport SVG icon -->
            <div
              class="w-14 h-14 rounded-xl {sport.bgColor} border {sport.borderColor} flex items-center justify-center"
            >
              {#if i === 0}
                <!-- Football -->
                <svg
                  class="w-8 h-8 {sport.accentColor}"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="5.5"
                    transform="rotate(-35 12 12)"
                  />
                  <line x1="7" y1="7" x2="17" y2="17" />
                  <line x1="9.5" y1="8.5" x2="9.5" y2="14.5" />
                  <line x1="12" y1="7" x2="12" y2="17" />
                  <line x1="14.5" y1="9.5" x2="14.5" y2="15.5" />
                </svg>
              {:else if i === 1}
                <!-- Baseball -->
                <svg
                  class="w-8 h-8 {sport.accentColor}"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M5.5 5.5C7.2 7.8 7.8 10.3 7.2 12.8c-.6 2.5-2.1 4.6-3.7 6.2"
                  />
                  <path
                    d="M18.5 5.5C16.8 7.8 16.2 10.3 16.8 12.8c.6 2.5 2.1 4.6 3.7 6.2"
                  />
                </svg>
              {:else}
                <!-- Hockey -->
                <svg
                  class="w-8 h-8 {sport.accentColor}"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 4 L9 18 Q12 21.5 15 18 L19 4" />
                  <line x1="3" y1="4" x2="21" y2="4" />
                  <ellipse cx="12" cy="20" rx="3" ry="1.2" />
                </svg>
              {/if}
            </div>
            <span
              class="text-xs font-medium px-3 py-1 rounded-full {sport.bgColor} {sport.accentColor} border {sport.borderColor}"
            >
              {sport.season}
            </span>
          </div>

          <h3
            class="text-2xl font-bold text-desert-brown mb-3"
            style="font-family: Georgia, serif;"
          >
            {sport.name}
          </h3>
          <p class="text-desert-brown/60 text-sm leading-relaxed mb-5">
            {sport.description}
          </p>

          <!-- Features list -->
          <ul class="space-y-2 mb-6 flex-1">
            {#each sport.features as feature}
              <li class="flex items-center gap-2 text-sm text-desert-brown/75">
                <svg
                  class="w-4 h-4 {sport.accentColor} flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            {/each}
          </ul>

          <!-- Footer meta -->
          <div
            class="flex items-center justify-between pt-4 border-t border-desert-brown/10"
          >
            <div>
              <div class="text-desert-gold font-bold text-sm">
                {sport.prize}
              </div>
              <div class="text-desert-brown/45 text-xs">{sport.teams}</div>
            </div>
            <a
              href="#contact"
              class="text-sm font-semibold px-4 py-2 rounded-full {sport.bgColor} {sport.accentColor} border {sport.borderColor} hover:bg-desert-brown/10 transition-colors"
            >
              Join →
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
