import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { DataSharingService } from '../services/data-sharing.service';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParseComponent {

  inputHtmlText: string = '';
  inputHtmlUrl: string = '';
  inputHtmlFileContent: string = '';
  textAreaString: string = '';
  choosenInputIndex: number = 0;
  headers: HttpHeaders = new HttpHeaders();
  constructor(private navigationRoute: Router, private http: HttpClient, private dataShare: DataSharingService) {
    this.choosenInputIndex = 0;
    this.dataShare.getResponseFromDjango().subscribe(s => {
      this.textAreaString = s
    });
    this.headers.append('content-type', 'application/json')
  }

  changeInputType(data: any): void {
    this.choosenInputIndex = data.selectedIndex;
  }

  async uploadFile(data: any) {
    const file: File = data.target.files[0];
    if (file.name.endsWith('.html')) {
      this.inputHtmlFileContent = await file.text();
    }
    else{
      this.textAreaString = `The uploaded file ${file.name} does not have proper extension which is .html`;
    }
  }

  parse(data: any): void {
    if (data.selectedIndex == 0) {
      this.parseHtml();
    }
    else if (data.selectedIndex == 1) {
      this.parseHtmlUrl();
    }
    else {
      this.parseHtmlFile();
    }
  }

  parseHtml() {
    try {
      let response = this.http.post('http://localhost:8000/InputHtmlParser/parseHtml', this.inputHtmlText, { responseType: 'text' });
      response.subscribe(res => {
        this.dataShare.updateResponseFromDjango(res);
      });
    }
    catch (ex: any) {
      console.log(ex);
    }
  }

  parseHtmlFile() {
    try {
      // This function invokes the django rest api to get the response
      debugger;
      let response = this.http.post('http://localhost:8000/InputHtmlParser/ParseHtmlFile', this.inputHtmlFileContent, { responseType: 'text' });
      response.subscribe(res => {
        this.dataShare.updateResponseFromDjango(res);
      });
    }
    catch (ex) {
      console.log(ex);
    }
  }

  parseHtmlUrl() {
    try {
      // This function invokes the django rest api to get the response
      // let body = JSON.stringify(this.inputHtmlUrl);
      let response = this.http.post('http://127.0.0.1:8000/InputHtmlParser/parseUrlInput', this.inputHtmlUrl, { responseType: 'text' });
      response.subscribe(res => {
        this.dataShare.updateResponseFromDjango(res);
      });
    }
    catch (ex) {
      console.log(ex);
    }
  }

}
