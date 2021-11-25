import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl} from "@angular/forms";
@Component({
  selector: 'app-cuerpo-alquiler',
  templateUrl: './cuerpo-alquiler.component.html',
  styleUrls: ['./cuerpo-alquiler.component.css']
})
export class CuerpoAlquilerComponent implements OnInit {

  mostrarTabla: Boolean = false;
  miForm: FormGroup

  array = [] as any;

  /*Variables temporales que almacenarán 
  la información del usuario para ser usada más adelante*/
  nombre: string = ""
  apellido: string = ""
  correo: string = ""
  telefono: string = ""
  salon: string = ""

  //Validación enviado
  submitted = false;



  constructor(private formbuilder: FormBuilder) {
    this.miForm = this.formbuilder.group({
      txtNombre: ['', [Validators.required]],
      txtApellido: ['', [Validators.required]],
      txtCorreo: ['', [Validators.required]],
      txtTelefono: ['', [Validators.required]],
      selectSalon: ['', [Validators.required]],


    })
  }
  get f() { return this.miForm.controls; }
  ngOnInit(): void {
  }


  enviarInfo(value: any) {

    localStorage.setItem('Nombre', JSON.stringify(this.miForm.value.txtNombre));
    localStorage.setItem('Apellido', JSON.stringify(this.miForm.value.txtApellido));
    localStorage.setItem('Salon', JSON.stringify(this.miForm.value.selectSalon));
    localStorage.setItem('Correo', JSON.stringify(this.miForm.value.txtCorreo));
    localStorage.setItem('Telefono', JSON.stringify(this.miForm.value.txtTelefono));
    

    //Almacenamos el valor de cada uno de los inputs del formulario en un arreglo que se usará para llenar la tabla con un *ngFor
    if(this.miForm.valid){
      
      
      localStorage.setItem('Nombre', JSON.stringify(this.miForm.value.txtNombre));
      localStorage.setItem('Apellido', JSON.stringify(this.miForm.value.txtApellido));
      localStorage.setItem('Salon', JSON.stringify(this.miForm.value.selectSalon));
      localStorage.setItem('Correo', JSON.stringify(this.miForm.value.txtCorreo));
      localStorage.setItem('Telefono', JSON.stringify(this.miForm.value.txtTelefono));
      
  
  
  
      this.mostrarTabla = true;
  
      this.array = [this.miForm.value.txtNombre,
      this.miForm.value.txtApellido,
      this.miForm.value.selectSalon,
      this.miForm.value.txtCorreo,
      this.miForm.value.txtTelefono
      ]
  
      //Almacenamos los datos del formulario en las variables temporales antes de hacer el rest al form
      this.nombre = this.miForm.value.txtNombre
      this.apellido = this.miForm.value.txtApellido
      this.salon = this.miForm.value.selectSalon
      this.correo = this.miForm.value.txtCorreo
      this.telefono = this.miForm.value.txtTelefono
      
  
  
  
  
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
      selectSalon: new FormControl(String(this.salon)),
      txtCorreo: new FormControl(String(this.correo)),
      txtTelefono: new FormControl(String(this.telefono)),
      

    })
  }

  actualizarInfoContact(value: any) {

    localStorage.setItem('Nombre', JSON.stringify(this.miForm.value.txtNombre));
    localStorage.setItem('Apellido', JSON.stringify(this.miForm.value.txtApellido));
    localStorage.setItem('Salon', JSON.stringify(this.miForm.value.selectSalon));
    localStorage.setItem('Correo', JSON.stringify(this.miForm.value.txtCorreo));
    localStorage.setItem('Telefono', JSON.stringify(this.miForm.value.txtTelefono));
    



    
    //Almacenamos el valor de cada uno de los inputs del formulario en un arreglo que se usará para llenar la tabla con un *ngFor
    this.array = [this.miForm.value.txtNombre,
      this.miForm.value.txtApellido,
      this.miForm.value.selectSalon,
      this.miForm.value.txtCorreo,
      this.miForm.value.txtTelefono]

    //Almacenamos los datos del formulario en las variables temporales antes de hacer el rest al form
    this.nombre = this.miForm.value.txtNombre
    this.apellido = this.miForm.value.txtApellido
    this.salon = this.miForm.value.selectSalon
    this.correo = this.miForm.value.txtCorreo
    this.telefono = this.miForm.value.txtTelefono
    

      alert('Su información ha sido editada correctamente')


  }

  
  borrarInfo(){
    this.array = []
    var tabla = document.getElementById('tablaDatos') as HTMLTableElement
    tabla.deleteRow(1);
    alert('Su selección ha sido borrada exitosamente')

    localStorage.removeItem('Nombre')
    localStorage.removeItem('Apellido')
    localStorage.removeItem('Salon')
    localStorage.removeItem('Correo')
    localStorage.removeItem('Telefono')
    
  }
}
