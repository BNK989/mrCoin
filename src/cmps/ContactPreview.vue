<template>
    <section v-if="contact" class="contact-preview flex column">
      <img
        :src="`https://robohash.org/${contact._id}?set=set5`"
        :alt="`${contact.name} picture`"/>
      <h3>{{ contact.name }}</h3>
    </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style>
.contact-preview {
  align-items: center;
  gap: 1em;
  border-start-start-radius: 10px;
  border-start-end-radius: 10px;
}

img {
  width: 40%;
  height: 40%;
}

</style>