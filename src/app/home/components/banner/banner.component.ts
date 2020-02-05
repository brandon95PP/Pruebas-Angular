import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    './../../../../assets/images/BA2.jpg',
    './../../../../assets/images/abandoned-forest-industry-34950.jpg',
    './../../../../assets/images/beach-boardwalk-branches-127513.jpg',
    './../../../../assets/images/conifer-fence-grass-534164.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
