import { getTokenStorage } from "./GlobalService.js"

export const POST_LOGIN = () => {
  return {
    method: "POST",
    body: BODY_CREDENTIALS(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  }
}

export const BODY_CREDENTIALS = () => {
  return new URLSearchParams ({
    'client_id': 'sgi-client',
    'grant_type': 'password',
    'client_secret': 'WdtDmKc27cnIziEWYrTzJEcCk2gEplS1',
    'scope': 'openid',
    'username': 'default',
    'password': '123'
  })
}

export const GET = () => {
  return {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    }
  }
}

export const PUT = (event) => {
  return {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(event),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getTokenStorage()}`,
    }
  }
}

export const POST = (event) => {
  return {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(event),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getTokenStorage()}`,
    }
  }
}

export const DELETE = () => {
  return {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getTokenStorage()}`,
    }
  }
}