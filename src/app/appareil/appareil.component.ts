import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	@Input() appareilName: string;
	@Input() appareilStatus: string;

  constructor() { 
  	this.setStatus("éteint"); 
  }

  ngOnInit(): void {
  }

  getStatus(){
  	return this.appareilStatus;
  }

  setStatus(n){
  	this.appareilStatus = n;
  }

}
