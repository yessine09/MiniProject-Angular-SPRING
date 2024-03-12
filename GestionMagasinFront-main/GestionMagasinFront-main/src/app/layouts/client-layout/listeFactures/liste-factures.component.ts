import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture/facture.service';


@Component({
  selector: 'app-liste-factures',
  templateUrl: './liste-factures.component.html',
  styleUrls: ['./liste-factures.component.css']
})
export class ListeFacturesComponent implements OnInit {
  listFactures:any=[];
  

  constructor(private service:FactureService) { }

  ngOnInit(): void {

    this.service.listeFactures().subscribe(
      (d)=>{
    
        console.log(d);
        this.listFactures=d;
      }
    );
  }

  pdfExport(){
    this.service.pdfExport().subscribe(res =>{
      var file = new Blob([res], {type: "application/pdf"});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      console.log("PDF Facture");
    });
  }

}
