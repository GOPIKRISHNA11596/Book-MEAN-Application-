import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { BookService } from './book.service';
import { IBook } from './book';



@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  pageTitle = 'Add New Book ';
  errorMessage : string;
  filteredBooks : IBook[];
  Books : IBook[];


  constructor(private bookService : BookService,
              private router : Router) { }

  ngOnInit(): void {
    
  }

  onSave() : void{
    this.router.navigate(['/books']);
  }

}
