import { Injectable } from '@angular/core';
import { Login, ResponseLogin, Tomas } from '../interfaces/tomas';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TomasService {

  private url: string;
  private appUrl: string;
  private apiUrl : string;
  constructor( 
    private http :HttpClient
  ) {

    this.url = 'https://portalweb.sapalapaz.gob.mx/api/mobile/token';
    this.appUrl = 'https://portalweb.sapalapaz.gob.mx/';
    this.apiUrl = 'api/tomas';

  }

  loginByEmail(form:Login):Observable<ResponseLogin>{

    let direccion = this.url  
    return this.http.post<ResponseLogin>(direccion,form);

  } 

  getTomas():Observable<Tomas[]>{

    let token = localStorage.getItem('token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return this.http.get<Tomas[]>(  (this.appUrl + this.apiUrl), options )

  }

  deleteToma( id:number ):Observable<void>{

    let token = localStorage.getItem('token')

    const options ={
      method:'GET',
      headers:{
        Authorization:  `Bearer ${token}`
      }
    }

    return this.http.delete<void>( ((this.appUrl + this.apiUrl)+"/"+ id  ), options  )
  }





}
