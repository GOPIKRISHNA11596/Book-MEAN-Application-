import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  //private bookUrl = 'assets/api/books/books.json';

  constructor(private http : HttpClient) { }

  getBooks(): Observable<IBook[]> {
     //return this.http.get<IBook[]>(this.bookUrl).pipe(
    return this.http.get<IBook[]>('http://localhost:3000/books').pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getBook(id: number): Observable<IBook | undefined> {
    return this.getBooks()
      .pipe(
        map((books: IBook[]) => books.find(p => p.ID === id))
      );
  }

//   addBook(book : IBook[]): Observable<IBook[]> {
//    return this.http.post<IBook[]>('http://localhost:3000/books/add', Book).pipe(
//        tap((book:IBook) => console.log('Added successfully : '+book.ID)),
//        catchError(this.handleError)
//      );
//  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
