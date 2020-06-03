const LOCAL_API_URL = '/translate'

// request from backend the js object then save it to data
// use that data to populate the HTML

new Vue({
  el: '#app',
  data() {
    return { text: null }
  },
  beforeCreate: async function () {
    let bosObj = await axios.get(LOCAL_API_URL + '/bos')
    this.text = bosObj.data
  },
  methods: {
    async langSwitch() {
      if (this.$refs.lang.innerText == 'BA') {
        this.$refs.lang.innerText = 'EN'
        let engObj = await axios.get(LOCAL_API_URL + '/eng')
        this.text = engObj.data
      } else {
        this.$refs.lang.innerText = 'BA'
        let bosObj = await axios.get(LOCAL_API_URL + '/bos')
        this.text = bosObj.data
      }
    },
  },
})
