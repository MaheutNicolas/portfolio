<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const TYPE_LABEL = {
  formation:     'Formation',
  experience:    'Expérience',
  projet:        'Projet perso',
}

const TYPE_COLOR = {
  formation:     'accent',
  experience:    'green',
  projet:        'red',
  certification: 'amber',
}

const timeline = {
  label:       'Parcours',
  title:       'Mon',
  titleAccent: 'chemin.',
  items: [
    {
      type:        'formation',
      period:      '2015 — 2018',
      title:       'BTS Hôtellerie-Restauration',
      place:       'Dijon',
      description: 'La restauration m\'a appris la rigueur, le sens du détail et la gestion sous pressions. des qualités directement transposables au développement.',
    },
    {
      type:        'projet',
      period:      '2020',
      title:       'Premiers pas en autodidacte',
      place:       'Personnel',
      description: 'Découverte du monde du développement par curiosité : en Java. Premiers projets expérimentaux et plongée dans les ressources en ligne.',
    },
    {
      type:        'formation',
      period:      '2023',
      title:       'CS50X',
      place:       'En ligne',
      description: "Formation gratuite d'Harvard couvrant les fondamentaux de l'informatique et du développement (C, Python, SQL, Web)",
    },
    {
      type:        'experience',
      period:      '2024 — en cours',
      title:       'Développeur bénévole chez Skorpia',
      place:       'Télétravail',
      description: "Développement bénévole du site web et des outils internes d'une association d'hébergement web.",
    },
    {
      type:        'experience',
      period:      '2024 — 2025',
      title:       'Développeur junior chez Taketik',
      place:       'Télétravail',
      description: 'Développement de sites vitrines optimisés SEO, landing pages et applications web pour des clients variés.',
    },
    {
      type:        'projet',
      period:      '2024 — en cours',
      title:       'Projets Bénévoles',
      place:       'Projet personnel',
      description: "Développement de sites web pour des amis indépendants : DocInkTattoo et Thibibi.",
    },
    {
      type:        'formation',
      period:      '2026',
      title:       'Formation Développeur Web',
      place:       'OpenClassrooms',
      description: 'Apprentissage structuré des bases du développement fullstack. Projets React, Node.js/Express, MongoDB et méthodologie Agile Scrum, notamment.',
    },
    {
      type:        'projet',
      period:      '2026 — en cours',
      title:       'Akasha',
      place:       'Projet personnel',
      description: 'Jeu web à interface terminal magique. Symfony, Vue.js 3, PostgreSQL, système de runes, carte SVG interactive et architecture événementielle.',
    },
  ],
}

const track      = ref(null)
const isDragging = ref(false)
const startX     = ref(0)
const scrollLeft = ref(0)

function onMouseDown(e) {
  isDragging.value = true
  startX.value     = e.pageX - track.value.offsetLeft
  scrollLeft.value = track.value.scrollLeft
  track.value.style.cursor = 'grabbing'
}

function onMouseMove(e) {
  if (!isDragging.value) return
  e.preventDefault()
  const x    = e.pageX - track.value.offsetLeft
  const walk = (x - startX.value) * 2
  track.value.scrollLeft = scrollLeft.value - walk
}

function stopDrag() {
  isDragging.value = false
  if (track.value) track.value.style.cursor = 'grab'
}

function onWheel(e) {
  if (!track.value) return
  e.preventDefault()
  track.value.scrollLeft += e.deltaY*3
}

onMounted(() => {
  window.addEventListener('mouseup',    stopDrag)
  window.addEventListener('mouseleave', stopDrag)
})

onUnmounted(() => {
  window.removeEventListener('mouseup',    stopDrag)
  window.removeEventListener('mouseleave', stopDrag)
})
</script>

<template>
  <section class="timeline" id="timeline">
    <div class="timeline__header">
      <span class="timeline__label">{{ timeline.label }}</span>
      <h2 class="timeline__title">
        {{ timeline.title }} 
        <span class="timeline__title--accent">{{ timeline.titleAccent }}</span>
      </h2>
      <p class="timeline__hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        Faites glisser la frise ou utilisez la molette de la souris
      </p>
    </div>

     <!-- Legend -->
    <div class="timeline__legend" aria-label="Légende">
      <span v-for="(label, key) in TYPE_LABEL" :key="key" class="timeline__legend-item">
        <span class="timeline__legend-dot" :class="`timeline__legend-dot--${TYPE_COLOR[key]}`"></span>
        {{ label }}
      </span>
    </div>

    <!-- Frise scrollable -->
    <div
      class="timeline__track"
      ref="track"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @wheel.prevent="onWheel"
      role="list"
      aria-label="Frise chronologique"
    >
        <div class="timeline__track-container">

            <!-- Ligne de frise -->
            <div class="timeline__line" aria-hidden="true"></div>
            <div  v-for="(item, index) in timeline.items"
                :key="index"
                class="timeline__item"
                role="listitem">

                <!-- Point sur la ligne -->
                <div class="timeline__dot" :class="`timeline__dot--${TYPE_COLOR[item.type]}`" aria-hidden="true">
                  <span class="timeline__dot-inner"></span>
                </div>

                <!-- Carte -->
                <div class="timeline__card" :class="`timeline__card--${TYPE_COLOR[item.type]}`">
                  <span class="timeline__card-type">{{ TYPE_LABEL[item.type] }}</span>
                  <span class="timeline__card-period">{{ item.period }}</span>
                  <h3 class="timeline__card-title">{{ item.title }}</h3>
                  <span class="timeline__card-place">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {{ item.place }}
                  </span>
                  <p class="timeline__card-desc">{{ item.description }}</p>
                </div>
            </div>
          </div>
      </div>
  </section>
</template>