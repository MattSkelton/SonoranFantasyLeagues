<footer class="bg-desert-dark border-t border-white/10 py-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-desert-red to-desert-maroon flex items-center justify-center">
          <span class="text-white font-bold text-sm">SFL</span>
        </div>
        <div>
          <div class="text-white font-bold">Sonoran Fantasy Leagues</div>
          <div class="text-gray-500 text-xs">Phoenix, Arizona</div>
        </div>
      </div>

      <!-- Nav links -->
      <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <a href="#home" class="hover:text-desert-gold transition-colors">Home</a>
        <a href="#about" class="hover:text-desert-gold transition-colors">About</a>
        <a href="#sports" class="hover:text-desert-gold transition-colors">Sports</a>
        <a href="#how-it-works" class="hover:text-desert-gold transition-colors">How It Works</a>
        <a href="#contact" class="hover:text-desert-gold transition-colors">Join Us</a>
      </div>

      <!-- Social (decorative) -->
      <div class="flex items-center gap-3">
        <span class="text-gray-500 text-xs">Follow us:</span>
        <div class="flex gap-2">
          {#each ['𝕏', 'f', 'in'] as icon}
            <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-xs hover:border-desert-gold/30 hover:text-desert-gold transition-colors cursor-pointer">
              {icon}
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
      © {new Date().getFullYear()} Sonoran Fantasy Leagues · Phoenix, AZ · All rights reserved.
    </div>
  </div>
</footer>
