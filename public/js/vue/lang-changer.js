const LOCAL_API_URL = 'http://localhost:3001/translate';

// request from backend the js object then save it to data
// use that data to populate the HTML

new Vue({
  el: '#app',
  data() {
    return { text: null };
  },
  beforeCreate: async function () {
    let bosanskiObj = await axios.get(LOCAL_API_URL + '/bosanski');

    this.text = bosanskiObj.data;
  },
});
