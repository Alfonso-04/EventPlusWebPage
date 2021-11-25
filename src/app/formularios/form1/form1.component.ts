import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from "@angular/forms";
import { datosUsuario } from '../../datosUsuario';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  miForm:FormGroup 
  userObject : datosUsuario = new datosUsuario()
   array = [] as any;
  mostrarTabla: Boolean = false;
  constructor(private formbuilder:FormBuilder) { 
    this.miForm = this.formbuilder.group({
    txtNombre: ['', [Validators.required]],
    txtApellido: ['', [Validators.required]],
    txtCorreo: ['', [Validators.required]],
    txtTelefono: ['', [Validators.required]],
    txtProblema: ['', [Validators.required]],
    
    
    })
    

    
  }
  
  ngOnInit(): void {
    this.miForm = new FormGroup({
      txtNombre : new FormControl(''),
      txtApellido : new FormControl(''),
      txtCorreo : new FormControl(''),
      txtTelefono : new FormControl(''),
      txtProblema : new FormControl(''),

    })
    this.userObject.nombre = this.miForm.value.txtNombre;
    this.userObject.apellido = this.miForm.value.txtApellido;
    this.userObject.correo = this.miForm.value.txtCorreo;
    this.userObject.telefono = this.miForm.value.txtTelefono;
    this.userObject.problema = this.miForm.value.txtProblema;

    
  }
  enviarInfo(value:any){
    
    
    

    

    localStorage.setItem('Nombre', JSON.stringify(this.userObject.id+1));
    localStorage.setItem('Nombre', JSON.stringify(this.userObject.nombre));
    localStorage.setItem('Apellido', JSON.stringify(this.userObject.apellido));
    localStorage.setItem('Correo', JSON.stringify(this.userObject.correo));
    localStorage.setItem('telefono', JSON.stringify(this.userObject.telefono));
    localStorage.setItem('Problema', JSON.stringify(this.userObject.problema));


    
    this.mostrarTabla = true;
   
    this.array=[this.miForm.value.txtNombre, this.miForm.value.txtApellido, this.miForm.value.txtCorreo, this.miForm.value.txtTelefono, this.miForm.value.txtProblema]
    alert('Su información ha sido suministrada')
  }
  actualizarInfoContact(value:any){

  }
  
}
  


