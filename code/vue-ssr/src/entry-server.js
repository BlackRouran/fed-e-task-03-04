import { createApp } from './app'

export default context => {
  const { app } = createApp()

  // 服务端处理 数据预取。。。
  return app
}