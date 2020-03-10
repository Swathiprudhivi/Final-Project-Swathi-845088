import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {

  constructor(private route:Router) {
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }
   }

  ngOnInit() {
  }
  Logout()
  {
    localStorage.clear();
    localStorage.removeItem('buyerid');
    localStorage.removeItem('sellerId');
    localStorage.removeItem('token');
    this.route.navigateByUrl('/home');
  }
}
