
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { trashIcon } from "@progress/kendo-svg-icons";
import { IconSize } from '@progress/kendo-angular-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gridData: any;
  public icons = { trash: trashIcon };
  hideCheckBox: boolean = false;

  constructor(private _dataSVC : DataService){

  }
  title = ``;
  public opened = false;

  public mySelection: string[] = [];
  
  ngOnInit(){
    this.getGridinfo();
  }
  getGridinfo(){
    this._dataSVC.getDataFromServe().subscribe((res:any) =>{
      this.gridData =  res;
      for(let o of this.gridData){
        if(o.Prescriptionitem === "STAT/ONCE ONLY"){
          console.log(o.Prescriptionitem)
          this.hideCheckBox = true;
        }
     }
    })
  }
  public close(status: string): void {
      console.log(`Dialog result: ${status}`);
      this.opened = false;
  }

  public open(): void {
      this.opened = true;
  }
  elements = [{
    "ProductID": 1,
    "ProductName": "Chai",
    "UnitPrice": 18.0000,
    attributes: {
      style: "font-size: 14px"
    }
}, {
    "ProductID": 2,
    "ProductName": "Chang",
    "UnitPrice": 19.0000
}, {
    "ProductID": 3,
    "ProductName": "Aniseed Syrup",
    "UnitPrice": 10.0000
}, {
    "ProductID": 4,
    "ProductName": "Chef Anton's Cajun Seasoning",
    "UnitPrice": 22.0000
}, {
    "ProductID": 5,
    "ProductName": "Chef Anton's Gumbo Mix",
    "UnitPrice": 21.3500,
    attributes: {
      "class": "table-cell k-text-right",
      style: "font-size: 14px"
    }
}];

elementsMeta = {
    field: "StateString",
    title: "State",
    width: "120px",
    encoded: true,                           
    attributes: {
        "class": "table-cell",
        style: "font-size:20px"
    }}
  
  }
