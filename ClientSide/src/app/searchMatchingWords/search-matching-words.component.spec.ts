import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMatchingWordsComponent } from './search-matching-words.component';

describe('SearchMatchingWordsComponent', () => {
  let component: SearchMatchingWordsComponent;
  let fixture: ComponentFixture<SearchMatchingWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMatchingWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMatchingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
