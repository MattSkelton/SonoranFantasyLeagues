<script lang="ts">
  import Icon from "@iconify/svelte";
  let formData = $state({
    name: "",
    email: "",
    phone: "",
    location: "",
    sports: [] as string[],
    experience: "",
    format: "",
    message: "",
  });

  let submitted = $state(false);
  let submitting = $state(false);
  let error = $state("");

  const sportOptions = ["Football (NFL)", "Baseball (MLB)", "Hockey (NHL)"];
  const experienceOptions = [
    "Beginner (0-1 years)",
    "Casual (2-3 years)",
    "Experienced (4-6 years)",
    "Veteran (7+ years)",
  ];
  const formatOptions = [
    "Standard",
    "PPR (Football)",
    "Dynasty / Keeper",
    "Rotisserie (Baseball)",
    "Head-to-Head",
    "No Preference",
  ];

  function toggleSport(sport: string) {
    if (formData.sports.includes(sport)) {
      formData.sports = formData.sports.filter((s) => s !== sport);
    } else {
      formData.sports = [...formData.sports, sport];
    }
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    error = "";

    if (!formData.name || !formData.email || formData.sports.length === 0) {
      error = "Please fill in your name, email, and select at least one sport.";
      return;
    }

    submitting = true;
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    submitting = false;
    submitted = true;
  }
</script>

<section
  id="contact"
  class="py-20 bg-gradient-to-b from-desert-surface/50 to-desert-bg"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span
        class="text-desert-gold text-sm font-semibold tracking-widest uppercase"
        >Get Involved</span
      >
      <h2
        class="mt-2 text-4xl font-bold text-desert-brown"
        style="font-family: Georgia, serif;"
      >
        Join the League
      </h2>
      <div
        class="mt-4 w-16 h-1 bg-gradient-to-r from-desert-red to-desert-gold mx-auto rounded-full"
      ></div>
      <p class="mt-6 text-desert-brown/60 max-w-xl mx-auto">
        Ready to compete? Fill out the form below and we'll get you into the
        right league for the upcoming season.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 items-start">
      <!-- Contact info sidebar -->
      <div class="space-y-6">
        <div
          class="p-5 bg-desert-surface/70 border border-desert-brown/10 rounded-2xl"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-desert-red/10 flex items-center justify-center"
            >
              <Icon
                icon="mdi:map-marker-outline"
                class="text-desert-red"
                width="20"
                height="20"
              />
            </div>
            <div>
              <div class="text-desert-brown font-semibold text-sm">
                Location
              </div>
              <div class="text-desert-brown/60 text-sm">
                Greater Phoenix, AZ Area
              </div>
            </div>
          </div>
        </div>
        <div
          class="p-5 bg-desert-surface/70 border border-desert-brown/10 rounded-2xl"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-desert-blue/10 flex items-center justify-center"
            >
              <Icon
                icon="mdi:email-outline"
                class="text-desert-blue"
                width="20"
                height="20"
              />
            </div>
            <div>
              <div class="text-desert-brown font-semibold text-sm">Email</div>
              <div class="text-desert-brown/60 text-sm">
                commish@sonoranfantasy.com
              </div>
            </div>
          </div>
        </div>
        <div
          class="p-5 bg-desert-surface/70 border border-desert-brown/10 rounded-2xl"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-desert-sage/10 flex items-center justify-center"
            >
              <Icon
                icon="mdi:calendar-outline"
                class="text-desert-sage"
                width="20"
                height="20"
              />
            </div>
            <div>
              <div class="text-desert-brown font-semibold text-sm">
                Draft Season
              </div>
              <div class="text-desert-brown/60 text-sm">
                Leagues open year-round
              </div>
            </div>
          </div>
        </div>
        <div
          class="p-5 bg-desert-surface/70 border border-desert-brown/10 rounded-2xl"
        >
          <h4 class="text-desert-gold font-semibold text-sm mb-3">
            Entry Fees
          </h4>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between text-desert-brown/75">
              <span>Football</span><span class="text-desert-gold">$25–$100</span
              >
            </div>
            <div class="flex justify-between text-desert-brown/75">
              <span>Baseball</span><span class="text-desert-gold">$20–$75</span>
            </div>
            <div class="flex justify-between text-desert-brown/75">
              <span>Hockey</span><span class="text-desert-gold">$15–$50</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="lg:col-span-2">
        {#if submitted}
          <div
            class="p-10 text-center bg-gradient-to-br from-desert-sage/10 to-desert-bg border border-desert-sage/30 rounded-2xl"
          >
            <div
              class="w-16 h-16 rounded-full bg-desert-sage/15 border border-desert-sage/30 flex items-center justify-center mx-auto mb-4"
            >
              <Icon
                icon="mdi:check-circle-outline"
                class="text-desert-sage"
                width="32"
                height="32"
              />
            </div>
            <h3
              class="text-2xl font-bold text-desert-brown mb-3"
              style="font-family: Georgia, serif;"
            >
              You're on the list!
            </h3>
            <p class="text-desert-brown/60">
              Thanks, {formData.name}! We'll reach out to {formData.email} soon to
              get you squared away. Welcome to Sonoran Fantasy Leagues!
            </p>
          </div>
        {:else}
          <form
            onsubmit={handleSubmit}
            class="space-y-5 bg-desert-surface/70 border border-desert-brown/10 rounded-2xl p-6 sm:p-8"
          >
            <!-- Name + Email row -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-sm font-medium text-desert-brown/70 mb-1.5"
                  for="name"
                  >Full Name <span class="text-desert-red">*</span></label
                >
                <input
                  id="name"
                  type="text"
                  bind:value={formData.name}
                  placeholder="John Smith"
                  class="w-full bg-white/60 border border-desert-brown/15 rounded-xl px-4 py-2.5 text-desert-brown placeholder-desert-brown/35 focus:outline-none focus:border-desert-gold/60 focus:ring-1 focus:ring-desert-gold/30 transition-colors text-sm"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-desert-brown/70 mb-1.5"
                  for="email"
                  >Email Address <span class="text-desert-red">*</span></label
                >
                <input
                  id="email"
                  type="email"
                  bind:value={formData.email}
                  placeholder="john@example.com"
                  class="w-full bg-white/60 border border-desert-brown/15 rounded-xl px-4 py-2.5 text-desert-brown placeholder-desert-brown/35 focus:outline-none focus:border-desert-gold/60 focus:ring-1 focus:ring-desert-gold/30 transition-colors text-sm"
                />
              </div>
            </div>

            <!-- Phone + Location row -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-sm font-medium text-desert-brown/70 mb-1.5"
                  for="phone">Phone (optional)</label
                >
                <input
                  id="phone"
                  type="tel"
                  bind:value={formData.phone}
                  placeholder="(602) 555-0100"
                  class="w-full bg-white/60 border border-desert-brown/15 rounded-xl px-4 py-2.5 text-desert-brown placeholder-desert-brown/35 focus:outline-none focus:border-desert-gold/60 focus:ring-1 focus:ring-desert-gold/30 transition-colors text-sm"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-desert-brown/70 mb-1.5"
                  for="location">City / Area</label
                >
                <input
                  id="location"
                  type="text"
                  bind:value={formData.location}
                  placeholder="Scottsdale, Tempe, Mesa…"
                  class="w-full bg-white/60 border border-desert-brown/15 rounded-xl px-4 py-2.5 text-desert-brown placeholder-desert-brown/35 focus:outline-none focus:border-desert-gold/60 focus:ring-1 focus:ring-desert-gold/30 transition-colors text-sm"
                />
              </div>
            </div>

            <!-- Sports of interest -->
            <div>
              <label
                class="block text-sm font-medium text-desert-brown/70 mb-2"
                for="sports-interest"
                >Sports of Interest <span class="text-desert-red">*</span
                ></label
              >
              <div id="sports-interest" class="flex flex-wrap gap-3">
                {#each sportOptions as sport}
                  <button
                    type="button"
                    onclick={() => toggleSport(sport)}
                    class="px-4 py-2 rounded-full text-sm font-medium border transition-all {formData.sports.includes(
                      sport,
                    )
                      ? 'bg-desert-red border-desert-red text-white'
                      : 'bg-white/60 border-desert-brown/20 text-desert-brown/70 hover:border-desert-red hover:text-desert-red hover:bg-desert-red/5'}"
                  >
                    {sport}
                  </button>
                {/each}
              </div>
            </div>

            <!-- Experience + Format -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-sm font-medium text-desert-brown/70 mb-1.5"
                  for="experience">Fantasy Experience</label
                >
                <select
                  id="experience"
                  bind:value={formData.experience}
                  class="w-full bg-white/60 border border-desert-brown/15 rounded-xl px-4 py-2.5 text-desert-brown focus:outline-none focus:border-desert-gold/60 transition-colors text-sm"
                >
                  <option value="" disabled>Select experience level</option>
                  {#each experienceOptions as opt}
                    <option value={opt}>{opt}</option>
                  {/each}
                </select>
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-desert-brown/70 mb-1.5"
                  for="format">Preferred Format</label
                >
                <select
                  id="format"
                  bind:value={formData.format}
                  class="w-full bg-white/60 border border-desert-brown/15 rounded-xl px-4 py-2.5 text-desert-brown focus:outline-none focus:border-desert-gold/60 transition-colors text-sm"
                >
                  <option value="" disabled>Select format</option>
                  {#each formatOptions as opt}
                    <option value={opt}>{opt}</option>
                  {/each}
                </select>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label
                class="block text-sm font-medium text-desert-brown/70 mb-1.5"
                for="message">Anything else? (optional)</label
              >
              <textarea
                id="message"
                bind:value={formData.message}
                rows="3"
                placeholder="Questions, preferred team sizes, prior league experience..."
                class="w-full bg-white/60 border border-desert-brown/15 rounded-xl px-4 py-2.5 text-desert-brown placeholder-desert-brown/35 focus:outline-none focus:border-desert-gold/60 focus:ring-1 focus:ring-desert-gold/30 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <!-- Error -->
            {#if error}
              <p class="text-desert-red text-sm flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                  ><path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  /></svg
                >
                {error}
              </p>
            {/if}

            <!-- Submit -->
            <button
              type="submit"
              disabled={submitting}
              class="w-full bg-desert-red hover:bg-desert-maroon disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {#if submitting}
                <svg
                  class="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  ><circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  /><path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  /></svg
                >
                Submitting...
              {:else}
                Submit Interest Form
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
              {/if}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>
