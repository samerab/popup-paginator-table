import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PagerService } from '../pager.service';
import { HttpClient } from '@angular/common/http'
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor(
    private pagerService: PagerService,
    private http: HttpClient
  ) { }

  // array of all items to be paged
  @Input() itemsArray: any[];

  // pager object
  pager: any = {};

  // create event
  @Output() paginate: EventEmitter<any> = new EventEmitter<any>();
  

  setPage(page: number) {
    
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.itemsArray, page);
    this.paginate.emit(this.pager.itemsInPage);
    
  }



  //*********************** */
  ngOnInit() {
    // this.http.get('./dummy-data.json').subscribe(data => {
    //   this.allItems = data;
    //    // initialize to page 1
    //    this.setPage(1);
    // })

    
  
  this.setPage(1);

  }

  
  //**************************** */

}
