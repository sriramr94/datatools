import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSharingService } from './services/data-sharing.service';
import { DestinationComponent } from './destination/destination.component';
import { ParseComponent } from './parser/parser.component';
import { PdfToTextConvertorComponent } from './pdf-to-text-convertor/pdf-to-text-convertor.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    ParseComponent,
    PdfToTextConvertorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
