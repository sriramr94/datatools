import { JsonPipe } from '@angular/common';
import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { WebApiCallService } from 'src/app/services/web-api-call.service';

@Component({
  selector: 'app-search-matching-words',
  templateUrl: './search-matching-words.component.html',
  styleUrls: ['./search-matching-words.component.css']
})
export class SearchMatchingWordsComponent implements OnInit {

  constructor(private webApi : WebApiCallService ) { }
  inputSearchKey: string = '';
  matchingWords : string [] = [];
  hashTagchecked: boolean = true;
  underScoreChecked: boolean = false;
  ngOnInit(): void {
  }

  toggleCheckBox(event: Event)
  {
    if((event.target as HTMLElement).id.toLowerCase() == 'underscore')
    {
      this.underScoreChecked = true;
      this.hashTagchecked = false;
      this.setUnderScore();
      
    }
    else{
      this.underScoreChecked = false;
      this.hashTagchecked = true;
      this.setHashTag();
     
    }
    
  }
  
  getMatchingWordsByKey()
  {
    this.matchingWords = [];
    this.webApi.getMatchingWordsByKey(this.inputSearchKey).subscribe(response =>{  
      let res = JSON.parse(response);
      for(let i = 0; i < res.length; i++)
      {
        this.matchingWords.push(res[i]);
      }
      if(this.hashTagchecked)
      {
        this.setHashTag();
      }
      else{
        this.setUnderScore();
      }

    });
  }

  private setUnderScore()
  {
    for(let i = 0; i <this.matchingWords.length; i++)
      {
         this.matchingWords[i] =  this.matchingWords[i].replace('#','');
         this.matchingWords[i] =  this.matchingWords[i].replace(/ /g,'_');
      }
  }

  private setHashTag()
  {
    for(let i = 0; i < this.matchingWords.length; i++)
    {
       this.matchingWords[i] =  '#'+ this.matchingWords[i];
       this.matchingWords[i] = this.matchingWords[i].replace(/_/g,' ');
    }
  }

}
