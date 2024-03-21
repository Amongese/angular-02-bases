import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDbzComponent } from './list-dbz.component';

describe('ListDbzComponent', () => {
  let component: ListDbzComponent;
  let fixture: ComponentFixture<ListDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDbzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});