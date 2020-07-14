export interface IBook{
  ID : number;
  BookName : string;
  AuthorName : string;
  Category : string;
  Price : string;
  imageUrl : string;
 }

// export class BookPojo{
//   private Books : IBook;

//   get ID () : number{
//     return this.Books.ID;
//   }
//   set ID(ID : number){
//     this.Books.ID = ID;
//   }

//   get BookName() : string{
//     return this.Books.BookName;
//   }
//   set BookName(BookName : string){
//     this.Books.BookName = BookName;
//   }

//   get AuthorName() : string{
//     return this.Books.AuthorName;
//   }
//   set AuthorName(AuthorName : string){
//     this.Books.AuthorName = AuthorName;
//   }

//   get Category() : string{
//     return this.Books.Category;
//   }
//   set Category(Category : string){
//     this.Books.Category = Category;
//   }

//   get Price() : string{
//     return this.Books.Price;
//   }
//   set Price(Price : string){
//     this.Books.Price = Price;
//   }

//   get imageUrl() : string{
//     return this.Books.imageUrl;
//   }
//   set imageUrl(imageUrl : string){
//     this.Books.imageUrl = imageUrl;
//   }


// }
