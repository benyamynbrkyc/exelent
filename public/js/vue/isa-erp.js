// const LOCAL_API_URL = '/translate'

new Vue({
  el: '#scroll',
  data: {
    text: { navbar: [undefined], hero: [undefined], ici: [undefined] }
  },
  methods: {
    scrollDown() {
      let element = document.querySelector('#isa-erp-intro')
      // smooth scroll to element and align it at the bottom
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
})

new Vue({
  el: '#footer',
  data: {
    currentYear: new Date().getFullYear()
  }
})
