function cookieExtract(cookie) {
  let val = cookie.split("=")[1];
  let username = val.split(":")[0];
  let password = val.split(":")[1];
  return { username, password };
}

export { cookieExtract };
