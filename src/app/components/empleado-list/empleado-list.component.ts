import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    {legajo:1, nombre:'juan', apellido:'perez', sexo:'Masculino', salario:300},
    {legajo:2, nombre:'maria', apellido:'borjas', sexo:'Femenino', salario:200},
    {legajo:3, nombre:'jose', apellido:'ortiz', sexo:'Masculino', salario:300},
    {legajo:4, nombre:'luis', apellido:'carlos', sexo:'Masculino', salario:400},
    {legajo:5, nombre:'erica', apellido:'eloisa', sexo:'Femenino', salario:200},
    {legajo:6, nombre:'luisa', apellido:'caceres', sexo:'Femenino', salario:350},
    {legajo:7, nombre:'karla', apellido:'fortin', sexo:'Femenino', salario:400}
  ] 

  radioButtonSeleccionado = 'Todos';
  constructor() { }

  ngOnInit(): void {
  }


  obtenerTotalEmpleados():number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos():number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }
  obtenerTotalMasculinos():number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelecc: string):void{
    this.radioButtonSeleccionado = radioButtonSelecc;
  }
}
