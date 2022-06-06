import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalTableComponent } from './portal-table.component';

describe('PortalTableComponent', () => {
  let component: PortalTableComponent;
  let fixture: ComponentFixture<PortalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
