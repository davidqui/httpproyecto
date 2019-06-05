import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  obtenerTodosLosUsuarios(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/user/");
  }
  agregarUsuario(user: any){
    let json = JSON.stringify(user);

    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.httpClient.post("http://localhost:8080/user/", json,{headers: headers} );
  }
  eliminarUser(identificador): Observable<any>{
    return this.httpClient.delete("http://localhost:8080/user/"+ identificador);
  }
}
