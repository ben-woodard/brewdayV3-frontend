import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedUsersComponent } from './requested-users.component';

describe('RequestedUsersComponent', () => {
  let component: RequestedUsersComponent;
  let fixture: ComponentFixture<RequestedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestedUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
