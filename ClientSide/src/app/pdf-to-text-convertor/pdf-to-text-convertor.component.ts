import { HttpClient } from '@angular/common/http';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { BehaviorSubject, elementAt } from 'rxjs';
import { WebApiCallService } from '../services/web-api-call.service';

@Component({
  selector: 'app-pdf-to-text-convertor',
  templateUrl: './pdf-to-text-convertor.component.html',
  styleUrls: ['./pdf-to-text-convertor.component.css']
})
export class PdfToTextConvertorComponent implements OnInit {

  uploadFileContent: string = '';
  file!: File;
  fileDownloadLinkDisplay: boolean = false;
  fileName: string = '';
  fileResponse: Blob = null!;
  fileUploadPlaceHolderText:string = 'Upload a proper PDF file';
  convertMeButtonDisable:boolean=true;
  constructor(private webApi: WebApiCallService, private el: ElementRef) { }

  ngOnInit(): void {
  }


  async uploadFile(data: any) {
    this.file = data.target.files[0];
    if (this.file.name.endsWith('.pdf')) {
      this.uploadFileContent = await this.file.text();
      this.convertMeButtonDisable = false;
    }
    else {
      this.fileUploadPlaceHolderText = this.file.name + ' is not a proper pdf file';
      this.convertMeButtonDisable  = true;
    }
  }

  convertToText() {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.webApi.convertPdfToText(formData).subscribe(response => {
      this.fileDownloadLinkDisplay = response != null || undefined ? true : this.fileDownloadLinkDisplay;
      this.fileName = (response.headers.get('content-disposition')?.split(';')[1].split('=')[1])!;
      this.fileResponse = response.body as Blob;
    });
  }

  downloadFile(data:Event) {
    data.preventDefault();
    saveAs(this.fileResponse,this.fileName);
  }
}

