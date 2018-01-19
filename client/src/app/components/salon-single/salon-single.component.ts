import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-salon-single',
  templateUrl: './salon-single.component.html',
  styleUrls: ['./salon-single.component.scss']
})
export class SalonSingleComponent implements OnInit {
  salon: any = {};
  closeHour: string;
  routeIdentityname: string;
  paramsSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.routeIdentityname = params['identityname'];
          this.getSalon();
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  getSalon(){
    this.dataService.getSalonByIdentityName(this.routeIdentityname).subscribe(salon => {
      this.salon = salon;
      this.todaysCloseHour(salon)
      return true;
    }, err => {
      console.log(err);
      return false;
    });
  }

  // return todays weekday in short format
  toDay(){
    let date = new Date();
    let dayNumberIndex = date.getDay() - 1;
    let days = ['mon','tue','wed','thur','fri','sat','sun',]
    return days[dayNumberIndex];
  }

  // Transforms the close hours from minutes to hours
  todaysCloseHour(salon){
    this.closeHour = salon['hours'][this.toDay()]['close'];
  }


}
