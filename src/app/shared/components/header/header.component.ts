import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, NavigationEnd } from '@angular/router';
import { navigationLinks } from 'src/app/data/sample.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any;
  isHomePage: boolean = true;


  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit(): void {
    this.navLinks = navigationLinks;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.headerupdate(event);
      }
    });
  }

  headerupdate(event: any) {
    if (event.url !== "/") {
      this.isHomePage = false
    } else {
      this.isHomePage = true
    }
  }
}
