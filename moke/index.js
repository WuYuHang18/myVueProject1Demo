import Mock from 'mockjs'
Mock.mock('/user/test', 'get', {
  code: 200,
  data: {
    'name|1-10': '*'
  }
})
