<template>
    <!-- <ul class="contact-list" @remove="onRemoveContact"> -->
    <TransitionGroup class="contact-list" name="list" mode="out-in" tag="ul">
        <li v-for="contact in contacts" :key="contact._id">
            <ContactPreview :contact="contact" />
            <div class="user-actions flex">
                <button @click="onRemoveContact(contact._id)">Delete</button>
                <RouterLink :to="`/contact/${contact._id}`">
                    <button>Details</button>
                </RouterLink>
                <RouterLink :to="`/contact/edit/${contact._id}`">
                    <button>Edit</button>
                </RouterLink>
            </div>
        </li>
    </TransitionGroup>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        },
    },
    components: {
        ContactPreview,
    },
    methods: {
        onRemoveContact(id) {
            this.$emit('remove', id)
        },
    },
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
.contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 35px;
    margin-block-end: 35px;

    li {
        background-color: #0000000f;
        border-radius: 8px;
    }

    .user-actions {
        padding: 1em;

        button {
            padding-inline: 2vw;
        }
    }
}

.user-actions {
    justify-content: space-between;
    align-items: center;
    gap: 3px;
    padding-block-start: 20px;
}

.user-actions button {
    transition: 0.4s ease-in-out;
}
.user-actions button:hover {
    scale: 1.1;
}

@media (min-width: 1180px) {
    .contact-list {
        grid-template-columns: repeat(auto-fit, minmax(250px, 500px));
    }
}
</style>
