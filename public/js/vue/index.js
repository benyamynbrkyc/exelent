// const LOCAL_API_URL = '/translate'

new Vue({
  el: '#app',
  data: {
    text: {
      contact: '',
      hero: [undefined],
      ici: [undefined],
      services: [undefined],
      portfolio: [undefined],
      contactFooter: [undefined]
    },
    currentYear: new Date().getFullYear()
  },
  beforeCreate: async function () {
    let bosObj = await axios.get('/translate/bos/index')
    this.text = bosObj.data
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        this.langSwitch()
      }
    })
  },
  methods: {
    async langSwitch() {
      if (this.$refs.langIndicator.innerText == 'BA') {
        let engObj = await axios.get('/translate/eng/index')
        this.text = engObj.data
        this.$refs.langIndicator.innerText = 'EN'
      } else {
        let bosObj = await axios.get('/translate/bos/index')
        this.text = bosObj.data
        this.$refs.langIndicator.innerText = 'BA'
      }
    }
  }
})
