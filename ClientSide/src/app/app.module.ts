import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSharingService } from './services/data-sharing.service';
import { ParseComponent } from './parser/parser.component';
import { PdfToTextConvertorComponent } from './pdf-to-text-convertor/pdf-to-text-convertor.component';
import { SearchMatchingWordsComponent } from './searchMatchingWords/search-matching-words.component';
import { SearchRelatedArticleComponent } from './SearchRelatedArticle/search-related-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ParseComponent,
    PdfToTextConvertorComponent,
    SearchMatchingWordsComponent,
    SearchRelatedArticleComponent
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
