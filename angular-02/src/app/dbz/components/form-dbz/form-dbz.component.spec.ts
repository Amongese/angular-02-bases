import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDbzComponent } from './form-dbz.component';

describe('FormDbzComponent', () => {
  let component: FormDbzComponent;
  let fixture: ComponentFixture<FormDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDbzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});