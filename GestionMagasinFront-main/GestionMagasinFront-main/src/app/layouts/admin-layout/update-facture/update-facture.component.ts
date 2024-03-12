import { Component, Input, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture/facture.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {
  @Input() idF:any;
facture:any;
  constructor(private service:FactureService) { }

  ngOnInit(): void {
    this.service.getFactureById(this.idF).subscribe(
      (d)=>{
this.facture=d;
      }
    );
  }

  updateFacture(facture:any){
    console.log(facture)
this.service.updateFacture(facture).subscribe(
  (msg) => {console.log("updated")}
);
  }
}
