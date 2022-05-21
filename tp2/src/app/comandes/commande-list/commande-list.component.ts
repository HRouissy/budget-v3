import {Component, OnInit} from '@angular/core';
import {Commande} from "../../controller/model/commande.model";
import {CommandeService} from "../../controller/service/commande.service";
import {count} from "rxjs";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  constructor(private commandeService: CommandeService) {
  }

  public delete(commande: Commande, index: number) {

    this.commandeService.deleteByRef(commande.ref).subscribe(data => {
      if (data > 0) {
        this.commandes.splice(index, 1);
      }
    });
  }

  ngOnInit(): void {
    this.commandeService.findALl().subscribe(data => this.commandes = data);
  }

  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }

  set commandes(value: Array<Commande>) {
    this.commandeService.commandes = value;
  }
}
