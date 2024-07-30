import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"
import { getStorage } from "firebase/storage"

import { getDatabase } from "firebase/database";
export default defineNuxtPlugin(nuxtApp => {
    // const config = useRuntimeConfig()
    // const { firebase } = config.public
   
    // const app = initializeApp({...firebase})
    // const analytics = getAnalytics(app)
    // const auth = getAuth(app)
    // const firestore = getFirestore(app)
    // const storageRef = getStorage(app)
    // const rdb = getDatabase(app)
    // nuxtApp.vueApp.provide('storageRef', auth)
    // nuxtApp.provide('storageRef', storageRef)

    // nuxtApp.vueApp.provide('rdb', rdb)
    // nuxtApp.provide('rdb', rdb)

    // nuxtApp.vueApp.provide('auth', auth)
    // nuxtApp.provide('auth', auth)

    // nuxtApp.vueApp.provide('db', firestore)
    // nuxtApp.provide('db', firestore)
    // nuxtApp.vueApp.provide('analytics', analytics)
    // nuxtApp.provide('analytics', analytics) 
})