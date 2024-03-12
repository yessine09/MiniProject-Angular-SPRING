import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FactureService } from 'src/app/services/facture/facture.service';

import { Facture } from '../model/facture';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {

  submitted= false;

  //formValue !: FormGroup;
  facture: Facture;
 list : Facture[];
list_client : any;
// formValue:FormGroup;

@Output() notif=new EventEmitter<any>();
  // @Output() addEvent = new EventEmitter< Facture>()
  @Input() updateFacture !: Facture;
 
  // formValue= new FormGroup({
  //   montantFacture:new FormControl(['',[Validators.required ]]),
  //   montantRemise:new FormControl(['',Validators.required]),
  //   dateFacture:new FormControl(['',Validators.required]),
  //   active:new FormControl(['',]),
  //   idClient:new FormControl(['',Validators.required]),
    
  // });
  //, {updateOn: 'submit'});
  constructor( private formbuilder : FormBuilder, private service:FactureService) { }

  /*formValue=new FormGroup({
    montantFacture: new FormControl('montantFacture',[Validators.required] ),
    montantRemise: new FormControl('montantRemise', Validators.required),
    dateFacture: new FormControl('dateFacture', Validators.required),
    active: new FormControl('active', Validators.required),
    
   } );*/

  //  .pattern("[0-9]+$")
  

  formValue=this.formbuilder.group({
    // , Validators.pattern('[0-9]+$')
    montantFacture:['',[Validators.required, Validators.pattern('[0-9]+$')]],
    // , Validators.min(0), Validators.max(100)
    montantRemise:['',[Validators.required, Validators.min(0), Validators.max(100)] ],
    dateFacture:['',Validators.required],
    active:['',Validators.required],
    idClient:['',Validators.required],
    
  });
  // , {updateOn: 'submit'}
  ngOnInit(): void {

 
    // this.formValue= this.formbuilder.group({
    //   idFacture : ['', Validators.required],
    //   montantFacture: ['', Validators.required],
    //   montantRemise: ['', Validators.required],
    //   dateFacture: ['', Validators.required ],
    //   Active: ['']
    // })
    this.get_all_clients();
    if (this.updateFacture === null){
      this.facture = new Facture();
    } else {
      this.facture = this.updateFacture;
    }

    /*this.formValue = this.formbuilder.group({
      'montantFacture' : [this.facture.montantFacture, [Validators.required, Validators.min(10)]],
      'montantRemise' : [this.facture.montantRemise, Validators.required, Validators.minLength(10)],
      'dateFacture' : [this.facture.dateFacture, [Validators.required ]],
      'active' : [this.facture.active, Validators.required]
     
    });*/

    this.facture = new Facture(); 
    this.list= [];
    console.log(this.list);

  }

  get_all_clients(){
    this.service.getClients().subscribe(res=>{
     
      this.list_client = res;
      console.log(this.list_client);
    })
  }
get montantFacture(){
  return this.formValue.get('montantFacture');
}
get montantRemise(){
  return this.formValue.get('montantRemise');
}
get dateFacture(){
  return this.formValue.get('dateFacture');
}

  // // convenience getter for easy access to form fields
  // get f() { return this.formValue.controls; }

get ClientId(){
  return this.formValue.get('idClient');
}
  addFacture(f : FormGroup){
//     this.submitted=true;
// //if form invalid
// if (this.formValue.invalid){
//   return;
// }
    this.facture=f.value;
    
    console.log(this.facture)
   /* console.log(f.get('montantFacture'));
    this.facture.montantFacture=f.get('montantFacture');
    this.facture.montantRemise = f.value.montantRemise;
    this.facture.dateFacture  = f.value.dateFacture;
    this.facture.active = f.value.active;*/
   // this.addEvent.emit(this.facture);
   
   this.service.addFacture(this.formValue.value,this.formValue.get('idClient')!.value).subscribe(
     ()=>{
       console.log(this.formValue.value);
       console.log("ajouter")
       this.notif.emit(this.formValue.value);
     }
   );
  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formValue.value, null, 4));
  //  window.alert("Successfuly add !")
  }

  
  reset(value: any= undefined){
this.formValue.reset(value);
(this as {submitted: boolean}).submitted = false;
  }
  
  


}
