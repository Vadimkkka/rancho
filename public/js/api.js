const apiUrl = window.location.origin+'/';
// 'http://localhost:3000/'

// let cache = {};
const request = async (route='', params = {}, method = "GET") => {
  // let cacheKey = JSON.stringify({ url, params, method });
  // if (cache[cacheKey]) {
  //   return cache[cacheKey];
  // }
  let url = apiUrl
  const options = { 
    method, 
    headers: {
      'Content-Type': 'application/json' 
    } 
  }
  url += route
  if ("GET" === method) {
    url += "?" + new URLSearchParams(params).toString()
  } else {
    options.body = JSON.stringify(params)
  }
  const result = await fetch(url, options)
  if (!result.ok) return null
  return await result.json()
}

const get = async (method, params) => await request(method, params, "GET")
const post = async (method, params) => await request(method, params, "POST")
const remove = async (method, params) => await request(method, params, "DELETE")
const update = async (method, params) => await request(method, params, "PUT")
