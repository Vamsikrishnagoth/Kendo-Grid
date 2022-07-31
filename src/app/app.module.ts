import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule, SVGIconModule } from "@progress/kendo-angular-icons";
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { LabelModule } from "@progress/kendo-angular-label";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    IconsModule,
    ButtonModule,
    LayoutModule,
    DialogsModule,
    LabelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SVGIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
