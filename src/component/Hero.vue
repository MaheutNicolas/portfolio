<script setup>
import { onMounted, ref } from 'vue'

const hero = {
  label:        'Développeur web',
  titleBefore:  'Je conçois des',
  titleAccent:  'expériences web',
  titleAfter:   'qui ont du sens.',
  subtitle:     'Fullstack JS & PHP, passionné par les interfaces soignées, les architectures propres et les projets qui défient la norme.',
  ctaPrimary:   { label: 'Voir mes projets', to: '#project' },
  ctaSecondary: { label: 'Me contacter',     to: '#contact' },
}

const heroReady = ref(false)
onMounted(async () => {
  // déclenche les animations d'entrée après le mount
  setTimeout(() => {
    requestAnimationFrame(() => { heroReady.value = true });
  }, 300)
})
</script>

<template>
    <section class="hero" id="hero" :class="{ 'is-ready': heroReady }">
        <img class="hero__photo" src="/background.webp" alt="">
        <div class="hero__inner">

            <div class="hero__content hero__anim" style="--delay: 2">
                <span class="hero__label hero__anim" style="--delay: 8">{{ hero.label }}</span>

                <h1 class="hero__title">
                <span class="hero__title-line hero__anim" style="--delay: 10">{{ hero.titleBefore }}</span>
                <span class="hero__title-line hero__title-line--accent hero__anim" style="--delay: 10">{{ hero.titleAccent }}</span>
                <span class="hero__title-line hero__anim" style="--delay: 12">{{ hero.titleAfter }}</span>
                </h1>

                <p class="hero__subtitle hero__anim" style="--delay: 12">{{ hero.subtitle }}</p>

                <div class="hero__actions hero__anim" style="--delay: 14">
                <a :href="hero.ctaPrimary.to" class="btn primary">
                    {{ hero.ctaPrimary.label }}
                </a>
                <a :href="hero.ctaSecondary.to" class="btn secondary">
                    {{ hero.ctaSecondary.label }}
                </a>
                </div>

                <div class="hero__scroll" aria-hidden="true">
                    <div class="hero__scroll__inner">
                        <span>Scroll</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>