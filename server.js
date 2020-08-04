const express = require('express')
const Prettify = require("prettify-xml");
const p = require('phin')

const app = express()
const port = 4000

/*
response from http://localhost:3001/sitemap is following
{
        data: `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://melons.co/en/</loc>
                <changefreq>hourly</changefreq>
            </url>
        </urlset>`
}*/

app.get('/sitemap.xml', async (req, res) => {
    const file = await p('http://localhost:3001/sitemap')
    const body = JSON.parse(file.body);

    const data = Prettify(body.data, {indent: 2, newline: "\n"});

    res.header('Content-Type', 'application/xml');
    res.send(data);
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
