let axios = require('axios')
const { chp_url } = require('../config')
const getContent = async () => {
  let { data } = await axios({
    url: chp_url
  })
  return data
}

module.exports = {
  getContent
}
