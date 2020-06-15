new Vue({
  el: '#emailShortcut',
  data: { currentYear: new Date().getFullYear() },
  methods: {
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

new Vue({
  el: '#footer',
  data: {
    currentYear: new Date().getFullYear()
  }
})
