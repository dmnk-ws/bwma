import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUserEditComponent } from './material-user-edit-component';

describe('MaterialUserEditComponent', () => {
  let component: MaterialUserEditComponent;
  let fixture: ComponentFixture<MaterialUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUserEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
