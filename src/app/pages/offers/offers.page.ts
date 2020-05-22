import { PhoneService } from './../../services/phone.service';
import { Component, OnInit } from '@angular/core';
import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Phone[];

  constructor( private phoneService: PhoneService ) { }

  ngOnInit() {

    this.offers = this.phoneService.phones;
    console.log(this.offers);
  }

}
