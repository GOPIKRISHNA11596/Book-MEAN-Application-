const mongoose = require('mongoose');
const Book = new mongoose.Schema({
ID: {
  
  type: Number
 },
BookName: {
  type: String
 },
AuthorName: {
  type: String
 },
 Category: {
  type: String
 },
Price: {
  type: String
 },
});
module.exports = mongoose.model('books',Book);