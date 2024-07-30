import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      role: "",
      store: "",
      nik: "",
      dataoncom: null,
      posisi: "",
      email: "",
      displayName: ""
    }
  },
  getters: {
    getnik(state) {
      return state.nik
    },
    getEmail(state) {
      return state.email
    },
    getUser(state) {
      return state.user
    },
    getstore(state) {
      return state.store
    },
    getrole(state) {
      return state.role
    },
    getposisi(state) {
      return state.posisi
    },
    getdisplayname(state) {
      return state.displayName
    }

  },
  actions: {
    async setOncom(data: any) {
      this.dataoncom = data
      return this.dataoncom
    },
    async setNik(nik: string) {
      this.nik = nik
      return this.nik
    },
    async setRole(role: string) {
      this.role = role
      return this.role
    },
    async setStore(store: string) {
      this.store = store
      return this.store

    },
    async setPosisi(posisi: string) {
      this.posisi = posisi
      return this.posisi
    },
    async setUser(user: any) {
      console.log('setuser')
      this.user = user
      return this.user
    },
    async setEmail(email: any) {
      this.email = email
    },
    async setDisplayname(name: any) {
      this.displayName = name
    }

  }
})