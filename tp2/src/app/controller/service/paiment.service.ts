import {Injectable} from '@angular/core';
import {Commande} from "../model/commande.model";
import {HttpClient} from "@angular/common/http";
import {Paiment} from "../model/paiment.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaimentService {

  private _paiment = new Paiment();
  private _paiments = new Array<Paiment>();
  private apiUrl = 'http://localhost:8036/api/v1/paiment';

  constructor(private http: HttpClient) {
  }

  public save(): Observable<number> {
    return this.http.post<number>(this.apiUrl, this.paiment);
  }

  public findALl(): Observable<Array<Paiment>> {
    return this.http.get<Array<Paiment>>(this.apiUrl);
  }

  public deleteByRef(ref: string): Observable<number> {
    return this.http.delete<number>(this.apiUrl + 'ref/' + ref);
  }

  get paiment(): Paiment {
    return this._paiment;
  }

  set paiment(value: Paiment) {
    this._paiment = value;
  }


  get paiments(): Paiment[] {
    return this._paiments;
  }

  set paiments(value: Paiment[]) {
    this._paiments = value;
  }
}
