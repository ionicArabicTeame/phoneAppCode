import { Phone } from './../../models/phone.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  phone: Phone;

  constructor(
    private route: ActivatedRoute,
    private navCtr: NavController,
    private phoneService: PhoneService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.navCtr.navigateBack('/places/tabs/offers');
        return;
      }
      this.phone = this.phoneService.getPhone(paramMap.get('id'));
    });
  }

}
