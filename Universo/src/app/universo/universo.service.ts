import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Universo } from './universo';

@Injectable({
  providedIn: 'root'
})
export class UniversoService {
  
  private urlEndpoint:string="http://localhost:8080/api/planetas"

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  //buscar tareas de la base de datos
  getUniversos():Observable<Universo[]>{
    
    
   return this.http.get(this.urlEndpoint).pipe(
    map((response)=> response as Universo[])
   )
  }

  //Método de crear tarea
  create(universo:Universo):Observable<Universo>{
      return this.http.post<Universo>(this.urlEndpoint, universo, {headers:this.httpHeaders})
  }

  //Método de editar tarea
  getUniverso(id: number):Observable<Universo>{
    return this.http.get<Universo>(`${this.urlEndpoint}/${id}`)
  }

  //Edición final
  update(universo: Universo):Observable<Universo>{
    return this.http.put<Universo>(`${this.urlEndpoint}/${universo.id}`, universo, {headers:this.httpHeaders})
  }

  //Eliminar
  delete(id:number):Observable<Universo>{
    return this.http.delete<Universo>(`${this.urlEndpoint}/${id}`, {headers:this.httpHeaders})
  }
}
