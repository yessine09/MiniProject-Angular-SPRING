import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from 'src/app/layouts/admin-layout/model/facture';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  baseUrl=environment.url;
  constructor(private http:HttpClient) { }
  listeFactures(){
    console.log(this.baseUrl+"/facture/retrieve-all-factures")
    return this.http.get(this.baseUrl+"/facture/retrieve-all-factures")
  }

  getClients(){
   
    return this.http.get(this.baseUrl+"clients/retrieve-all-clients")
  }

  addFacture(data: any,idClient:any){
    return this.http.post(this.baseUrl+'facture/add-facture/'+idClient, data);
  }

  deleteFacture(id: any){
    return this.http.delete(this.baseUrl+'facture/remove-facture/'+ id);
  }

 updateFacture(fact:any){
   return this.http.put(this.baseUrl+'facture/modify-facture', fact);
 }

 getFactureById(id :any){
  return this.http.get(this.baseUrl+'facture/retrieve-facture/'+id);
}

pdfExport(){
  const headers = new HttpHeaders();
  return this.http.get(this.baseUrl+"facture/facture/export",{
    responseType:"blob"
  });
}

 

  // getListFacture(){
  //   return this.http.get<Facture[]>(this.baseUrl);
  // }

  // getFacture(id: number){
  //   return this.http.get(this.baseUrl+"facture/retrieve-all-factures/id")
  // }

  

  // deleteFacture(id: string){
  //   return this.http.delete(this.baseUrl+'facture/'+id)
  // }

  // updateFacture(facture : Facture){
  //   return this.http.put(this.baseUrl+'/facture/'+facture.id, facture)
  // }
 

  
}
