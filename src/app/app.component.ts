
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

  constructor(private _dataSVC : DataService){

  }
  title = 'angular-kendo-unite';
  public mySelection: string[] = [];
  ngOnInit(){
    this.getGridinfo();
  }
  getGridinfo(){
    this._dataSVC.getDataFromServe().subscribe((res:any) =>{
      this.gridData =  res;
    })
  }
}
