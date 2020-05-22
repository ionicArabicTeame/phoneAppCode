import { CreateBookingComponent } from './../../component/create-booking/create-booking.component';
import { Phone } from './../../models/phone.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PhoneService } from './../../services/phone.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  phone: Phone;

  constructor(
    private route: ActivatedRoute,
    private navCtr: NavController,
    private phoneService: PhoneService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      console.log('thisId: ', paramMap );
      if (!paramMap.has('id')) {
        this.navCtr.navigateBack('/tabs/products');
        return;
      }
      this.phone = this.phoneService.getPhone(paramMap.get('id'));
      console.log('PhoneBythisId: ', this.phone );
    });
  }



  onBookPhone() {
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPhone: this.phone}
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('Booked!');
      }
    });
  }

}
