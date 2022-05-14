const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.get('/', async function (_, res) {
  res.send(`helloooooooo`)
})

app.get('/ip', async function (_, res) {
  const response = await fetch('https://curlmyip.org')
  const ip = await response.text()
  const html = `<pre style="font-size: 20px;word-wrap: break-word; white-space: pre-wrap;">${ip}</pre>`
  res.send(html)
})

app.listen(8080, () => {
  console.log(`listening at http://localhost:${8080}`)
})
