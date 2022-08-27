import express from 'express'

import entity from './routes/entity'

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/api/test-soyyo', entity)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})