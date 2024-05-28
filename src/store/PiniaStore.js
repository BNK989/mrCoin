import {defineStore} from 'pinia'

export const usePiniaStore = defineStore('piniaStore', {
    state: () => ({
            contacts: [],
            count: 20
    }),
    actions: {

        diff(n) {
            this.count += n
        },
        async loadContacts({ filterBy }) {
            try {
                const contacts = await contactService.getContacts(filterBy)
                this.contacts = contacts
            } catch (err) {
                console.error(err)
                throw err
            }
        }
    }
})