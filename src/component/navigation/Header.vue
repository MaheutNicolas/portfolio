<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="header__inner">

      <!-- Logo -->
      <a :href="links[0].to" class="header__logo" @click="closeMenu">
        {{ logo }}
      </a>

      <!-- Nav desktop -->
      <nav class="header__nav" aria-label="Navigation principale">
        <ul class="header__links" role="list">
          <li v-for="link in links" :key="link.to">
            <a
              :href="link.to"
              class="header__link"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <a :href="ctaTo" class="header__cta">
          {{ ctaLabel }}
        </a>
      </nav>

      <!-- Burger mobile -->
      <button
        class="header__burger"
        :class="{ 'header__burger--open': menuOpen }"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- Menu mobile -->
    <div
      id="mobile-menu"
      class="header__mobile-menu"
      :class="{ 'header__mobile-menu--open': menuOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <nav class="header__mobile-nav" aria-label="Navigation mobile">
        <a
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="header__mobile-link"
          @click="closeMenu"
        >
          {{ link.label }}
      </a>
      </nav>

      <a :to="ctaTo" class="header__cta" @click="closeMenu">
        {{ ctaLabel }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  logo: { type: String, default: "Maheut Nicolas"},
  links: {
    type: Array,
    default: () => [
      { label: 'Accueil', to: '#hero' },
      { label: 'projet',   to: '' },
      { label: 'Parcours',   to: '' },
      { label: 'Compétences', to: '' },
    ]
  },
  ctaLabel: { type: String, default: 'Contact' },
  ctaTo:    { type: String, default: '#contact' },
})

const scrolled     = ref(false)
const menuOpen     = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}


onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
