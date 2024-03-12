import { Component, Input, OnInit } from '@angular/core';
import { DetailFactureService } from 'src/app/services/detailFacture/detail-facture.service';
import { FactureService } from 'src/app/services/facture/facture.service';
import { ListFactureComponent } from '../list-facture/list-facture.component';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css']
})
export class DetailFactureComponent implements OnInit {
  // listDetailFactures:any=[];

  // @Input() listFacture !: ListFactureComponent;

  @Input() idF:any;
  facture:any=[];
  detailF:any;
  listDetailFactures:any=[];
  constructor(private serviceD:DetailFactureService, service:FactureService) { }

  ngOnInit(): void {
//     this.service.getFactureById(this.idF).subscribe(
//       (d)=>{
// this.facture=d;
//       }
//     );

this.serviceD.getFactureDetailId(this.idF).subscribe(
  (d)=>{
    this.facture=d;
    console.log(d);
    console.log(this.facture);
  }
);
  }

  



detailFactures(){
  console.log(this.detailF)
  this.serviceD.listeDetailsFactures().subscribe(
    (d)=>{
          
      console.log(d);
      this.listDetailFactures=d;
    }
  );
}

  

}
