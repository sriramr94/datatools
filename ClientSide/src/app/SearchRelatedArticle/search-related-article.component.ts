import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WebApiCallService } from '../services/web-api-call.service';

@Component({
  selector: 'app-search-related-article',
  templateUrl: './search-related-article.component.html',
  styleUrls: ['./search-related-article.component.css']
})
export class SearchRelatedArticleComponent implements OnInit {

  constructor(private webApi: WebApiCallService) { }
  inputText: string = '';
  articleCount: number = 1;
  // result: string[] = [];
  
  urls: [{ 'heading': string, 'url': string }] = [{ heading: '', url: '' }];

  ngOnInit(): void {
  }

  searchArticle() {
    let urls = {};
    this.webApi.getRelatedArticlesWithRequestedCount(this.inputText, this.articleCount).subscribe(
      response => {
        this.urls = [{ heading: '', url: '' }];
        let res  = JSON.parse(response);
        let resCount = res[0].length;
        for(let i = 0 ; i < resCount; i++)
        {
          this.urls.push({heading:res[0][i],url:res[1][i]});
        }

        this.urls.shift();
        console.log(this.urls);
      }      
    );
  }

}
