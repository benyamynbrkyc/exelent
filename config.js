const dotenv = require('dotenv')
const values = dotenv.config()

if (values.error) throw values.error

module.exports = values.parsed
