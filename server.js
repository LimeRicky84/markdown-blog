const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

const app = express()

const PORT = 3001

mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))



app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'test description'

    },{
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'test description 2'

    }]
    res.render('articles/index', {articles: articles })
})


app.use('/articles', articleRouter)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);