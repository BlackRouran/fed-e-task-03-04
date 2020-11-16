const Vue = require('vue')
const express = require('express')
const fs = require('fs')

const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync('./index.template.html', 'utf-8')
})


const server = express()

server.get('/', (req, res) => {
    const app = new Vue({
        template: `
        <div id="app">{{msg}}</div>
         `,
         data: {
             msg: '就会看看环境'
         }
    })

    renderer.renderToString(app, (err, html) => {
        if(err) {
            return res.status(500).end('Internal Server Error')
        }
        res.setHeader('Content-Type', 'text/html; charse t=utf8')
        res.end(html)
    })
})
server.listen(3000, () => {
    console.log('server is running port 3000')
})



