import {Injectable} from '@angular/core';
import {Commande} from "../model/commande.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private _commande = new Commande();
  private _commandes = new Array<Commande>();
  private apiUrl = 'http://localhost:8036/api/v1/commande/'

  constructor(private http: HttpClient) {
  }

  public save(): Observable<number> {
    return this.http.post<number>(this.apiUrl, this.commande);
  }

  public findALl(): Observable<Array<Commande>> {
    return this.http.get<Array<Commande>>(this.apiUrl);
  }

  public deleteByRef(ref: string): Observable<number> {
    return this.http.delete<number>(this.apiUrl+'ref/'+ref);
  }

  get commande(): Commande{
    if(this._commande == null){
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

}
