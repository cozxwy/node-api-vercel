const express = require('express')
const app = express()
const PORT = 4000
const admin = require("firebase-admin");
const keys = {
  "type": "service_account",
  "project_id": "hippyhorse-9cfdb",
  "private_key_id": process.env.keys,
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGh2sV2I8jysKt\nnnf9UaVwp0vOXAQxJHyI23bDdF4x7qeXapTN+xxMCiVf7ufmjmuFAAV8tdAjN9bJ\nKK80nH8wDO4YwimSS6lzwpwp22iqqndA8YX6BQ5uR/q1/lknfAp3FGm/k10I0jU7\nw2KQU8q9SaaoMYrdUIWjUILtITvuiVRGFST0yXaQcBGUeIGiJtyMP2CMe0BVhNal\nFpBVzuKyA6fQI5THXrc1GoZWd3n82hNDYVt6P2n9D+s9KGbH7m24TZIok4k4piKq\nJpFFjKvJoTAyA4EzgskMqS2qQoHEMWSvKxrsEn8T2e02iAu7MHslIGr0eJBkDpjB\nKDaP0anhAgMBAAECggEAAIahnwU2C43lxYi9YxVEWgjcXM0K/wk0e1iQkWGulD0R\nRPs5KW6tiVzSXX1JQF/Modg/GM7Y8p42oMDvTi/upnIbC4qV00QwF76LxstmlBjM\nXAoaMfksQRiYjq2pPHkQkO9gN5oO8rCLZEVz+DYfOT7GUrabMI/ccZl1RGLCRgwd\nZCb1XQWN+Lfq+N2vF3Fvtx8iaIm8H63XkRl5ZoY5SIG+s2+zTn+ycA3zALByn1kJ\n1jyX2/qhHs/ml0uaIFYN0fCkYxtEPmW4hGSx89AEKaZEUQzbB4CK+YpADtdRRMSn\np5kai5WgAyJaD5hoq0S/5q0/Mqr1yP5PK1+TTOzJgQKBgQD1xjKiqhc4H4rygA9d\nRK9B2jv6Tg67kN6wumLmY+E4QW5yO7KUEPRpu8JwAMSjlrPHPpG0wFSBi7YGA8El\nw+o1bXPJpoC26FhPbEdP5UY6gm/diM/uHhdgiRHkwVVEuFDlL3hHq4UqnbrNCUMx\ngg8Q5Mv7MM4yvsDXW8lT/IhDgQKBgQDOyf/ydNfTPkrRRqeOqmbOn/ygnBBviLUL\nIKc+E65jfQocwv2KG8sB53haCylaiwsZF9KjW7WFybK37J6EpWW6JvP8n1vv8AGZ\nqrWbBInWy7UflhcY11REzUu93JocTMjcEN8vMq51Ljxz4aNuJcYNfIDWrmoZ4hgB\nUpPHz+MWYQKBgQCW8prI0wSdwKm7FLHbC8NEA8AQlH5x7qEHFAKIE9IQlgc6e7XL\nQLqMcfgSiDY9buKNvb0JsZJ1WhR6jzXCdxhSph2WPQAS1pLefNczl9JRPylre4qR\nacPb03O89ozjPvzYNhZ+ljacnPFM2qJ9Nq8AJjWt2iTaf9O6sTHutkwOgQKBgQCI\nkvksFOeGaRnY5iU8IGcOCLQ9D1X7k/qegs5yPWVr5+WJ4W66jGijtVDTh5OkbTjD\nNey0X5mf5vrWZry7NtHdBGUYb9e0vHsSFqEi5Ph0mM3jMqnGilDpr/1aRBy0nDH8\nxlfhQEPguMzMbDYYRXJs7dHZ+A+zUJQyK2vXCAIfgQKBgHnwwXRXf+TOv1s19VDj\ngTNmXScOK3MDiPytuWnvC2F9UQauOvbUWPD820wR1kZb0Fpn1dSX1JVc0Bro+dA3\n8b0/nXj21oNaGze4NYxG3pOIZoPJY8BUvlJnYJy791JCNBVlcBmkRHey8wbVS+y2\nZMmQhf+o10M+lcGsuvbilGng\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-2b9z2@hippyhorse-9cfdb.iam.gserviceaccount.com",
  "client_id": "101907972370100010741",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2b9z2%40hippyhorse-9cfdb.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(keys)
});
const db = admin.firestore();


app.listen(PORT , () => {
  console.log(` API listenning at ${PORT}`)
})

app.get('/', (req,res) => {
  res.send('this my api run')
})


app.get('/about', (req,res) => {


  const docRef = db.collection('users').doc('alice');
  docRef.get()
      .then(doc => {
          if (!doc.exists) {

              res.json('No such document!');
          } else {

              res.json(doc.data());
          }
      })
      .catch(err => {
          res.json(err);
      });




})


module.exports = app