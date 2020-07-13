const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const books = require('./books.model.js');
const router = express.Router();
require ('./connection.js');
var morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('tiny'));

 
app.use(cors()); //To connect to front end

app.get('/', (req, res) => res.send('Hello World Gopi'));

//To Add a Book
// router.route('/books/add').post((req, res) => { 
app.post('/books/add',(req, res) => { 

    var book = new books(req.body);
    book.save()
        .then(book => {
            res.status(200).json({'book': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

//To get all books
// router.route('/books').get((req, res) => {
    app.get('/books',(req, res) => {
    books.find((err, books) => {
        if (err)
            console.log(err);
        else
            res.json(books);
    });
});

//To get book by ID
//router.route('/books/view/:id').get((req, res) => {
app.get('/books/:id',(req, res) => {
    var id = req.params.id;
    books.findOne({ID:id}, (books, err) => {
           if (err){
               res.json(err);
           }
           else
            res.json(books);              
       });
   })

//To delete a book by ID   
//router.route('/books/delete/:id').get((req, res) => {
app.delete('/books/delete/:id', (req, res) => {       
    var id = req.params.id;
    books.findOne({ID:id}, (err, books) => {
           if (err){
               res.json(err);
           }
           else
            books.remove(function(err){
             res.json('Removed successfully');
            });
               
       });
   }); 
/*
//To delete a book by ID 
app.get('/books/delete/:id',(req, res) => {       
    var id = req.params.id;
    books.findOne({ID:id}, (err, books) => {
           if (err){
               res.json(err);
           }
           else
            books.remove(function(err){
             res.json('Removed successfully');
            });
               
       });
   });  
*/

/*Update book by ID*/
// router.route('/books/update/:id').post((req, res) => { 
app.post('/books/update/:id', (req, res) => {
    var id = req.params.id;
    books.findOne({ID:id}, (err, books) => {
        if (err){
            res.json(err);
        }
        else {
         console.log(books.ID,'hi',req.body.BookName);
            books.ID = req.body.ID;
            books.BookName = req.body.BookName;
            books.AuthorName = req.body.AuthorName;
            books.Category = req.body.Category;
            books.Price = req.body.Price;
            books.save().then(books => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

app.listen(3000, () => console.log(`Express server running on port 3000`));
