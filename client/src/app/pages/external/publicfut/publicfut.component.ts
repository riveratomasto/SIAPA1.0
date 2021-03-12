import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import KTWizard from '../../../../assets/js/components/wizard';
import { KTUtil } from '../../../../assets/js/components/util';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FutModel } from 'src/app/models/fut.models';


@Component({
  selector: 'app-publicfut',
  templateUrl: './publicfut.component.html',
  styleUrls: ['./publicfut.component.scss']
})
export class PublicfutComponent implements OnInit,AfterViewInit,OnDestroy {



@ViewChild('wizard', { static: true }) el: ElementRef;
 

  // model: any = {
  //   fname: '',
  //   lname: 'Lic. Consuelo Elizabeth Soto Meza',
  //   phone: '+61412345678',
  //   email: 'john.wick@reeves.com',
  //   address1: '',
  //   address2: '',
  //   postcode: '3000',
  //   city: 'Melbourne',
  //   state: 'VIC',
  //   country: 'AU',
  //   delivery: 'overnight',
  //   packaging: 'regular',
  //   preferreddelivery: 'morning',
  //   locaddress1: 'Address Line 1',
  //   locaddress2: 'Address Line 2',
  //   locpostcode: '3072',
  //   loccity: 'Preston',
  //   locstate: 'VIC',
  //   loccountry: 'AU',
  //   ccname: 'John Wick',
  //   ccnumber: '4444 3333 2222 1111',
  //   ccmonth: '01',
  //   ccyear: '21',
  //   cccvv: '123',
  // };



  
  submitted = false;
  wizard: any;
  forma: FormGroup;
  futModel : FutModel;

  constructor( private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }



  ngAfterViewInit(): void {
    // Initialize form wizard
    this.wizard = new KTWizard(this.el.nativeElement, {
      startStep: 1,
    });
    
    // Validation before going to next page
    // this.wizard.on('beforeNext', (wizardObj) => {
    //   // https://angular.io/guide/forms
    //   // https://angular.io/guide/form-validation

      
    //   // validate the form and use below function to stop the wizard's step
    //   // wizardObj.stop();

    // });

    // Change event
//     this.wizard.on('change', (wizardObj) => {
//       // setTimeout(() => {
//       //   KTUtil.scrollTop();
//       // }, 500);
      
// // if(this.solicitudNoValido){

  
//   // return Object.values(this.forma.controls).forEach( control => {
//   //   control.markAsTouched
//   // }),wizardObj.stop()

//   console.log(wizardObj.getStep());

// switch(wizardObj.getStep()){

// case 1:
//   if(this.solicitudNV){
//     wizardObj.stop();
//   }
//   break;
// case 2:
//   if(this.apaternoNV || this.amaternoNV || this.nombresNV
//     || this.dniNV || this.telefonoNV || this.celularNV
//     || this.domicilioNV || this.emailNV
//       ){
//     wizardObj.stop();
//   }
//   break;
// case 3:
//   if(this.solicitudNV){
//     wizardObj.stop();
//   }
//   break;
// case 4:
//   if(this.solicitudNV){
//     wizardObj.stop();

//   }
//   // this.futModel.titulo_fut = this.forma.get('tsolicitud').value
//   break;

// }







  
// // console.log(''+wizardObj.getStep());

// // wizardObj.stop()
// // }




//     });
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnDestroy() {
    this.wizard = undefined;
  }


  get solicitudNV(){
    return this.forma.get("tsolicitud").invalid
  }
  get apaternoNV(){
    return this.forma.get("apaterno").invalid
  }

  get amaternoNV(){
    return this.forma.get("amaterno").invalid
  }

  get nombresNV(){
    return this.forma.get("nombres").invalid
  }
  get dniNV(){
    return this.forma.get("dni").invalid
  }
  get telefonoNV(){
    return this.forma.get("telefono").invalid
  }
    get celularNV(){
    return this.forma.get("celular").invalid
  }
  get emailNV(){
    return this.forma.get("email").invalid
  }
  get domicilioNV(){
    return this.forma.get("domicilio").invalid
  }
  get fpedidoNV(){
    return this.forma.get("fpedido").invalid
  }
  get dadjuntoNV(){
    return this.forma.get("dadjunto").invalid
  }
  get nfoliosNV(){
    return this.forma.get("nfolios").invalid
  }



  createForm(){
    this.forma = this.fb.group({
      tsolicitud : ['',[Validators.required]],
      apaterno:['',[Validators.required]],
      amaterno:['',[Validators.required]],
      nombres:['',[Validators.required]],
      dni:['',[Validators.required]],
      telefono:['',[Validators.required]],
      celular:['',[Validators.required]],
      email:['',[Validators.required]],
      domicilio:['',[Validators.required]],
      fpedido:['',[Validators.required]],
      dadjunto:['',[Validators.required]],
      nfolios:['',[Validators.required]]
    })



  }
}
