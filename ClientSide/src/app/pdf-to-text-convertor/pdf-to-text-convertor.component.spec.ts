import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToTextConvertorComponent } from './pdf-to-text-convertor.component';

describe('PdfToTextConvertorComponent', () => {
  let component: PdfToTextConvertorComponent;
  let fixture: ComponentFixture<PdfToTextConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfToTextConvertorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfToTextConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
