import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone.model';
import { PhoneService } from 'src/app/services/phone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  loadedPhones: Phone[];
  phoneDetail: Phone;

  constructor(
    private phonesService: PhoneService,
    private activatedRoute: ActivatedRoute,
    private navCtr: NavController,
    private router: Router
     ) {}

  ngOnInit() {

    this.loadedPhones = this.phonesService.phones;
    console.log(this.loadedPhones);
  }



}
