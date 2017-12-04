import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Loan } from '../../models/Loan';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.css']
})
export class LimitsComponent implements OnInit {
  id: string;
  limits: Loan[];
  limitDetails: any[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //get ID
    this.id = this.route.snapshot.params['id'];

    // get children
    this.dataService.getLoans().subscribe(limits => {
      this.limits = limits;
      for (let i = 0; i < this.limits.length; i++) {
        if (this.id == limits[i].entityID) {
          limits = limits[i];
          this.limits = limits;

          this.limitDetails.push(limits);

          console.log(this.limitDetails)


        };
      };

    });
  }

}
