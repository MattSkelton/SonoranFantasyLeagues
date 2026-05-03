<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-desert-dark via-desert-maroon/20 to-desert-blue/30"></div>
  
  <!-- Desert texture overlay -->
  <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(ellipse at 20% 80%, #C8102E 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #003087 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #2C5F2E 0%, transparent 70%);"></div>

  <!-- Decorative cactus silhouettes -->
  <div class="absolute bottom-0 left-0 right-0 h-32 opacity-5">
    <svg viewBox="0 0 1440 128" fill="currentColor" class="text-desert-green w-full">
      <path d="M0,128 L0,80 Q20,60 40,80 L40,40 Q60,20 80,40 L80,80 Q100,60 120,80 L120,128 Z M200,128 L200,60 Q220,40 240,60 L240,20 Q260,0 280,20 L280,60 Q300,40 320,60 L320,128 Z M400,128 L400,70 Q420,50 440,70 L440,30 Q460,10 480,30 L480,70 Q500,50 520,70 L520,128 Z M700,128 L700,80 Q720,55 740,80 L740,35 Q760,15 780,35 L780,80 Q800,55 820,80 L820,128 Z M1000,128 L1000,65 Q1020,45 1040,65 L1040,25 Q1060,5 1080,25 L1080,65 Q1100,45 1120,65 L1120,128 Z M1300,128 L1300,75 Q1320,55 1340,75 L1340,35 Q1360,15 1380,35 L1380,75 Q1400,55 1420,75 L1420,128 Z"/>
    </svg>
  </div>

  <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 bg-desert-red/20 border border-desert-red/40 rounded-full px-4 py-1.5 text-desert-gold text-sm font-medium mb-6">
      <span class="w-2 h-2 rounded-full bg-desert-gold animate-pulse"></span>
      Arizona's Premier Fantasy League
    </div>

    <h1 class="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight" style="font-family: Georgia, serif;">
      Sonoran
      <span class="block text-transparent bg-clip-text bg-gradient-to-r from-desert-red via-desert-gold to-desert-sand">
        Fantasy Leagues
      </span>
    </h1>

    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
      Where the spirit of the desert meets the passion of championship sports. 
      Compete in football, baseball, and hockey leagues with fellow Arizona fans.
    </p>

    <!-- Sport icons row -->
    <div class="flex justify-center gap-6 mb-10">
      <div class="flex flex-col items-center gap-1">
        <div class="w-14 h-14 rounded-full bg-desert-red/20 border border-desert-red/50 flex items-center justify-center text-2xl hover:bg-desert-red/40 transition-colors cursor-default">
          🏈
        </div>
        <span class="text-xs text-gray-400 font-medium">Football</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="w-14 h-14 rounded-full bg-desert-blue/20 border border-desert-blue/50 flex items-center justify-center text-2xl hover:bg-desert-blue/40 transition-colors cursor-default">
          ⚾
        </div>
        <span class="text-xs text-gray-400 font-medium">Baseball</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="w-14 h-14 rounded-full bg-desert-green/20 border border-desert-green/50 flex items-center justify-center text-2xl hover:bg-desert-green/40 transition-colors cursor-default">
          🏒
        </div>
        <span class="text-xs text-gray-400 font-medium">Hockey</span>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#contact"
         class="inline-flex items-center justify-center gap-2 bg-desert-red hover:bg-desert-maroon text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-desert-red/30 hover:shadow-xl">
        Join a League
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
      <a href="#about"
         class="inline-flex items-center justify-center gap-2 border border-desert-sand/40 text-desert-sand hover:border-desert-gold hover:text-desert-gold font-semibold px-8 py-3.5 rounded-full transition-all duration-200">
        Learn More
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
    <span class="text-xs">Scroll</span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
  </div>
</section>
