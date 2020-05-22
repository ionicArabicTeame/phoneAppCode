import { Phone } from './../../models/phone.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  phone: Phone;
  id: any;

  constructor(
    private router: ActivatedRoute,
    private navCtr: NavController,
    private phoneService: PhoneService ) { }

  ngOnInit() {

    this.id = this.router.snapshot.paramMap.get('id');
    console.log('id: ', this.id );

    this.router.paramMap.subscribe(paramMap => {

      console.log('paramMap:', paramMap);
      if (!paramMap.has('id')) {
        this.navCtr.navigateBack('/tabs/products');
        return;
      }
      this.phone = this.phoneService.getPhoneDetail(paramMap.get('id'));

      console.log('phone: ', this.phone );
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtr.navigateBack('/tabs/products');
  }

}
