import { baseUrl } from './config'

export const fetchNoToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`

  if (method === 'GET') {
    const resp = await fetch(url)
    return await resp.json()
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await resp.json()
  }
}

export const fetchWithToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`

  if (method === 'GET') {
    const resp = await fetch(url, {
      headers: {
        'x-token': localStorage.getItem('token') || '',
      },
    })
    return await resp.json()
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem('token') || '',
      },
      body: JSON.stringify(data),
    })
    return await resp.json()
  }
}
