import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {

  @ViewChild('content6') content6;
  @ViewChild('content2') content2;
  constructor( private modalService : NgbModal) { }
  filterPersonal = '';
  personal = [
    {
      "id": 1,
      "Nombre": "John",
      "Apellido": "Rivera",
      "FecNac":"11/09/2021",
      "Celular":"987-223-789",
      "DNI":"44792719",
      "Cargo" :"Coordinador",
      "Perfil":"ADMIN",
      "Status":"Act"
    },
    {
      "id": 2,
      "Nombre": "Anthony",
      "Apellido": "Tomasto",
      "FecNac":"11/09/2021",
      "Celular":"987-223-789",
      "DNI":"44792719",
      "Cargo" :"Coordinador",
      "Perfil":"ADMIN",
      "Status":"Act"
    },
    {
      "id": 3,
      "Nombre": "Pepe",
      "Apellido": "Romero",
      "FecNac":"11/09/2021",
      "Celular":"987-223-789",
      "DNI":"44792719",
      "Cargo" :"Coordinador",
      "Perfil":"EDITOR",
      "Status":"Act"
    },
    {
      "id": 4,
      "Nombre": "Liz",
      "Apellido": "Saavedra",
      "FecNac":"11/09/2021",
      "Celular":"987-223-789",
      "DNI":"44792719",
      "Cargo" :"Coordinador",
      "Perfil":"ADMIN",
      "Status":"Act"
    },
    {
      "id": 5,
      "Nombre": "Andrea",
      "Apellido": "Ponce",
      "FecNac":"11/09/2021",
      "Celular":"987-223-789",
      "DNI":"44792719",
      "Cargo" :"Coordinador",
      "Perfil":"ADMIN",
      "Status":"Act"
    },

  ]

  ngOnInit(): void {
    // this.openLarge(this.content6);
    // document.getElementById('fname').autofocus;
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }


  openLarge(content, pers: any) {
    this.modalService.open(content, {
      size: 'md',
      centered: true
    });
    document.getElementById('fname').setAttribute('value', pers.Nombre);
    document.getElementById('fcargo').setAttribute('value', pers.Cargo);
   document.getElementById('lname').setAttribute('value', pers.Apellido);
   document.getElementById('dept').setAttribute('value', pers.DNI);
   document.getElementById('email2').setAttribute('value', pers.Celular);
   document.getElementById('cntry').setAttribute('value', pers.FecNac);
  }

  openSmall(content, pers: any) {
    this.modalService.open(content, {
      size: 'sm',
      centered: true
    });
   
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  abrir(pers?){
    this.openLarge(this.content6,pers)
  }

  change(pers?){
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#2778c4',
    //   cancelButtonColor: '#757575',
    //   confirmButtonText: 'Si, Eliminar!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })

    this.openSmall(this.content2,pers)
  }




}
