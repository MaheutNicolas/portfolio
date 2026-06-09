<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <span class="footer__name">Maheut Nicolas</span>
          <span class="footer__tagline">Développeur web fullstack</span>
        </div>
        <nav class="footer__links" aria-label="Liens sociaux">
      
          <a class="footer__link"
            href="https://www.linkedin.com/in/nicolas-maheut-a4b058288/"
            target="_blank" rel="noopener">
              <Linkedin />
              LinkedIn
          </a>
          
           <a  class="footer__link"
            href="https://github.com/MaheutNicolas"
            target="_blank" rel="noopener">
              <GitHub />
              GitHub
          </a>
        </nav>
      </div>

      <div class="footer__divider" />

      <div class="footer__bottom">
        <p class="footer__copy">
          © {{ year }} <span>Maheut Nicolas</span> — Conçu &amp; développé avec soin.
        </p>
        <a class="footer__back" href="#hero">
          Retour en haut
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import GitHub from '../icon/GitHub.vue';
import Linkedin from '../icon/Linkedin.vue';

const year = new Date().getFullYear()
</script>