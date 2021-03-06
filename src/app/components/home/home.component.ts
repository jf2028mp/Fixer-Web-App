import { Component, OnInit ,NgZone} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private zone:NgZone) { }

  ngOnInit() {
  }
  goToTechnicians(){
  	this.router.navigate(["/technicians"]);
  }
  goToCategories(){
  	this.router.navigate(["/categories"]);
  }
  goToBreakdowns(){
    this.router.navigate(['/breakdowns']);
  }
  goToUsers(){
    this.router.navigate(["/users"]);
  }
  goToOrders(){
    this.router.navigate(['/orders']);
  }
}
