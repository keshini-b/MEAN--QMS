import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageVisibilityService {
  public isAprofVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isUprofVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAddSongVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isViewReviewsVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public ishomeVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public issearchVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isreviewVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public islistVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isviewlistVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isachangeVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isuchangeVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isremoveVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  showAprof() {
    this.isAprofVisible.next(true);
    this.hideAllExcept('aprof');
  }

  showUprof() {
    this.isUprofVisible.next(true);
    this.hideAllExcept('uprof');
  }

  showAddSong() {
    this.isAddSongVisible.next(true);
    this.hideAllExcept('addsong');
  }

  showViewReviews() {
    this.isViewReviewsVisible.next(true);
    this.hideAllExcept('aview');
  }
  showAlist() {
    this.isviewlistVisible.next(true);
    this.hideAllExcept('viewlist');
  }

  showRemove() {
    this.isremoveVisible.next(true);
    this.hideAllExcept('remove');
  }

  showAChange() {
    this.isachangeVisible.next(true);
    this.hideAllExcept('achange');
  }

  showhome() {
    this.ishomeVisible.next(true);
    this.hideAllExcept('uhome');
  }

  showsearch() {
    this.issearchVisible.next(true);
    this.hideAllExcept('search');
  }

  showreview() {
    this.isreviewVisible.next(true);
    this.hideAllExcept('review');
  }

  showlist() {
    this.islistVisible.next(true);
    this.hideAllExcept('playlist');
  }

  showUChange() {
    this.isuchangeVisible.next(true);
    this.hideAllExcept('uchange');
  }

  private hideAllExcept(except: string) {

    const all = [this.isAprofVisible, this.isUprofVisible, this.isAddSongVisible ,this.isViewReviewsVisible,this.ishomeVisible,this.issearchVisible,this.isreviewVisible,this.islistVisible,this.isachangeVisible,this.isuchangeVisible,this.isremoveVisible,this.isviewlistVisible];
    all.forEach(subject => {
      if (subject && subject !== this.getSubjectByName(except)) {
        subject.next(false);
      }
    });
  }

  private getSubjectByName(name: string): BehaviorSubject<boolean> {
    switch (name) {
      case 'aprof':
        return this.isAprofVisible;
      case 'uprof':
        return this.isUprofVisible;
      case 'addsong':
        return this.isAddSongVisible;
      case 'aview':
        return this.isViewReviewsVisible;
      case 'achange':
          return this.isachangeVisible;
      case 'uchange':
          return this.isuchangeVisible;
      case 'remove':
          return this.isremoveVisible;
      case 'viewlist':
          return this.isviewlistVisible;
      case 'uhome':
        return this.ishomeVisible;
      case 'search':
        return this.issearchVisible;
      case 'review':
        return this.isreviewVisible;
      case 'playlist':
        return this.islistVisible;
      default:
        return new BehaviorSubject<boolean>(false); // Return default BehaviorSubject
    }
  }
}
