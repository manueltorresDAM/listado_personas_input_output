import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = "";
  apellidoInput: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  onAgregarPersona() {
    if (this.nombreInput.length === 0) {
      console.log("nombre vacio");
      return;
    }
    if (this.apellidoInput.length === 0) {
      console.log("apellido vacio");
      return;
    }
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona);
  }
}