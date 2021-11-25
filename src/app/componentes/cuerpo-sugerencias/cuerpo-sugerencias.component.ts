import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-cuerpo-sugerencias',
  templateUrl: './cuerpo-sugerencias.component.html',
  styleUrls: ['./cuerpo-sugerencias.component.css']
})
export class CuerpoSugerenciasComponent implements OnInit {

  //Mostrar y ocultar elementos
  mostrarForm: Boolean = false;
  mostrarTabla: Boolean = false;

  

  
  //Validación enviado
  submitted = false;



  miForm: FormGroup

  array = [] as any;

  /*Variables temporales que almacenarán 
  la información del usuario para ser usada más adelante*/
  nombreApellido: string = ""
  sProblema: string = ""
  sFecha: string = ""
  problema: string = ""

  
//desactivar y activar botones
isDisabledEnviar : boolean = false;
isDisabledEditar : boolean = false;


  constructor(private formbuilder: FormBuilder) {
    
    this.miForm = this.formbuilder.group({
      txtNombreApellido: ['', [Validators.required]],
      selectProblema: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      txtProblema: ['', [Validators.required]]

    })
    
   
  }
  get f() { return this.miForm.controls; }
  ayudaPersonalizada() {
    this.mostrarForm = true;
    
    
  }
  
  ngOnInit(): void {
  }


  enviarInfo(value: any) {
    
    if(this.miForm.valid){
      
      
    localStorage.setItem('NombreApellido', JSON.stringify(this.miForm.value.txtNombreApellido));
    localStorage.setItem('selectProblema', JSON.stringify(this.miForm.value.selectProblema));
    localStorage.setItem('Fecha', JSON.stringify(this.miForm.value.fecha));
    localStorage.setItem('Problema', JSON.stringify(this.miForm.value.txtProblema));



    this.mostrarTabla = true;

    this.array = [this.miForm.value.txtNombreApellido,
    this.miForm.value.selectProblema,
    this.miForm.value.fecha,
    this.miForm.value.txtProblema]

    //Almacenamos los datos del formulario en las variables temporales antes de hacer el rest al form
    this.nombreApellido = this.miForm.value.txtNombreApellido
    this.sProblema = this.miForm.value.selectProblema
    this.sFecha = this.miForm.value.Fecha
    this.problema = this.miForm.value.txtProblema




    alert('Su información ha sido suministrada')
    this.miForm.reset();
        
      }else{
        this.submitted = true;
        alert('Hay datos invalidos o vacios, corregir todos!')
    
      }
  }

  editarInfo() {


    //Al darle editar, se inserta los datos guardados en los inputs del formulario
    this.miForm = new FormGroup({
      txtNombreApellido: new FormControl(String(this.nombreApellido)),
      selectProblema: new FormControl(String(this.sProblema)),
      fecha: new FormControl(this.sFecha),
      txtProblema: new FormControl(String(this.problema)),

    })

    




  }
  actualizarInfoContact(value: any) {

    localStorage.setItem('NombreApellido', JSON.stringify(this.miForm.value.txtNombreApellido));
    localStorage.setItem('selectProblema', JSON.stringify(this.miForm.value.selectProblema));
    localStorage.setItem('Fecha', JSON.stringify(this.miForm.value.fecha));
    localStorage.setItem('Problema', JSON.stringify(this.miForm.value.txtProblema));



    
    this.array = [this.miForm.value.txtNombreApellido,
      this.miForm.value.selectProblema,
      this.miForm.value.fecha,
      this.miForm.value.txtProblema]

    //Almacenamos los datos del formulario en las variables temporales antes de hacer el rest al form
    this.nombreApellido = this.miForm.value.nombreApellido
    this.sProblema = this.miForm.value.selectProblema
    this.sFecha = this.miForm.value.fecha
    this.problema = this.miForm.value.txtProblema

      alert('Su información ha sido editada correctamente')

      this.miForm.reset()
  }


  borrarInfo(){
    this.array = []
    var tabla = document.getElementById('tablaDatos') as HTMLTableElement
    tabla.deleteRow(1);
    alert('Su selección ha sido borrada exitosamente')

    localStorage.removeItem('NombreApellido')
    localStorage.removeItem('SelectProblema')
    localStorage.removeItem('Fecha')
    localStorage.removeItem('Problema')
    this.miForm.reset()
  }
}
