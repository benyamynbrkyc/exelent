new Vue({
  el: '#app',
  data: {
    text: {
      contact: '',
      hero: [undefined],
      emailForm: [undefined],
      contactFooter: [undefined]
    },
    currentYear: new Date().getFullYear()
  },
  beforeCreate: async function () {
    let bosObj = await axios.get('/translate/bos/contact')
    this.text = bosObj.data
  },
  methods: {
    async langSwitch() {
      if (this.$refs.langIndicator.innerText == 'BA') {
        let engObj = await axios.get('/translate/eng/contact')
        this.text = engObj.data
        this.$refs.langIndicator.innerText = 'EN'
      } else {
        let bosObj = await axios.get('/translate/bos/contact')
        this.text = bosObj.data
        this.$refs.langIndicator.innerText = 'BA'
      }
    },
    scrollToContactForm() {
      if (window.innerHeight < 900) {
        if (window.innerHeight < 300) {
          window.scrollBy(0, 700)
        }
        window.scrollBy(0, 500)
      } else {
        window.scrollBy(0, 300)
      }
    }
  }
})
