new Vue({
  el: '#app',
  data: {
    text: {
      contact: '',
      hero: [undefined],
      isaErpIntro: [undefined],
      modules: [undefined],
      law: [undefined],
      general: [undefined],
      generalTitle: [undefined],
      generalBody: [undefined],
      contactFooter: [undefined]
    },
    currentYear: new Date().getFullYear()
  },
  beforeCreate: async function () {
    let bosObj = await axios.get('/translate/bos/isa-erp')
    this.text = bosObj.data
  },
  methods: {
    async langSwitch() {
      if (this.$refs.langIndicator.innerText == 'BA') {
        let engObj = await axios.get('/translate/eng/isa-erp')
        this.text = engObj.data
        this.$refs.langIndicator.innerText = 'EN'
      } else {
        let bosObj = await axios.get('/translate/bos/isa-erp')
        this.text = bosObj.data
        this.$refs.langIndicator.innerText = 'BA'
      }
    },
    scrollDown() {
      let element = document.querySelector('#isa-erp-intro')
      // smooth scroll to element and align it at the bottom
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
})
