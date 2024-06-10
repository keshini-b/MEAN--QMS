import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { PageVisibilityService } from 'src/app/services/PageVisibilityService';
//import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.css']
})
export class UhomeComponent {
  isAprofVisible!: boolean;
  constructor(public pageVisibilityService: PageVisibilityService) {}

  navigateToAprof() {
    this.pageVisibilityService.showAprof();
  }

  navigateToUprof() {
    this.pageVisibilityService.showUprof();
  }

  navigateToAddSong() {
    this.pageVisibilityService.showAddSong();
  }

  navigateToViewReviews() {
    this.pageVisibilityService.showViewReviews();
  }
    
  navigateToViewlist() {
    this.pageVisibilityService.showAlist();
  }

  navigateToRemove() {
    this.pageVisibilityService.showRemove();
  }

  navigateToAChange() {
    this.pageVisibilityService.showAChange();
  }
 
}
