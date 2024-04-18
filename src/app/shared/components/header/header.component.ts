import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, NavigationEnd } from '@angular/router';
import { cardsData, CardsData, navigationLinks } from 'src/app/data/sample.data';
import { Location } from '@angular/common';
import { AppServiceService } from 'src/app/services/app-service.service';
import { AppComponent } from '../../../app.component'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any;
  isHomePage: boolean = false;
  isContentPage: boolean = false;
  showInfraHead = false;
  cards = cardsData;
  // currentUrl = window.location.pathname;
  clickedCardTitle: string = '';
  isOpen: boolean = false;

  constructor(private dataService: DataService, private router: Router, private location: Location, public _as: AppServiceService, private _appService: AppServiceService, private appComponent: AppComponent) { }
  ngOnInit(): void {
    this.clickedCardTitle = this._appService.clickedCardTitle;
    console.log('cardTitle', this._appService.clickedCardTitle)
    this.navLinks = navigationLinks;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.headerupdate(event);
      }
    });
  }

  headerupdate(event: any) {
    console.log(event, "event")
    if (event.url !== "/") {
      this.isHomePage = false
    } else {
      this.isHomePage = true
    }

    if (event.url.split('/')[1] === "domain") {
      this.showInfraHead = true
      this.clickedCardTitle = event.url.split('/')[2].replace(/-/g, ' ');
      console.log(this.clickedCardTitle,event.url.split('/'), ' this.clickedCardTitle')
    } else {
      this.showInfraHead = false
    }
    if (event.url.split('/')[1] === 'blog') {
      this.isContentPage = true
    } else {
      this.isContentPage = false
    }
  }

  goBack() {
    this.location.back();
  }

  prevNextClickHandler(eventType: string) {
    this._as.onPrevNextClick.emit(eventType)
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public downloadPdf(): void {
    this.appComponent.downloadAsPdf();
    console.log('downloadAsPdf')
  }

}
