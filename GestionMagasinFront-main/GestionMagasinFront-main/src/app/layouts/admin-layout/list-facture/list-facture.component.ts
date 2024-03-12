import { Component, Input, OnInit, Output } from '@angular/core';
import { FactureService } from 'src/app/services/facture/facture.service';

import { Facture } from '../model/facture';
import { FilterPipeModule } from 'ngx-filter-pipe';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css'],
})
export class ListFactureComponent implements OnInit {
  searchText!: any;
  nameFilter: any = [];
  private clients: any = [];
  listFactures: any = [];
  factDetails: any = null;
  id: any;
  inputFacture: Facture = new Facture();
  showFormTemplate!: boolean;
  show: boolean = false;
  idDf: any;

  constructor(private service: FactureService) {
    this.getFactDetails();
  }
  showUpd: boolean = false;
  ngOnInit(): void {
    //  this.showFormTemplate = false;
    //  this.service.getListFacture().subscribe(
    //  (data:Facture[])=> this.listFacture=data)
    this.service.listeFactures().subscribe((d) => {
      console.time();
      console.log(d);
      this.listFactures = d;
      console.table(this.listFactures);
      console.assert(this.listFactures !== undefined, ' this is undefined');
      console.trace();
      console.timeEnd();
      debugger;
    });
    //test
  }

  getClientName() {
    this.service.getClients().subscribe((d) => {
      this.clients = d;
    });
  }

  showForm() {
    this.showFormTemplate = true;
  }

  // updateForm (f:Facture){
  //   this.showFormTemplate=true;
  //   this.inputFacture = f;
  // }

  delete(f: Facture) {
    /* let i = this.listFacture.indexOf(f);
    this.service.deleteFacture(f.id).subscribe(
      ()=>this.listFacture.splice(i,1)
    )*/
  }

  // addFact (facture :Facture){
  //   return this.http.post(this.baseUrl+'facture/', data);
  // }

  showUpdate(id: any) {
    if (this.showUpd == false) {
      this.showUpd = true;
      this.id = id;
    } else this.showUpd = false;
  }
  showDelete() {}
  afterRecieveData(i: any) {
    console.log('after');
    console.log(i);
    this.listFactures.push(i);
  }

  getFactDetails() {
    this.service.listeFactures().subscribe((resp) => {
      console.log(resp);
      this.factDetails = resp;
    });
  }

  // deleteFacture(facture: any){
  //    this.service.deleteFacture(facture.idFacture).subscribe(
  // (resp) =>{ console.log(resp);

  //   // getFactDetails() will fitch facture data present in table and as we are calling this after deletion it'll fetch latest rows
  // this.getFactDetails();
  // },
  // (err) =>{ console.log(err);}
  //    );
  // }

  deleteFacture(id: any): void {
    console.log(id);
    if (confirm('Are you sure you want to delete ' + id + '?')) {
      console.log('deleted');
      this.service.deleteFacture(id).subscribe((res) => this.ngOnInit());
    }
  }

  showDetailList(id: any) {
    this.show = !this.show;
    this.idDf = id;
  }
}
