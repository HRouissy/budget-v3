import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../controller/service/commande.service";
import {Commande} from "../../controller/model/commande.model";

@Component({
  selector: 'app-comande-creat',
  templateUrl: './comande-creat.component.html',
  styleUrls: ['./comande-creat.component.css']
})
export class ComandeCreatComponent implements OnInit {

  constructor(private commandeService: CommandeService) {
  }

  public save(): void {
    this.commandeService.save().subscribe(data => {
      if (data > 0) {
        this.commandes.push(this.commande)
        this.commande = new Commande() ;
        alert('Saved');
      } else {
        alert('Save Error');
      }
    });

  }

  get commande(): Commande {
    return this.commandeService.commande;
  }

  set commande(value: Commande) {
    this.commandeService.commande = value;
  }


  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }

  set commandes(value: Array<Commande>) {
    this.commandeService.commandes = value;
  }

  ngOnInit(): void {
  }

}
