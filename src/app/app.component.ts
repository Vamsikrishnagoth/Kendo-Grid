
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DataService } from './data.service';
import { trashIcon } from "@progress/kendo-svg-icons";
import { IconSize } from '@progress/kendo-angular-icons';
import { tableWizardIcon} from '@progress/kendo-svg-icons';
import { RowClassArgs } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  gridData: any;
  public icons = { table: tableWizardIcon };
  
  constructor(private _dataSVC : DataService){

  }
  title = ``;
  public opened = false;
  img = ''
  public mySelection: string[] = [];
  
  ngOnInit(){
    this.getGridinfo();
  }
  getGridinfo(){
    this._dataSVC.getDataFromServe().subscribe((res:any) =>{
      this.gridData =  res;
     
    })
    
  }
  public close(status: string): void {
      console.log(`Dialog result: ${status}`);
      this.opened = false;
  }

  public open(): void {
      this.opened = true;
  }
  
  public rowCallback = (context: RowClassArgs) => {
    switch (context.dataItem.status) {
        case "STOPPED":
            return "redRow";
        default:
            return {};
    }
  }
    
  
  }
