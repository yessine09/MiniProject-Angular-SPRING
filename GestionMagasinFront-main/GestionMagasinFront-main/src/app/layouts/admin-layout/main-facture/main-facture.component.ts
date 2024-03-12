import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture/facture.service';
import { Facture } from '../model/facture';

@Component({
  selector: 'app-main-facture',
  templateUrl: './main-facture.component.html',
  styleUrls: ['./main-facture.component.css']
})
export class MainFactureComponent implements OnInit {

  listFacture !: Facture[];
  inputFacture : Facture = new Facture();
  showFormTemplate !: boolean;

  constructor( private proService: FactureService) { }

  ngOnInit(): void {
    // this.showFormTemplate = false;
    // this.proService.listeFactures().subscribe(
    //   (data: Facture[] ) => this.listFacture = data)

  }
//   like(f:Facture){
//     let i = this.listFacture.indexOf(f);
//     this.listFacture[i].nbrlike++;
//  }

}
