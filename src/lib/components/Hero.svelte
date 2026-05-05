<section
  id="home"
  class="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  <!-- Warm desert sunrise gradient background -->
  <div
    class="absolute inset-0 bg-gradient-to-br from-desert-sand/40 via-desert-bg to-desert-red/10"
  ></div>

  <!-- Subtle warm overlay blobs -->
  <div
    class="absolute inset-0 opacity-30"
    style="background-image: radial-gradient(ellipse at 15% 85%, #E8C48A 0%, transparent 45%), radial-gradient(ellipse at 85% 15%, #C45C2A22 0%, transparent 45%);"
  ></div>

  <!-- Cactus silhouettes -->
  <div class="absolute bottom-0 left-0 right-0 h-32 opacity-10">
    <svg
      viewBox="0 0 1440 128"
      fill="currentColor"
      class="text-desert-red w-full"
    >
      <path
        d="M0,128 L0,80 Q20,60 40,80 L40,40 Q60,20 80,40 L80,80 Q100,60 120,80 L120,128 Z M200,128 L200,60 Q220,40 240,60 L240,20 Q260,0 280,20 L280,60 Q300,40 320,60 L320,128 Z M400,128 L400,70 Q420,50 440,70 L440,30 Q460,10 480,30 L480,70 Q500,50 520,70 L520,128 Z M700,128 L700,80 Q720,55 740,80 L740,35 Q760,15 780,35 L780,80 Q800,55 820,80 L820,128 Z M1000,128 L1000,65 Q1020,45 1040,65 L1040,25 Q1060,5 1080,25 L1080,65 Q1100,45 1120,65 L1120,128 Z M1300,128 L1300,75 Q1320,55 1340,75 L1340,35 Q1360,15 1380,35 L1380,75 Q1400,55 1420,75 L1420,128 Z"
      />
    </svg>
  </div>

  <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <!-- Badge -->
    <div
      class="inline-flex items-center gap-2 bg-desert-red/10 border border-desert-red/30 rounded-full px-4 py-1.5 text-desert-red text-sm font-medium mb-6"
    >
      <span class="w-2 h-2 rounded-full bg-desert-red animate-pulse"></span>
      Arizona's Premier Fantasy League
    </div>

    <h1
      class="text-5xl sm:text-7xl font-bold text-desert-brown mb-6 leading-tight"
      style="font-family: Georgia, serif;"
    >
      Sonoran
      <span
        class="block text-transparent bg-clip-text bg-gradient-to-r from-desert-red via-desert-gold to-desert-maroon"
      >
        Fantasy Leagues
      </span>
    </h1>

    <p
      class="text-lg text-desert-brown/70 mb-8 max-w-2xl mx-auto leading-relaxed"
    >
      Where the spirit of the desert meets the passion of championship sports.
      Compete in football, baseball, and hockey leagues with fellow Arizona
      fans.
    </p>

    <!-- Sport icons row -->
    <div class="flex justify-center gap-6 mb-10">
      <!-- Football -->
      <div class="flex flex-col items-center gap-1">
        <div
          class="w-14 h-14 rounded-full bg-desert-red/10 border border-desert-red/30 flex items-center justify-center hover:bg-desert-red/20 transition-colors cursor-default"
        >
          <svg
            class="w-7 h-7 text-desert-red"
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
              ry="6"
              transform="rotate(-35 12 12)"
            />
            <line x1="6.5" y1="6.5" x2="17.5" y2="17.5" />
            <line x1="9" y1="9" x2="9" y2="15" />
            <line x1="12" y1="7" x2="12" y2="17" />
            <line x1="15" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <span class="text-xs text-desert-brown/60 font-medium">Football</span>
      </div>
      <!-- Baseball -->
      <div class="flex flex-col items-center gap-1">
        <div
          class="w-14 h-14 rounded-full bg-desert-blue/10 border border-desert-blue/30 flex items-center justify-center hover:bg-desert-blue/20 transition-colors cursor-default"
        >
          <svg
            class="w-7 h-7 text-desert-blue"
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
        </div>
        <span class="text-xs text-desert-brown/60 font-medium">Baseball</span>
      </div>
      <!-- Hockey -->
      <div class="flex flex-col items-center gap-1">
        <div
          class="w-14 h-14 rounded-full bg-desert-sage/10 border border-desert-sage/30 flex items-center justify-center hover:bg-desert-sage/20 transition-colors cursor-default"
        >
          <svg
            class="w-7 h-7 text-desert-sage"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4 L8 18 Q12 22 16 18 L20 4" />
            <line x1="2" y1="4" x2="22" y2="4" />
          </svg>
        </div>
        <span class="text-xs text-desert-brown/60 font-medium">Hockey</span>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#contact"
        class="inline-flex items-center justify-center gap-2 bg-desert-red hover:bg-desert-maroon text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-desert-red/30 hover:shadow-xl"
      >
        Join a League
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          /></svg
        >
      </a>
      <a
        href="#about"
        class="inline-flex items-center justify-center gap-2 border border-desert-brown/30 text-desert-brown/70 hover:border-desert-red hover:text-desert-red font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
      >
        Learn More
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-desert-brown/35 animate-bounce"
  >
    <span class="text-xs">Scroll</span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      /></svg
    >
  </div>
</section>
