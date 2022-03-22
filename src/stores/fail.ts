import { defineStore } from 'pinia'

export const useFailStore = defineStore('fail', {
  state: (): any => {
    return {
      complexArr: [
        {
          deeper: {
            hey: 0
          }
        },
      ],
    }
  },

  actions: {
    wipeComplexArr() {
      this.complexArr = []
    },
  },

  getters: {
    getFirstComplexArrHey: (state) : any =>
      state.complexArr[0].deeper.hey,
  },
})
