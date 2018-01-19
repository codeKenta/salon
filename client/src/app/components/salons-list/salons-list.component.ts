import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-salons-list',
  templateUrl: './salons-list.component.html',
  styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {
  salons: any;
  expandPriceRange: boolean = false;
  selectedPriceRange: any = {};

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    // Saves a default optionNumber in sessionStorage
    // if it not already have been set.
    // The option is then used for setting the price range
    // before the feed is loaded.
    if(!sessionStorage.optionNumber) {
      sessionStorage.optionNumber = 2;
    }
    this.setPriceRange(sessionStorage.optionNumber);
    this.getSalonsByPriceRange();
  }

// Gets all the salons which within the price range.
  getSalonsByPriceRange(){
    this.dataService.getSalonsByPriceRange(this.selectedPriceRange.min, this.selectedPriceRange.max).subscribe(salons => {
      this.salons = salons;
      return true;
    }, err => {
      console.log(err);
      return false;
    });
  }

  // Toggles the boolean-state of the variable expandPriceRange which is
  // used by ngClass for adding a .selected-class to the price range element
  // which then toggles the show state of the options
  toggleShowPriceRange(){
    this.expandPriceRange = !this.expandPriceRange;
  }

  // Method called from interface
  // Sets the pricerange and updating the sam in interface.
  // Toggles the options and updating the feed.
  selectPriceRange(optionNumber){
    this.setPriceRange(optionNumber);
    this.getSalonsByPriceRange();
    this.toggleShowPriceRange();
  }

  // Method which using a switch-statement
  // for setting the price range by taking
  // the optionNumber as parameter.

  // Storing the option in sessionStorage
  // so the lates selected option remains under the session.
  setPriceRange(optionNumber){
    sessionStorage.optionNumber = optionNumber;
    let parsedOptNum = parseInt(optionNumber)

    switch(parsedOptNum) {
      case 1:
        this.selectedPriceRange = {
          option: parsedOptNum,
          min: 0,
          max: 250,
          text: 'under 250'
        };
          break;

      case 2:
          this.selectedPriceRange = {
            option: parsedOptNum,
            min: 320,
            max: 500,
            text: '250-500'
          };
          break;

      case 3:
          this.selectedPriceRange = {
            option: parsedOptNum,
            min: 500,
            max: 750,
            text: '500-750'
          };
          break;

      case 4:
          this.selectedPriceRange = {
            option: parsedOptNum,
            min: 750,
            max: 900,
            text: '750-900'
          };
          break;

      case 5:
          this.selectedPriceRange = {
            option: parsedOptNum,
            min: 900,
            max: 10000,
            text: 'över 900'
          };
          break;
      default:
          break;
    }

  }


}
