<template>
    <section class="contact-details flex column" v-if="selectedContact">
        <RouterLink to="/contact" class="back-btn"><button>Back</button></RouterLink>
        <img :src="`https://robohash.org/${selectedContact._id}?set=set5`" :alt="`${selectedContact.name} picture`" />
        <h3>Name:</h3>
        <p>{{ selectedContact.name }}</p>
        <h3>Email:</h3>
        <p>{{ selectedContact.email }}</p>
        <h3>Phone:</h3>
        <p>{{ selectedContact.phone }}</p>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { contactService } from '../services/contact.service.js'

const selectedContact = ref({})

onMounted(async () => {
    const { id } = useRoute().params

    try {
        selectedContact.value = await contactService.getContactById(id)
    } catch (err) {
        console.error(err)
        throw err
    }
})
</script>

<style>
.contact-details {
    padding: 20px;
    align-items: center;
    gap: 10px;
}

.contact-details img {
    width: 205px;
    margin-block-end: 1em;
}

.back-btn {
    align-self: flex-start;
}
</style>
