<script setup>
import { ref } from 'vue'
import GitHub from './icon/GitHub.vue'

const projects = [
    {
        title:       'Akasha',
        image:       'Akasha.webp',
        period:      '2026 — en cours',
        description: 'Jeu web à interface terminal magique. Système de runes ASCII, pathfinding ennemi BFS, carte SVG interactive et architecture événementielle Symfony.',
        reward:      'J\'ai pu mettre en pratique l\'ensemble des connaissances acquises jusqu\'à présent pour mener à bien un projet d\'envergure.',
        stack:       ['PHP / Symfony', 'Vue.js 3', 'PostgreSQL', 'SCSS'],
        github:      'https://github.com/MaheutNicolas/Akasha_Back',
        github2:     'https://github.com/MaheutNicolas/Akasha_Front',
        live:        '',
    },
    {
        title:       'Mon Vieux Grimoire',
        image:       'Librairie.webp',
        period:      '2026',
        description: 'Développement du back-end d\'une application de gestion de livres dans le cadre de ma formation. Mise en place d\'une API REST, gestion des données et implémentation de la logique métier.',
        reward:      'Ce projet m\'a permis de découvrir Node.js et Express',
        stack:       ['Node.js', 'Express.js'],
        github:      'https://github.com/MaheutNicolas/projet6_backend',
        live:        '',
    },
    {
        title:       'Kasa Frontend',
        image:       'Kasa.webp',
        period:      '2026',
        description: 'Développement du front-end d\'une application de gestion de logements dans le cadre de ma formation. Création d\'une interface utilisateur réactive avec gestion du routage et affichage dynamique des données.',
        reward:      'J\'ai consolidé mes bases en React, notamment sur la gestion du routage sous celuil-ci',
        stack:       ['React'],
        github:      'https://github.com/MaheutNicolas/Projet5',
        live:        '',
    },
    {
        title:       'Thibibi',
        image:       'thibibi.webp',
        period:      '2025',
        description: 'Conception et développement du site vitrine d\'un coach sportif professionnel afin de mettre en avant ses prestations, ses offres de coaching et ses services.',
        reward:      'Deuxième site livré à une tierce personne, avec un vrai travail sur le relationnel client.',
        stack:       ['PHP', 'HTML'],
        github:      '',
        live:        'https://thibibi.fr',
    },
    {
        title:       'Skorpia',
        image:       'Skorpia.webp',
        period:      '2024 - en cours',
        description: 'Participation à une association de location de serveurs : j\'ai contribué, aux côtés d\'autres membres de l\'association, à la conception et au développement du site web ainsi qu\'à l\'évolution du back-office.',
        reward:      'Une première expérience de travail en équipe sur un projet durable, avec une vraie continuité dans le développement.',
        stack:       ['Next.js', 'PHP', 'SQL'],
        github:      '',
        live:        'https://skorpia.fr',
    },
    {
        title:       'DocInkTatoo',
        image:       'DocInkTatoo.webp',
        period:      '2024',
        description: 'Création d\'un site vitrine pour un tatoueur indépendant, permettant de présenter son univers artistique, sa galerie de réalisations et les informations de contact pour la prise de rendez-vous.',
        reward:      ' Un des tout premiers sites que j\'ai construits pour une tierce personne, qui m\'a donné le goût du développement web.',
        stack:       ['HTML'],
        github:      '',
        live:        'https://docinktatoo.fr',
    },
]

const selected = ref(null)

function open(project) {
  selected.value = project
  document.body.style.overflow = 'hidden'
}

function close() {
  selected.value = null
  document.body.style.overflow = ''
}

function onBackdrop(e) {
  if (e.target === e.currentTarget) close()
}
</script>

<template>
  <section class="projects" id="project">
    <div class="projects__inner">

      <h2 class="projects__label">Projets</h2>

      <h3 class="projects__title">
        Ce que j'ai<br>
        <span class="projects__title--accent">construit.</span>
      </h3>

      <!-- Grille de cartes -->
      <ul class="projects__grid" role="list">
        <li
          v-for="project, index in projects"
          :key="project.title"
          class="projects__card"
          @click="open(project)"
          role="button"
          :aria-label="`Voir le projet ${project.title}`"
          @keydown.enter="open(project)"
          @keydown.space.prevent="open(project)"
        >
          <div class="projects__card-img">
            <img v-if="project.image" :src="project.image" :alt="project.title" loading="lazy" />
            <span v-else class="projects__card-placeholder" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.25"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            </span>
          </div>
          <div class="projects__card-body">
            <span class="projects__card-period">{{ project.period }}</span>
            <h3 class="projects__card-title">{{ project.title }}</h3>
            <ul class="projects__card-stack" role="list">
              <li v-for="tech in project.stack.slice(0, 3)" :key="tech" class="projects__card-tag">
                {{ tech }}
              </li>
            </ul>
          </div>
          <span class="projects__card-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
          </span>
        </li>
      </ul>

    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selected"
          class="projects__overlay"
          @click="onBackdrop"
          role="dialog"
          aria-modal="true"
          :aria-label="`Projet ${selected.title}`"
        >
          <div class="projects__modal">

            <!-- Header modal -->
            <div class="projects__modal-header">
              <div class="projects__modal-img">
                <img v-if="selected.image" :src="selected.image" :alt="selected.title" />
                <span v-else class="projects__card-placeholder" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </span>
              </div>
              <button class="projects__modal-close" @click="close" aria-label="Fermer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>

            <!-- Corps modal -->
            <div class="projects__modal-body">
              <span class="projects__modal-period">{{ selected.period }}</span>
              <h3 class="projects__modal-title">{{ selected.title }}</h3>
              <p class="projects__modal-desc">{{ selected.description }}</p>
              <p class="projects__modal-desc">{{ selected.reward }}</p>

              <div class="projects__modal-section">
                <span class="projects__modal-section-label">Stack technique</span>
                <ul class="projects__modal-stack" role="list">
                  <li v-for="tech in selected.stack" :key="tech" class="projects__card-tag">
                    {{ tech }}
                  </li>
                </ul>
              </div>

              <div class="projects__modal-links">
                <a
                  v-if="selected.github"
                  :href="selected.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="projects__modal-link projects__modal-link--secondary"
                >
                  <GitHub />
                  GitHub
                </a>
                <a
                  v-if="selected.github2"
                  :href="selected.github2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="projects__modal-link projects__modal-link--secondary"
                >
                  <GitHub />
                  Github 2
                </a>
                <a
                  v-if="selected.live"
                  :href="selected.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="projects__modal-link projects__modal-link--primary"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="m10 14 11-11"/></svg>
                  Voir le site
                </a>
              </div>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>