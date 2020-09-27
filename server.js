require("dotenv").config()
const express = require("express")
const next = require("next")
const WooCommerceAPI = require("woocommerce-api")
const wooConfig = require("./wooConfig")

const WC = new WooCommerceAPI({
    url: wooConfig.siteUrl,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    wpAPI: true,
    version: "wc/v2"
})

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.get("/products", (request, response) => {
        WC.get("products", function(err, data, res) {
            response.json(JSON.parse(res))
        })
    })
    server.get("*", (req, res) => {
        return handle(req, res)
    })
    server.listen(3000, err => {
        if (err) throw err
        console.log("> Ready on http://localhost:3000")
    })
})
.catch(ex => {
    console.error(ex.stack)
    process.exit(1)
})