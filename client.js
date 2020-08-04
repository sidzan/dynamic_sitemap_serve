const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/sitemap', (req, res) => {
    res.status(200).json({
        data: `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://melons.co/en/</loc>
                <changefreq>hourly</changefreq>
            </url>
        </urlset>`
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
