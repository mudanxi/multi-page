import React from 'react'
import queryString from 'query-string';
import eventProxy from 'utils/eventProxy'

export const _params = (json = {}) => {
	if ("object" !== typeof json) {
		console.log("请传入一个对象参数");
	}
	return Object.keys(json)
		.reduce( (prev, cur, index) => {
			return prev += `&${encodeURIComponent(cur)}=${encodeURIComponent(json[cur])}`;
		}, "")
}

const REQUEST_FAILURE_EXEPTION = 'REQUEST_FAILED'

// function RequestFailureException(code = 999999, message) {
//   this.message = message
//   this.name = REQUEST_FAILURE_EXEPTION
//   this.code = code
// }

function handleResponse (response) {
  if (response.status >= 200 && response.status < 300) {
    return response.status === 204 ? {} : response.json()
  }
  return response.json().then((r) => {
    const code = r.code
    throw eventProxy.trigger('error::popup', r.message)
  })
}

export const get = (url, cbfn) => {
    const config = {
			method:      "GET",
			credentials: "same-origin",
			headers: {
				"Accept":           "application/json",
        "Content-Type":     "application/json",
        'X-Requested-With': 'XMLHttpRequest'
			}
    };
    return fetch(url, config)
    .then(handleResponse)
    .then((result) => {
      // console.log(result)
      if (result.code > 0 || result.code < 0) {
        if (cbfn) {
          return cbfn('error', result.message)
        }
        return eventProxy.trigger('error::popup', result.message);
      }
      if (result.timeout) {
        if (cbfn) {
          return cbfn('error', '请求超时')
        }
        return eventProxy.trigger('error::popup', '请求超时');
      }
      return result
    }).catch((error) => {
      console.log('There has been a problem with your fetch operation: ' + error)
      return eventProxy.trigger('error::popup',error.message);
    })
}

export const post = (url, data, cbfn) => {
    data[SYS_CFG.csrf_token_name] = SYS_CFG.csrf_hash;
		const config= Object.assign({
			method: "POST",
			credentials: 'same-origin',
			headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: queryString.stringify(data)
		});
    return fetch(url, config)
    .then(handleResponse)
    .then((result) => {
      console.log(result)
      if (result.code > 0) {
        if (cbfn) {
          return cbfn('error', result.message)
        }
        return eventProxy.trigger('error::popup', result.message);
      }
      if (result.timeout) {
        if (cbfn) {
          return cbfn('error', '请求超时')
        }
        return eventProxy.trigger('error::popup', '请求超时');
      }
      return result
    }).catch((error) => {
      console.log('There has been a problem with your fetch operation: ' + error)
      return eventProxy.trigger('error::popup',error.message);
    })
}
