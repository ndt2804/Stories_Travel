import express from 'express';
const app = express()
const port = 3001;

app.get('/', function (req, res) {
    res.send('Toi la Haneko')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});