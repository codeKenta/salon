import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-salons-list',
  templateUrl: './salons-list.component.html',
  styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  salons: any;

  constructor(
    private dataService: DataService,
  ) {
    this.minPrice = 320;
    this.maxPrice = 500;
    this.getSalonsByPriceRange();
  }

  ngOnInit() {

  }

  getSalonsByPriceRange(){
    this.dataService.getSalonsByPriceRange(this.minPrice, this.maxPrice).subscribe(salons => {
      this.salons = salons;
      return true;
    }, err => {
      console.log(err);
      return false;
    });
  }
}
