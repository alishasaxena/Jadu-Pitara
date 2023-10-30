// card.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageSrc!: string;
  @Input() link!: string;
  @Input() buttonText!: string;
  @Input() buttonLink!: string;
  @Input() blogData: any;
  active: boolean = false;

  constructor(private router: Router, public _as: AppServiceService) { }
  ngOnInit(): void {
    console.log('kdhgfej')

  }

  onCardHover() {
    this.active = true;
  }

  onCardLeave() {
    this.active = false;
  }

  onCardClickHandler() {
      // console.log(this.blogData)
    this._as.shareCardData(this.blogData);
    this._as.updateClickedCardTitle(this.title);
    this.router.navigate([this.link]);

  }
}
