import { Injectable } from '@angular/core';
import { Login, ResponseLogin } from '../interfaces/tomas';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TomasService {

  private url: string;

  constructor( 
    private http :HttpClient
  ) {

    this.url = 'https://portalweb.sapalapaz.gob.mx/api/mobile/token';

  }



  loginByEmail(form:Login):Observable<ResponseLogin>{

    let direccion = this.url  
    return this.http.post<ResponseLogin>(direccion,form);

  } 

}
