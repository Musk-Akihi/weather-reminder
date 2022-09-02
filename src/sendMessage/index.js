let axios = require('axios')
const { list_config, start_day } = require('../config')
const { getContent } = require('./getContent')
const { getWeatherTips, getWeatherData } = require('./getWeatherContent')
const week = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '天'
}

const getAllDataAndSend = param => {
  let today = new Date()
  let initDay = new Date(start_day)
  let lastDay = Math.floor((today - initDay) / 1000 / 60 / 60 / 24) + 1
  let todaystr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const weekDay = today.getDay()
  list_config.loveDate.value = lastDay
  list_config.nowDate.value = `今天是${todaystr}，星期${week[weekDay]}啦`

  return Promise.all([getContent(), getWeatherTips(), getWeatherData()]).then(data => {
    list_config.loveWords.value = data[0].data.text
    const { WeatherText, Temperature, WindDirection } = data[2]
    list_config.proposal.value = `${WeatherText}，${WindDirection}，${data[1].weatherTip}`
    list_config.temperature.value = Temperature
    list_config.city.value = data[1].city
    return sendMessage(param, list_config)
  })
}

function sendMessage(data, list_config) {
  return data.touser.map(item => {
    axios.post(
      'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=' + data.access_token,
      {
        touser: item,
        template_id: data.template_id,
        data: list_config || {}
      }
    )
  })
}

module.exports = getAllDataAndSend
