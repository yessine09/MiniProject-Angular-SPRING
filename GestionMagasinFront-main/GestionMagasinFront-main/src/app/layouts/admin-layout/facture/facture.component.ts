import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FactureService } from 'src/app/services/facture/facture.service';
import {Facture} from "../model/facture";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  listFactures:any=[];
  private clients = [];
 
  @Input() facture !: Facture;
  @Output() notification= new EventEmitter<Facture>()
  @Output() deleteEvent = new EventEmitter<Facture>()
  @Output() updateEvent = new EventEmitter<Facture>()

  constructor( private service:FactureService) { }

  ngOnInit(): void {
    this.service.listeFactures().subscribe(
      (d)=>{
        
        console.log(d);
        this.listFactures=d;
      }
    );
  }

  // getClients(){
  //   this.service.getClients
  // }

  notifyParent(){
    //traitement
    this.notification.emit(this.facture)
  }
  deleteNotif(){
    this.deleteEvent.emit(this.facture)
  }
  updateNotif(){
    this.updateEvent.emit(this.facture)
  }

}
