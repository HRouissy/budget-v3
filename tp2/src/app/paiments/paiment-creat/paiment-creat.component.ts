import { Component, OnInit } from '@angular/core';
import {Paiment} from "../../controller/model/paiment.model";
import {PaimentService} from "../../controller/service/paiment.service";
import {Observable} from "rxjs";
import {Commande} from "../../controller/model/commande.model";

@Component({
  selector: 'app-paiment-creat',
  templateUrl: './paiment-creat.component.html',
  styleUrls: ['./paiment-creat.component.css']
})
export class PaimentCreatComponent implements OnInit {

  constructor(private paiementService: PaimentService) { }

  ngOnInit(): void {
  }

  public save(): void {
     this.paiementService.save().subscribe(data => {
      if (data > 0){
        this.paiments.push(this.paiment);
        this.paiment = new Paiment();
      }
    });
  }


  get paiment(): Paiment {
    return this.paiementService.paiment;
  }

  set paiment(value: Paiment) {
    this.paiementService.paiment = value;
  }


  get paiments(): Paiment[] {
    return this.paiementService.paiments;
  }

  set paiments(value: Paiment[]) {
    this.paiementService.paiments = value;
  }
}
