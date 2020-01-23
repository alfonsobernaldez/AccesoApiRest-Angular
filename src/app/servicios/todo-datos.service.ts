import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})

export class TodoDatosService {

  constructor(private http: HttpClient) { }

  //MANDAMOS <TAREA> EN LOS METODOS QUE NOS TIENEN QUE MANDAR ALGUN TIPO DE RESPUESTA DE TIPO "TAREA"
 getListadoCompleto() {

   const path = 'https://jsonplaceholder.typicode.com/todos';
   return this.http.get<Tarea>(path);
 }
 getTareaUnica(id: string) {

   const path = 'https://jsonplaceholder.typicode.com/todos/'+id;
   //const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
  return this.http.get<Tarea>(path);
  }
  crearTarea(t: Tarea) {
    const path = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.post(path, t);
  }
  eliminarTarea(id: string) {
    const path = 'https://jsonplaceholder.typicode.com/todos/'+id;
    return this.http.delete<Tarea>(path);

  }
  modificartarea(t: Tarea){
    const path = 'https://jsonplaceholder.typicode.com/todos/'+t.id;
    return this.http.put<Tarea>(path, t)
  }

}
