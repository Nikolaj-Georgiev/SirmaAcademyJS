const express = require('express');
const testMiddleware = require('./middleWares/testMiddleware.js');
const loggerMiddleware = require('./middleWares/loggerMiddleware.js');
const handlebars = require('express-handlebars');


const movies = [
  { id: '1', title: 'Lord of the Rings', img: '/img/movie.avif', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio expedita tempore, optio aliquid maxime minima beatae dolore doloribus deleniti!' },
  { id: '2', title: 'Harry Potress', img: '/img/movie.avif', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio expedita tempore, optio aliquid maxime minima beatae dolore doloribus deleniti!' },
  { id: '3', title: 'Man og steal', img: '/img/movie.avif', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio expedita tempore, optio aliquid maxime minima beatae dolore doloribus deleniti!' },
  { id: '4', title: 'Babaluga', img: '/img/movie.avif', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio expedita tempore, optio aliquid maxime minima beatae dolore doloribus deleniti!' },
]

const books = [
  { id: '1', title: 'The Expanse', img: '/img/book.jpg', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio expedita tempore, optio aliquid maxime minima beatae dolore doloribus deleniti!' },
  { id: '2', title: 'The Three Body Problem', img: '/img/book.jpg', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio expedita tempore, optio aliquid maxime minima beatae dolore doloribus deleniti!' },
  { id: '3', title: 'Mort', img: '/img/book.jpg', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio expedita tempore, optio aliquid maxime minima beatae dolore doloribus deleniti!' },
]

const app = express();



//инстанция на нашия експрес. Обектът, който представлява нашия сървър

app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutDir: __dirname + 'views/layouts'
}))
app.set('view engine', 'hbs');

// app.use(testMiddleware);
app.use(express.static('public'));
app.use(loggerMiddleware);
// app.use('/users', loggerMiddleware);//това ще работи само за рикуести, които започват с /users; супер ценно, за аутентикация


app.get('/', (req, res) => {
  res.render('home', { title: 'Movie list', items: movies, baseUrl: 'movies', });
  // res.end();
});//N.B.

app.get('/movies/:movieId', (req, res) => {
  const currentMovie = movies.find(movie => movie.id === req.params.movieId);

  res.render('details', currentMovie)
})

app.get('/books', (req, res) => {

  // res.render('home', { layout: false, title: 'Books list', movies: movies });
  res.render('home', {
    title: 'Books list',
    items: books,
    message: 'read those books!!',
    baseUrl: 'books',
  });
});

app.get('/books/:bookId', (req, res) => {
  const currentBook = books.find(book => book.id === req.params.bookId);

  res.render('details', currentBook)
})
app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  console.log(username);
  res.send(`Username is: ${username}`);
});

app.get('data/img', (req, res) => {
  res.download('./public/img/cute.avif');

});

//има сепарация на ендпоинти
app.get('/test', (req, res) => {
  console.log('Testing');
  res
    .status(201)
    .send('Testing express server')
    .end();
});



app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));//on port 5000;