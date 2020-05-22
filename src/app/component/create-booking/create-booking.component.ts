import { ModalController } from '@ionic/angular';
import { Phone } from './../../models/phone.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPhone: Phone;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  onBookPhone() {
    this.modalCtrl.dismiss({message: 'This is a Dummy message!'}, 'confirm');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
