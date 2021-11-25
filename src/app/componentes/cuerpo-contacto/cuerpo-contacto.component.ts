import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-cuerpo-contacto',
  templateUrl: './cuerpo-contacto.component.html',
  styleUrls: ['./cuerpo-contacto.component.css'],
  
})
export class CuerpoContactoComponent implements OnInit {

  //Mostrar y ocultar elementos
  mostrarForm: Boolean = false;
  mostrarTabla: Boolean = false;

  

  
  //Validación enviado
  submitted = false;



  miForm: FormGroup

  array = [] as any;

  /*Variables temporales que almacenarán 
  la información del usuario para ser usada más adelante*/
  nombre: string = ""
  apellido: string = ""
  correo: string = ""
  telefono: string = ""
  problema: string = ""

  
//desactivar y activar botones
isDisabledEnviar : boolean = false;
isDisabledEditar : boolean = false;


  constructor(private formbuilder: FormBuilder) {
    
    this.miForm = this.formbuilder.group({
      txtNombre: ['', [Validators.required]],
      txtApellido: ['', [Validators.required]],
      txtCorreo: ['', [Validators.required]],
      txtTelefono: ['', [Validators.required]],
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
      
      
    localStorage.setItem('Nombre', JSON.stringify(this.miForm.value.txtNombre));
    localStorage.setItem('Apellido', JSON.stringify(this.miForm.value.txtApellido));
    localStorage.setItem('Correo', JSON.stringify(this.miForm.value.txtCorreo));
    localStorage.setItem('Telefono', JSON.stringify(this.miForm.value.txtTelefono));
    localStorage.setItem('Problema', JSON.stringify(this.miForm.value.txtProblema));



    this.mostrarTabla = true;

    this.array = [this.miForm.value.txtNombre,
    this.miForm.value.txtApellido,
    this.miForm.value.txtCorreo,
    this.miForm.value.txtTelefono,
    this.miForm.value.txtProblema]

    //Almacenamos los datos del formulario en las variables temporales antes de hacer el rest al form
    this.nombre = this.miForm.value.txtNombre
    this.apellido = this.miForm.value.txtApellido
    this.correo = this.miForm.value.txtCorreo
    this.telefono = this.miForm.value.txtTelefono
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
      txtNombre: new FormControl(String(this.nombre)),
      txtApellido: new FormControl(String(this.apellido)),
      txtCorreo: new FormControl(String(this.correo)),
      txtTelefono: new FormControl(String(this.telefono)),
      txtProblema: new FormControl(String(this.problema)),

    })

    




  }
  actualizarInfoContact(value: any) {

    localStorage.setItem('Nombre', JSON.stringify(this.miForm.value.txtNombre));
    localStorage.setItem('Apellido', JSON.stringify(this.miForm.value.txtApellido));
    localStorage.setItem('Correo', JSON.stringify(this.miForm.value.txtCorreo));
    localStorage.setItem('Telefono', JSON.stringify(this.miForm.value.txtTelefono));
    localStorage.setItem('Problema', JSON.stringify(this.miForm.value.txtProblema));



    
    this.array = [this.miForm.value.txtNombre,
    this.miForm.value.txtApellido,
    this.miForm.value.txtCorreo,
    this.miForm.value.txtTelefono,
    this.miForm.value.txtProblema]

    //Almacenamos los datos del formulario en las variables temporales antes de hacer el rest al form
    this.nombre = this.miForm.value.txtNombre
    this.apellido = this.miForm.value.txtApellido
    this.correo = this.miForm.value.txtCorreo
    this.telefono = this.miForm.value.txtTelefono
    this.problema = this.miForm.value.txtProblema

      alert('Su información ha sido editada correctamente')
      this.miForm.reset()

  }


  borrarInfo(){
    this.array = []
    var tabla = document.getElementById('tablaDatos') as HTMLTableElement
    tabla.deleteRow(1);
    alert('Su selección ha sido borrada exitosamente')

    localStorage.removeItem('Nombre')
    localStorage.removeItem('Apellido')
    localStorage.removeItem('Correo')
    localStorage.removeItem('Telefono')
    localStorage.removeItem('Problema')
    this.miForm.reset()
  }

}
