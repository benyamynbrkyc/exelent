// const LOCAL_API_URL = '/translate'

new Vue({
  el: '#app',
  data: {
    text: { navbar: [undefined], hero: [undefined], ici: [undefined] },
    currentYear: new Date().getFullYear()
  },
  beforeCreate: async function () {
    let bosObj = await axios.get('/translate/bos')
    this.text = bosObj.data
  },
  methods: {
    async langSwitch() {
      if (this.$refs.langIndicator.innerText == 'BA') {
        let engObj = await axios.get('/translate/eng')
        this.text = engObj.data
        this.$refs.langIndicator.innerText = 'EN'
      } else {
        let bosObj = await axios.get('/translate/bos')
        this.text = bosObj.data
        this.$refs.langIndicator.innerText = 'BA'
      }
    }
  }
})
