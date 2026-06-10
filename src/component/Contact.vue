<template>
  <section class="contact" id="contact">
        <div class="contact_container">
            <span class="contact__label">Contact</span>
            <h2 class="contact__title">
                Vous recrutez ? <span>Discutons.</span>
            </h2>
            <p class="contact__subtitle">
                Décrivez votre besoin et je vous réponds sous 24h.
            </p>

            <div class="contact__form">
            <Transition name="fade">
                <div v-if="submitted" class="contact__success">
                    <span class="contact__success-icon">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                        stroke="white" stroke-width="2.5" stroke-linecap="round"
                        stroke-linejoin="round">
                            <polyline points="2,6 5,9 10,3"/>
                        </svg>
                    </span>
                    Message envoyé — à très bientôt !
                </div>
            </Transition>

            <div class="form-row">
                <div class="form-group">
                    <label for="name">Nom</label>
                    <input
                        id="name" v-model="form.name" type="text"
                        placeholder="Jean Dupont" autocomplete="name"
                        :class="{ error: errors.name }"
                        @input="errors.name = ''"
                    />
                    <span v-if="errors.name" class="form-hint">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        id="email" v-model="form.email" type="email"
                        placeholder="jean@exemple.fr" autocomplete="email"
                        :class="{ error: errors.email }"
                        @input="errors.email = ''"
                    />
                    <span v-if="errors.email" class="form-hint">{{ errors.email }}</span>
                </div>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                id="message" v-model="form.message"
                placeholder="Parlez-moi de votre projet."
                :class="{ error: errors.message }"
                @input="errors.message = ''"
                />
                <span v-if="errors.message" class="form-hint">{{ errors.message }}</span>
            </div>

            <div class="form-submit">
                <span class="form-note">Réponse sous 24h.<br>Aucun spam, jamais.</span>
                <button class="btn primary" :disabled="loading" @click="handleSubmit">
                    <span>{{ loading ? 'Envoi…' : 'Envoyer' }}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12,5 19,12 12,19"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const submitted = ref(false)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  errors.name    = form.name.trim()          ? '' : 'Ce champ est requis.'
  errors.email   = EMAIL_RE.test(form.email) ? '' : 'Adresse email invalide.'
  errors.message = form.message.trim()        ? '' : 'Le message ne peut pas être vide.'
  return !errors.name && !errors.email && !errors.message
}

async function handleSubmit() {
  if (!validate()) return
  loading.value = true
  // Remplace par ton appel API / EmailJS / etc.
  await fetch('https://maheutnicolascv.fr/api/send-email', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  });
  submitted.value = true
  loading.value = false
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
}
</script>