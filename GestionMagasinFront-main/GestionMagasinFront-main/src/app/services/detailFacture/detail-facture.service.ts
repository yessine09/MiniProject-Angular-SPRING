import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {
  baseUrl=environment.url;
  constructor(private http:HttpClient) { }
  listeDetailsFactures(){
    console.log(this.baseUrl+"/detailFacture/retrieve-all-detailFactures")
    return this.http.get(this.baseUrl+"/detailFacture/retrieve-all-detailFactures")
  }

 

  getFactureDetailId(id :any){
    return this.http.get(this.baseUrl+'/detailFacture/get-detailFacture/'+id);
  }


}
