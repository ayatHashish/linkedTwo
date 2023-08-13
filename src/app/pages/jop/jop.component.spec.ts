import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JopComponent } from './jop.component';

describe('JopComponent', () => {
  let component: JopComponent;
  let fixture: ComponentFixture<JopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
