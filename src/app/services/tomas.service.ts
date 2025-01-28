import { Injectable } from '@angular/core';
import { AgregarToma, Login, ResponseLogin, Tomas } from '../interfaces/tomas';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TomasService {

  private url: string;
  private appUrl: string;
  private apiUrl : string;
  private urlRecibo: string;

  constructor( 
    private http :HttpClient
  ) {

    this.url = 'https://portalweb.sapalapaz.gob.mx/api/mobile/token';
    this.appUrl = 'https://portalweb.sapalapaz.gob.mx/';
    this.apiUrl = 'api/tomas';
    this.urlRecibo = 'https://portalweb.sapalapaz.gob.mx/api/recibo';
  }

  loginByEmail(form:Login):Observable<ResponseLogin>{

    let direccion = this.url  
    return this.http.post<ResponseLogin>(direccion,form);

  } 

  getTomas():Observable<Tomas[]>{

    let token = sessionStorage.getItem('token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return this.http.get<Tomas[]>(  (this.appUrl + this.apiUrl), options )

  }

  deleteToma( id:number ):Observable<void>{

    let token = sessionStorage.getItem('token')

    const options ={
      method:'GET',
      headers:{
        Authorization:  `Bearer ${token}`
      }
    }

    return this.http.delete<void>( ((this.appUrl + this.apiUrl)+"/"+ id  ), options  )
  }

  agregarUsuario( form: AgregarToma  ):Observable<void>{

    let token = sessionStorage.getItem('token')

    const options = {
      method:'GET',
      headers:{
        Authorization:`Bearer ${token}`
      }
    }

    return this.http.post<void> ((this.appUrl + this.apiUrl), form, options ) 

  }

  verMas( claveUsuario:number ):Observable<any>{

    let token = sessionStorage.getItem('token')

    const options = {
      method: 'GET',
      headers:{
        Authorization: `Bearer ${token}`
      }
    }    

    return this.http.get< any[] >( (this.appUrl + this.apiUrl + '/' + claveUsuario), options );


  }


  getMasTomas( id:number ):Observable< any >{

    let miStorage = window.sessionStorage['token'];

    const options = {
      method: 'GET',
      headers:{
        Authorization: `Bearer ${miStorage}`
      }
    }

    return this.http.get< any[] >( (this.appUrl + this.apiUrl + '/' + id), options );
  }

  getRecibos(id: string, mes:number): Observable<Blob> {
    const token = window.sessionStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get(`${this.urlRecibo}/${id}/${mes}`, {
      headers: headers,
      responseType: 'blob' // This ensures the response is treated as a binary Blob
    });
  }



}


