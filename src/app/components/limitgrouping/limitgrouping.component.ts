import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Limit } from '../../models/Limit';

@Component({
  selector: 'app-limitgrouping',
  templateUrl: './limitgrouping.component.html',
  styleUrls: ['./limitgrouping.component.css']
})
export class LimitgroupingComponent implements OnInit {
  limits: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLimits().subscribe((limits) => {
      this.limits = limits;
      console.log(limits)
    })
    
  }

}
