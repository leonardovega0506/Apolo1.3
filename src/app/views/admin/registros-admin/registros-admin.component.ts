import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registros-admin',
  templateUrl: './registros-admin.component.html',
  styleUrls: ['./registros-admin.component.css']
})
export class RegistrosAdminComponent {

  
  //Atributos
  registros: any = [];
  verificacion: boolean = true;
  numeroEntrada?: any = 0;
  nota_remision?:any =0;

  //Inicio del componente
  ngOnInit(): void {
   /* this.anandaService.listarRegistros().subscribe(
      (datos: any) => {
        this.registros = datos;
      },
      (error) => {
        console.log(error);
      }
    )*/
  }

  //Constructor
 /* constructor( private modal: NgbModal, private router: Router) { }

  //Abrir Ventana Modal
  open(contenido) {
    this.modal.open(contenido, { centered: true });
  }

  //Mostrar input Modal
  showData() {
     this.verificacion = true;
  }

  //Esconder Input Modal
  hideData() {
     this.verificacion = false;

  }*/

  //Metodo para agregar un registro del tiempo
  generarRegistro() {
    /*this.anandaService.crearRegistro(this.numeroEntrada).subscribe(
      (data: any) => {
        Swal.fire("Registros","Registro creado con exito","success").then(
          (e) =>{
            this.ngOnInit();
            this.modal.dismissAll();
          }
        );
      },
      (error) => {
        Swal.fire("Error","No se ha podido crear el registro","error")
        console.log(error);
      }
    );*/
  }
}
