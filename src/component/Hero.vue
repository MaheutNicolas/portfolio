<template>
    <section class="hero" id="hero">
        <div class="hero__inner">
            <div class="hero__content">

                <span class="hero__label">{{ hero.label }}</span>

                <h1 class="hero__title">
                <span class="hero__title-line">{{ hero.titleBefore }}</span>
                <span class="hero__title-line hero__title-line--accent">{{ hero.titleAccent }}</span>
                <span class="hero__title-line">{{ hero.titleAfter }}</span>
                </h1>

                <p class="hero__subtitle">{{ hero.subtitle }}</p>

                <div class="hero__actions">
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

<script setup>
const hero = {
  label:        'Développeur web',
  titleBefore:  'Je conçois des',
  titleAccent:  'expériences web',
  titleAfter:   'qui ont du sens.',
  subtitle:     'Fullstack JS & PHP, passionné par les interfaces soignées, les architectures propres et les projets qui défient la norme.',
  ctaPrimary:   { label: 'Voir mes projets', to: '#projets' },
  ctaSecondary: { label: 'Me contacter',     to: '#contact' },
}
</script>