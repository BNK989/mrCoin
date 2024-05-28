<template>
    <section class="contact-edit flex column">
        <RouterLink to="/contact"><button class="back-btn">Back</button></RouterLink>
        <form @submit.prevent="save" class="flex column">
            <img
                v-if="contact._id"
                :src="`https://robohash.org/${contact._id}?set=set5`"
                :alt="`${contact.name} picture`" />
            <label for="name">Name</label>
            <input id="name" type="text" v-model="contact.name" placeholder="Contact's name" />
            <label for="email">Email</label>
            <input id="email" type="text" v-model="contact.email" placeholder="Contact's email" />
            <label for="phone">Phone</label>
            <input id="phone" type="tel" v-model="contact.phone" placeholder="Contact's phone" />
            <div class="buttons flex column">
                <button>Save</button>
                <button type="button" v-if="contact._id" @click="onDelete()">Delete</button>
                <button type="button" v-else @click.stop="onCancel()">Cancel</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { contactService } from '../services/contact.service.js'

const router = useRouter()
const route = useRoute()

    const contact = ref({})

    onMounted(async () => {


        // console.log('route:', route.params)
        const { id } = useRoute().params
        // console.log('id:', id)
        try {
            if (!id) {
                contact.value = contactService.getEmptyContact()
            } else {
                contact.value = await contactService.getContactById(id)
            }
        } catch (err) {
            console.error(err)
            throw err
        }
    })
    const save = async () => {
        try {
                await contactService.saveContact(contact.value)
                router.push('/contact')
            } catch (err) {
                console.error(err)
                throw err
            }
    }

    const onDelete = async () => {
        try {
                await contactService.deleteContact(contact.value._id)
                router.push('/contact')
            } catch (err) {
                console.error(err)
                throw err
            }
    }
    const onCancel = () => {
        this.contact = contactService.getEmptyContact()
    }
</script>

<style>
.contact-edit {
    padding: 20px;

    form {
        align-items: center;
        gap: 10px;
    }
    input {
        padding: 5px;
        color: #222;

    }
    img {
    width: 165px;
    margin-block-end: 10px;
    }
}

.buttons {
    gap: 20px;
    margin-block-start: 20px;
}
</style>
