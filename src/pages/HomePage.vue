<template>
    <section v-if="user" class="home-page">
        <h1>
            Hello, <span>{{ user.name || 'Mr. you' }}</span>
        </h1>
        <img
                :src="`https://robohash.org/${user.name || 'Mr-you'}?set=set5`"
                :alt="`user picture`" />
        <p class="date">Updated to {{ date }}</p>
        <p class="flex"><span class="balance"></span>{{ user.balance }}</p>
        <p class="flex"><span class="bitcoin"></span>{{ rate }}</p>
        <div class="flex pinia-demo">
            <button @click="piniaStore.diff(1)">+</button>
            <span>{{ piniaStore.count }}</span>
            <button @click="piniaStore.diff(-1)">-</button>
        </div>
    </section>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { userService } from '../services/user.service.js'
import { bitcoinService } from '../services/bitcoin.service.js'
import { useStore } from 'vuex'

import { usePiniaStore } from '../store/PiniaStore.js'

const piniaStore = usePiniaStore()
// retrun piniaStore

// export default {
    // setup(){

        const store = useStore()
        
        const rate = ref(null) 
        const date = computed(() => new Date().toDateString())
        const user = computed(() => store.getters.user)

        onMounted(async () => {
            try {
                rate.value = await bitcoinService.getRate(user.value.balance)
            } catch (err) {
                console.error(err)
                throw err
            }
        })

        // return {
        //     rate,
        //     date,
        //     user
        // }
    // }
// }


//     data() {
//         return {
//             rate: null,
//         }
//     },
//     async created() {
//         try {
//             this.rate = await bitcoinService.getRate(this.user.balance)
//         } catch (err) {
//             console.error(err)
//             throw err
//         }
//     },
//     computed: {
//         date() {
//             return new Date().toDateString()
//         },
//         user() {
//             return this.$store.getters.user
//         },
//     },
// }
</script>

<style>
.pinia-demo{
    margin: 2em 0;
    padding: 1.5em;
    border-radius: 1em;
    gap: 2em;
    justify-items: center;
    align-items: center;

    background-color: rgba(var(--myBg), .2);
    span{
        margin: auto;
        width: 4em;
        font-size: 1.5em;
        text-align: center
    }
}

.home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-block: 18%;
    gap: 8px;
    color: #fff;
    img{
        max-width: 15dvw;
    }
}

h1 {
    span {
        text-transform: capitalize;
    }
}

.date {
    font-size: 0.8em;
    margin-block: 1em;
}

.balance::before,
.bitcoin::before {
    font-family: fa-s;
}

.balance::before {
    content: '\f51e';
}

.bitcoin::before {
    content: '\e0b4';
}

p.flex {
    gap: 8px;
}
</style>
