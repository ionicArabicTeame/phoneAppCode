import { Phone } from './../models/phone.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private allPhones: Phone[] = [
    new Phone (
      'p1',
      'APPLE IPHONE 11',
      'Apple',
      'Weight: 194gDimensions: 150.9 x 75.7 x 8.3 mmOS: iOS 13Screen size: 6.1 inchesResolution: 828 x 1792CPU: Apple A13 Bionic (7 nm)RAM: 4GBStorage: 64/128/256GBBattery: 3,110 mAhRear camera: 12MP Wide-Angle + 12 MP Ultra-Wide-AngleFront camera: 12MP',
      'https://media.zid.store/2d52c80a-54a2-4d51-becf-1c1f3b4e6f81/71f2a2d1-2bc8-4879-9c62-2a3317a0989a.png',
      999
    ),

    new Phone (
      'p2',
      'ONEPLUS 8 PRO',
      'OnePlus',
      'Weight: 199gDimensions: 165.3 x 74.4 x 8.5 mmOS: OxygenOS 10.5 / Android 10Screen size: 6.78 inchesResolution: 1440 x 3168CPU: Qualcomm Snapdragon 865RAM: 8GB / 12GBStorage: 256GBBattery: 4510mAhRear camera: 48MP + 48MP + 8MP + 5MPFront camera: 16MP',
      'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/04/oneplus-8-pro-render-official.png',
      899
    ),

    new Phone (
      'p3',
      'SAMSUNG GALAXY S20 ULTRA',
      'SAMSUNG',
      'Weight: 222gDimensions: 166.9 x 76 x 8.8 mmOS: Android 10Screen size: 6.9 inchesResolution: 1440 x 3200CPU: Exynos 990 / Snapdragon 865RAM: 12GB/16GBStorage: 128GB/256GB/512GBBattery: 5,000 mAhRear camera: 108 MP wide + 48 MP periscope + 12 MP ultrawide + 0.3 MP TOFFront camera: 40MP + 40MP',
      'https://www.digicelgroup.com/fj/en/mobile/explore/other-stuff/samsung-galaxy-s20/_jcr_content/content-parsys/grid_content_box/content-box/image.asset.spool/Galaxy%20S20%20Ultra%20.png',
      899
    )
  ];

  get phones() {
    return [...this.allPhones];
    /* return this.allPhones; */
  }

  constructor() { }

getPhone( phonId: string ) {
  return {...this.allPhones.find(phoneByID => phoneByID.id === phonId)};

}

}

