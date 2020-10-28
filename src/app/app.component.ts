import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet de test';
  visiteur = 'Massi';
  isAuth = false;



  constructor(){
  	setTimeout(
  	() => {
  		this.isAuth = true;
  	}, 3000
  	);
  }

  onSwitch(){
  	if(this.visiteur == "Alexy"){
  		this.visiteur = "Massi";
  	} else {
  		this.visiteur = "Alexy";
  	}
  }
}
