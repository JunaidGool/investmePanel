import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Entity } from '../../models/Entity';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  id: string;
  children:Entity[];
  childrenDetails = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //get ID
    this.id = this.route.snapshot.params['id'];
    
    // get children
    this.dataService.getChildren().subscribe(children => {
      this.children = children;
      for (let i=0; i < this.children.length; i++){
        if(this.id == children[i].entityID){
          children = children[i];
          this.children = children;
          
          this.childrenDetails.push(children);

          console.log(this.childrenDetails)

          
        };
      };
     
    });
  };
}
