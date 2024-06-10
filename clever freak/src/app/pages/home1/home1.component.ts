import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  constructor(private router:Router){}
  // Component logic
  getabout(){
    this.router.navigate(['/about']);
  }
}
