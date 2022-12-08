import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRelatedArticleComponent } from './search-related-article.component';

describe('SearchRelatedArticleComponent', () => {
  let component: SearchRelatedArticleComponent;
  let fixture: ComponentFixture<SearchRelatedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRelatedArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRelatedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
