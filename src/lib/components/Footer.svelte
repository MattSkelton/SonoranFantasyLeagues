<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<footer class="bg-desert-surface/70 border-t border-desert-brown/10 py-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-full bg-gradient-to-br from-desert-red to-desert-maroon flex items-center justify-center"
        >
          <span class="text-white font-bold text-sm">SFL</span>
        </div>
        <div>
          <div class="text-desert-brown font-bold">Sonoran Fantasy Leagues</div>
          <div class="text-desert-brown/45 text-xs">Phoenix, Arizona</div>
        </div>
      </div>

      <!-- Nav links -->
      <div
        class="flex flex-wrap justify-center gap-6 text-sm text-desert-brown/55"
      >
        <a href="#home" class="hover:text-desert-red transition-colors">Home</a>
        <a href="#about" class="hover:text-desert-red transition-colors"
          >About</a
        >
        <a href="#sports" class="hover:text-desert-red transition-colors"
          >Sports</a
        >
        <a href="#how-it-works" class="hover:text-desert-red transition-colors"
          >How It Works</a
        >
        <a href="#contact" class="hover:text-desert-red transition-colors"
          >Join Us</a
        >
      </div>

      <!-- Social -->
      <div class="flex items-center gap-3">
        <span class="text-desert-brown/40 text-xs">Follow us:</span>
        <div class="flex gap-2">
          <div
            class="w-8 h-8 rounded-full bg-desert-brown/5 border border-desert-brown/10 flex items-center justify-center text-desert-brown/40 hover:border-desert-red/40 hover:text-desert-red transition-colors cursor-pointer"
          >
            <Icon icon="simple-icons:x" width="14" height="14" />
          </div>
          <div
            class="w-8 h-8 rounded-full bg-desert-brown/5 border border-desert-brown/10 flex items-center justify-center text-desert-brown/40 hover:border-desert-red/40 hover:text-desert-red transition-colors cursor-pointer"
          >
            <Icon icon="mdi:facebook" width="16" height="16" />
          </div>
          <div
            class="w-8 h-8 rounded-full bg-desert-brown/5 border border-desert-brown/10 flex items-center justify-center text-desert-brown/40 hover:border-desert-red/40 hover:text-desert-red transition-colors cursor-pointer"
          >
            <Icon icon="mdi:linkedin" width="16" height="16" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-8 pt-6 border-t border-desert-brown/8 text-center text-desert-brown/35 text-xs"
    >
      © {new Date().getFullYear()} Sonoran Fantasy Leagues · Phoenix, AZ · All rights
      reserved.
    </div>
  </div>
</footer>
