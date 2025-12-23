import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUserEditComponent } from './material-user-edit-component';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';

describe('MaterialUserEditComponent', () => {
  let component: MaterialUserEditComponent;
  let fixture: ComponentFixture<MaterialUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUserEditComponent],
      providers: [provideHttpClient(), provideRouter([])],
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
