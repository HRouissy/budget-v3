import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Paiment} from "../../controller/model/paiment.model";
import {PaimentService} from "../../controller/service/paiment.service";

@Component({
  selector: 'app-paiment-list',
  templateUrl: './paiment-list.component.html',
  styleUrls: ['./paiment-list.component.css']
})
export class PaimentListComponent implements OnInit {

  constructor(private paiementService: PaimentService) { }

  ngOnInit(): void {
    this.findALl();
  }

  public findALl(): void {
    this.paiementService.findALl().subscribe( data => this.paiments = data);
  }

  public deleteByRef(index: number, ref: string): void {
   this.paiementService.deleteByRef(ref).subscribe( data =>{
     if (data > 0){
       this.paiments.splice(index,1);
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
