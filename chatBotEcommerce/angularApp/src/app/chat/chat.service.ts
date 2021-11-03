import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from "@angular/common/http";
import { TextMessage } from '../model/text-messsage.model';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    })
  };


getRebotResponse(textMessage: TextMessage): Observable<TextMessage> {
  return this.http.post<TextMessage>("http://localhost:8080/chat", textMessage, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}
 
  /*sendMessage(textMessage: TextMessage){
    var reqBody = {
      "projectId": environment.dialogflow.projectId,
      "requestText": textMessage.text
    }
   
    return this.http.post(environment.backend.requestTextUrl, reqBody, this.httpOptions);
  }*/
}