import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailFactureService } from 'src/app/services/detailFacture/detail-facture.service';

@Component({
  selector: 'app-detail-factures',
  templateUrl: './detail-factures.component.html',
  styleUrls: ['./detail-factures.component.css']
})
export class DetailFacturesComponent implements OnInit {
list:any=[];
  constructor( private service:DetailFactureService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getFactureDetailId(this.activatedroute.snapshot.params['id']).subscribe(
      (d)=> {
this.list=d;
      }
    )
  }

}
