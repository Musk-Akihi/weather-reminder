const { params, send_hour, send_minute, list_config } = require('./config')
const getToken = require('./getToken/index')
const getAllDataAndSend = require('./sendMessage/index')
const schedule = require('node-schedule') //定时器任务库

async function start() {
  let access_token = null

  try {
    access_token = await getToken(params)
  } catch (error) {
    process.exit(0)
  }

  getAllDataAndSend({
    ...params,
    access_token
  })
    .then(res => {
      if (res.data && res.data.errcode) {
        console.error('发送失败', res.data)
        return
      }
      console.log(list_config)
      console.log('👻👻👻👻👻👻👻👻👻👻')
      console.log('发送成功-请在微信上查看对应消息')
    })
    .catch(err => console.error('发送失败', err))
}

// node-schedule 定时任务处理
let rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [0, new schedule.Range(1, 6)]
rule.hour = send_hour
rule.minute = send_minute
console.log('message: 开始等待目标时刻...')
schedule.scheduleJob(rule, function () {
  console.log('执行任务')
  start()
})
