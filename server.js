const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/oteller', (req, res) => {
    const dbPath = path.join(__dirname, 'database.json');
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            console.error("database.json dosyası okunurken hata oluştu:", err);
            res.status(500).json({ error: "Veri okunurken sunucuda bir hata oluştu." });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});