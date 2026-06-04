<script setup>
const about = {
  label:    'À propos',
  name:     'Maheut Nicolas',
  intro: [
    'Développeur autodidacte, j\'ai commencé à coder par pure curiosité — cette même curiosité qui me pousse à explorer, déconstruire et comprendre comment les choses fonctionnent vraiment.',
    'Mon parcours est atypique : titulaire d\'un BTS en hôtellerie-restauration, j\'ai bifurqué vers le développement web en suivant ma propre route. Une école du terrain qui forge une façon de résoudre les problèmes différemment.',
  ],
  stacks: [
    {
      label: 'Back-end',
      items: [
        { name: 'PHP',              level: 80 },
        { name: 'Symfony',          level: 70 },
        { name: 'Laravel',          level: 55 },
        { name: 'Node.js / Express',level: 30 },
      ],
    },
    {
      label: 'Front-end',
      items: [
        { name: 'JS',               level: 90 },
        { name: 'Vue.js',           level: 80 },
        { name: 'React',            level: 60 },
        { name: 'Next.js',          level: 50 },
      ],
    },
    {
      label: 'Bases de données',
      items: [
        { name: 'PostgreSQL',       level: 70 },
        { name: 'MongoDB',          level: 40 },
      ],
    },
  ],
  tags: ['Autodidacte', 'Curieux', 'Parcours atypique', 'Dijon'],
}
</script>

<template>
  <section class="about" id="about">
    <div class="about__inner">

      <div class="about__content">
        <h2 class="about__label">{{ about.label }}</h2>

        <h3 class="about__title">
          Bonjour, je suis<br>
          <span class="about__title--accent">{{ about.name }}</span>
        </h3>

        <div class="about__bio">
          <p v-for="(paragraph, i) in about.intro" :key="i" class="about__bio-p">
            {{ paragraph }}
          </p>
        </div>

        <ul class="about__tags" aria-label="Mots-clés">
          <li v-for="tag in about.tags" :key="tag" class="about__tag">
            {{ tag }}
          </li>
        </ul>
      </div>

      <div class="about__stacks">
        <div
          v-for="stack in about.stacks"
          :key="stack.label"
          class="about__stack"
        >
          <h4 class="about__stack-label">{{ stack.label }}</h4>
          <ul class="about__stack-items" role="list">
            <li
              v-for="item in stack.items"
              :key="item.name"
              class="about__stack-item"
            >
              <div class="about__stack-header">
                <span class="about__stack-name">
                  <span class="about__stack-dot" aria-hidden="true"></span>
                  {{ item.name }}
                </span>
              </div>
              <div class="about__stack-bar" role="progressbar" :aria-valuenow="item.level" aria-valuemin="0" aria-valuemax="100">
                <span class="about__stack-fill" :style="{ width: item.level + '%' }"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>