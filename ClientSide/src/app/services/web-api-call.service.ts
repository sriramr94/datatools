import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class WebApiCallService {
  domainUrl: string = 'http://localhost:8000/';
  uri: string = '';

  constructor(private httpClient: HttpClient, private dataShare: DataSharingService) {
  }

  convertPdfToText(formData: FormData) {
    return this.httpClient.post(this.domainUrl + 'PdfToTextConverter/pdfToText', formData, { observe: 'response', responseType: 'blob' });
  }

  parseHtml(inputText: string) {
    return this.httpClient.post(this.domainUrl + 'InputHtmlParser/parseHtml', inputText, { responseType: 'text' });
  }
  
  parseHtmlFile(fileContent: string)
  {
    return this.httpClient.post(this.domainUrl + 'InputHtmlParser/ParseHtmlFile',fileContent, { responseType: 'text'});
  }

  parseHtmlUrl(htmlContent: string)
  {
    return this.httpClient.post(this.domainUrl + 'InputHtmlParser/parseUrlInput',htmlContent,{responseType : 'text'});
  }

  getMatchingWordsByKey(key: string)
  {
    return this.httpClient.post(this.domainUrl + 'SearchMatchingWords/getMatchingWordsByKey', key, { responseType: 'text' });
  }
  
  getRelatedArticlesWithRequestedCount(key: string, count: number)
  {
    return this.httpClient.post(this.domainUrl + 'SearchRelatedArticles/getRelatedArticlesByCount',{input : key, articleCount : count} , {responseType: 'text'});
  }
}
