import { Component } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listefilm = []
  constructor(private router: Router){
    fetch('./assets/films-json.json').then(res => res.json()).then(json => {
      this.listefilm = json;
    })
  }
  
  affDetail(item){
    let navigationExtras: NavigationExtras = {
      state : {
        film : item
      }
    }
    console.log(item)
    //ouvrir page detail
    //envoyer le param a la page detail
    this.router.navigate(['/details'],navigationExtras);
  }

  
  
}
