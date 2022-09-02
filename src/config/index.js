require('dotenv').config({ path: '.env.local' })

let { appid, secret, touser, template_id } = process.env

module.exports = {
  // 微信测试公众号
  params: {
    // 测试号信息
    appid,
    secret,
    // 微信号
    touser,
    // 模板ID
    template_id
  },
  // 纪念日
  start_day: '2021/2/4',
  // 每日发送时间
  send_hour: 7,
  send_minute: 30,
  // 获取每日情话链接
  chp_url: 'https://api.shadiao.pro/chp',
  // 获取天气链接
  weather_url: 'https://tianqi.moji.com/weather/china/hunan/changsha',
  // 模板数据
  list_config: {
    nowDate: {
      value: '',
      color: '#87e8de'
    },
    city: {
      value: '',
      color: '#9CA2A0'
    },
    proposal: {
      value: '',
      color: '#7CD47D'
    },
    temperature: {
      value: '',
      color: '#CBA476'
    },
    loveDate: {
      value: '',
      color: '#ff9c6e'
    },
    loveWords: {
      value: '',
      color: '#3C4244'
    }
  }
}
