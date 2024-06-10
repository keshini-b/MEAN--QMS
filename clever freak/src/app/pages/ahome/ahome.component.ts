import { Component } from '@angular/core';
import { PageVisibilityService } from 'src/app/services/PageVisibilityService';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent {
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
