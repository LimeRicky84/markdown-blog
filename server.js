const express = require('express')
const ejs = require('ejs')
const Article = require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')


const app = express()

const PORT = 3001

mongoose.connect('mongodb://localhost/blog')

app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))



app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
    createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
})


app.use('/articles', articleRouter)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);