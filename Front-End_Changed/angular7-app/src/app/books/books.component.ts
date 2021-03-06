import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';
import { Router} from '@angular/Router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  pageTitle : string = 'Book List';
  imageWidth : number = 50;
  imageMargin : number = 2;
  errorMessage : string;

  filteredBooks : IBook[];
  Books : IBook[];

  //bookPojo : BookPojo  = new BookPojo();

  constructor(private bookService : BookService,
              private router : Router) {
    this._listFilter = '';
  }

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.Books;
  }

  ngOnInit(): void {
     this.bookService.getBooks().subscribe({
      next : books => {
        this.Books = books;
        this.filteredBooks = books;
      },
      error : err => this.errorMessage = err
    })
    this.filteredBooks = this.Books;
  }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Books.filter((book: IBook) =>
      book.BookName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  addBook() : void {
    this.router.navigate(['/add']);
  }

}
