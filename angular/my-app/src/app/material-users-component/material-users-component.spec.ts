import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUsersComponent } from './material-users-component';

describe('MaterialUsersComponent', () => {
  let component: MaterialUsersComponent;
  let fixture: ComponentFixture<MaterialUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
