import { Component } from '@angular/core';
import { TodoDatosService } from './servicios/todo-datos.service';
import { Tarea } from './interfaces/tarea';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = null;
  tareita = null;
  idtarea: string;
  title = 'AccesoApiRest';
  t: Tarea = {userId: '5' , id: '', title: 'ojo cuidao', completed: false};

constructor(private ts: TodoDatosService){
  this.idtarea = '';
}

verListadoCompleto() {

  // tslint:disable-next-line: no-unused-expression
  this.ts.getListadoCompleto().subscribe(tareas => {this.tareas = tareas});

  }
  verTareaUnica() {
    this.ts.getTareaUnica(this.idtarea).subscribe(tarea => {this.tareita=tarea});

  }
  crearNuevaTarea() {
    this.ts.crearTarea(this.t).subscribe(ntarea => {console.log(ntarea)});
  }
  eliminarTarea(){
    this.ts.eliminarTarea('3').subscribe(tarea => {console.log('objeto borrado')});

  }
  modificarTarea(){
    this.t = {id: '20', userId: '2', title: 'Tarea Modificada', completed: true};
    this.ts.modificartarea(this.t).subscribe(ntarea => {console.log("modificado correctamente")});
  }
}
