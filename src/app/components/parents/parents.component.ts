import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Entity } from '../../models/Entity';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  parents: any[];
  count: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getParents().subscribe((parents) => {
      this.parents = parents;
      this.getCount();
    })
    
  }

  getCount(){
    let totalCount = 0;
    for(let i=0; i < this.parents.length; i++){
      totalCount++
    }
    this.count = totalCount;

  }

}
