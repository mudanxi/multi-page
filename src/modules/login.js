import { get, post } from 'utils/fetch'

export const logout = (cbfn) => {
  get('/login/logout', cbfn)
  .then((r) => {
    location.replace('/')
  })
}

export const login = (data, cbfn) => {
  if (typeof data === 'undefined') return false
  post('/login/login', data, cbfn)
  .then((r) => {
    if (r && r.code == 0) {
      return cbfn('success', '登录成功')
    }
    console.log(r)
      // return cbfn('success', '登录成功')
  })
}

export const changPassword = (data, cbfn) => {
  post('/setting/account/changepwd', data, cbfn)
  .then((r) => {
    if (r && r.code == 0) {
      cbfn('操作成功')
    }
  })
}
