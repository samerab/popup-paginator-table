import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource, MatInput, MatPaginator} from '@angular/material';

import { flyInOut, heroState } from './animation';
import { WeatherService } from './weather.service';
import {user} from './user.interface';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      animations: [
        flyInOut,
        heroState
      ]
})
export class AppComponent implements OnInit {
        title = 'good';
        date = new Date();
        state = 'inactive';
        //users: Observable<user[]>;
        users: user[];
        displayedColumns = ['position', 'delete','name', 'weight'];
        dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);;
        @ViewChild(MatSort) sort: MatSort;
        @ViewChild(MatPaginator) paginator: MatPaginator;

        constructor(private cd: ChangeDetectorRef,
                    private weatherService: WeatherService
        ) {
            //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        }
        
        
       
        ngOnInit(){
            // this.weatherService.getData()
            //                 .subscribe(data => {
            //                     this.dataSource = new MatTableDataSource(data);
            //                     this.dataSource.sort = this.sort;
            //                 }
            //                 );
                            
                            
            
        }

        ngAfterViewInit() {
            
            this.cd.detectChanges();
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        }
        
        aler(element){
            alert(element.position);
        }
        toggle(input){
            input.focus();
            input.dir = "rtl"; 
            
            
        }

        applyFilter(filterValue: string) {
            filterValue = filterValue.trim(); // Remove whitespace
            filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
            this.dataSource.filter = filterValue;
          }


        itemsArray = 
        [
          {
              "name": "Item 1"
          },
          {
              "name": "Item 2"
          },
          {
              "name": "Item 3"
          },
          {
              "name": "Item 4"
          },
          {
              "name": "Item 5"
          },
          {
              "name": "Item 6"
          },
          {
              "name": "Item 7"
          },
          {
              "name": "Item 8"
          },
          {
              "name": "Item 9"
          },
          {
              "name": "Item 10"
          },
          {
              "name": "Item 11"
          },
          {
              "name": "Item 12"
          },
          {
              "name": "Item 13"
          },
          {
              "name": "Item 14"
          },
          {
              "name": "Item 15"
          },
          {
              "name": "Item 16"
          },
          {
              "name": "Item 17"
          },
          {
              "name": "Item 18"
          },
          {
              "name": "Item 19"
          },
          {
              "name": "Item 20"
          },
          {
              "name": "Item 21"
          },
          {
              "name": "Item 22"
          },
          {
              "name": "Item 23"
          },
          {
              "name": "Item 24"
          },
          {
              "name": "Item 25"
          },
          {
              "name": "Item 26"
          },
          {
              "name": "Item 27"
          },
          {
              "name": "Item 28"
          },
          {
              "name": "Item 29"
          },
          {
              "name": "Item 30"
          },
          {
              "name": "Item 31"
          },
          {
              "name": "Item 32"
          },
          {
              "name": "Item 33"
          },
          {
              "name": "Item 34"
          },
          {
              "name": "Item 35"
          },
          {
              "name": "Item 36"
          },
          {
              "name": "Item 37"
          },
          {
              "name": "Item 38"
          },
          {
              "name": "Item 39"
          },
          {
              "name": "Item 40"
          },
          {
              "name": "Item 41"
          },
          {
              "name": "Item 42"
          },
          {
              "name": "Item 43"
          },
          {
              "name": "Item 44"
          },
          {
              "name": "Item 45"
          },
          {
              "name": "Item 46"
          },
          {
              "name": "Item 47"
          },
          {
              "name": "Item 48"
          },
          {
              "name": "Item 49"
          },
          {
              "name": "Item 50"
          },
          {
              "name": "Item 51"
          },
          {
              "name": "Item 52"
          },
          {
              "name": "Item 53"
          },
          {
              "name": "Item 54"
          },
          {
              "name": "Item 55"
          },
          {
              "name": "Item 56"
          },
          {
              "name": "Item 57"
          },
          {
              "name": "Item 58"
          },
          {
              "name": "Item 59"
          },
          {
              "name": "Item 60"
          },
          {
              "name": "Item 61"
          },
          {
              "name": "Item 62"
          },
          {
              "name": "Item 63"
          },
          {
              "name": "Item 64"
          },
          {
              "name": "Item 65"
          },
          {
              "name": "Item 66"
          },
          {
              "name": "Item 67"
          },
          {
              "name": "Item 68"
          },
          {
              "name": "Item 69"
          },
          {
              "name": "Item 70"
          },
          {
              "name": "Item 71"
          },
          {
              "name": "Item 72"
          },
          {
              "name": "Item 73"
          },
          {
              "name": "Item 74"
          },
          {
              "name": "Item 75"
          },
          {
              "name": "Item 76"
          },
          {
              "name": "Item 77"
          },
          {
              "name": "Item 78"
          },
          {
              "name": "Item 79"
          },
          {
              "name": "Item 80"
          },
          {
              "name": "Item 81"
          },
          {
              "name": "Item 82"
          },
          {
              "name": "Item 83"
          },
          {
              "name": "Item 84"
          },
          {
              "name": "Item 85"
          },
          {
              "name": "Item 86"
          },
          {
              "name": "Item 87"
          },
          {
              "name": "Item 88"
          },
          {
              "name": "Item 89"
          },
          {
              "name": "Item 90"
          },
          {
              "name": "Item 91"
          },
          {
              "name": "Item 92"
          },
          {
              "name": "Item 93"
          },
          {
              "name": "Item 94"
          },
          {
              "name": "Item 95"
          },
          {
              "name": "Item 96"
          },
          {
              "name": "Item 97"
          },
          {
              "name": "Item 98"
          },
          {
              "name": "Item 99"
          },
          {
              "name": "Item 100"
          },
          {
              "name": "Item 101"
          },
          {
              "name": "Item 102"
          },
          {
              "name": "Item 103"
          },
          {
              "name": "Item 104"
          },
          {
              "name": "Item 105"
          },
          {
              "name": "Item 106"
          },
          {
              "name": "Item 107"
          },
          {
              "name": "Item 108"
          },
          {
              "name": "Item 109"
          },
          {
              "name": "Item 110"
          },
          {
              "name": "Item 111"
          },
          {
              "name": "Item 112"
          },
          {
              "name": "Item 113"
          },
          {
              "name": "Item 114"
          },
          {
              "name": "Item 115"
          },
          {
              "name": "Item 116"
          },
          {
              "name": "Item 117"
          },
          {
              "name": "Item 118"
          },
          {
              "name": "Item 119"
          },
          {
              "name": "Item 120"
          },
          {
              "name": "Item 121"
          },
          {
              "name": "Item 122"
          },
          {
              "name": "Item 123"
          },
          {
              "name": "Item 124"
          },
          {
              "name": "Item 125"
          },
          {
              "name": "Item 126"
          },
          {
              "name": "Item 127"
          },
          {
              "name": "Item 128"
          },
          {
              "name": "Item 129"
          },
          {
              "name": "Item 130"
          },
          {
              "name": "Item 131"
          },
          {
              "name": "Item 132"
          },
          {
              "name": "Item 133"
          },
          {
              "name": "Item 134"
          },
          {
              "name": "Item 135"
          },
          {
              "name": "Item 136"
          },
          {
              "name": "Item 137"
          },
          {
              "name": "Item 138"
          },
          {
              "name": "Item 139"
          },
          {
              "name": "Item 140"
          },
          {
              "name": "Item 141"
          },
          {
              "name": "Item 142"
          },
          {
              "name": "Item 143"
          },
          {
              "name": "Item 144"
          },
          {
              "name": "Item 145"
          },
          {
              "name": "Item 146"
          },
          {
              "name": "Item 147"
          },
          {
              "name": "Item 148"
          },
          {
              "name": "Item 149"
          },
          {
              "name": "Item 150"
          }
      ];

      itemsInPage: any[];
      
      
      
      setPage(items){
        //setTimeout(() => this.itemsInPage = items, 0);
      this.itemsInPage = items;
      
      }

      x(){
        alert('kjlkj');
      }



      
}


export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  export const ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
