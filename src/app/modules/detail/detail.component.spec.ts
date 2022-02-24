import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { DetailComponent } from './detail.component';
import { Description, Detail, ItemDetail } from 'src/app/model/itemDetail';
import { Author } from 'src/app/model/ItemSearch';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/components/header.component';
import { CategoriesBarComponent } from '../categories-bar/categories-bar.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
   
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ 
        NgbModule,
        FormsModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,               
       ],
      declarations: [ DetailComponent, HeaderComponent, CategoriesBarComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              dataResolver: of({ id: 'MLA1'}),
              descriptionResolver: of({
                text: 'Description',
                plain_text: 'Text',
                last_updated: 'Date',
                date_created: 'Date',
                snapshot: null
              }),
            }
          }
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.data = {
      author: {} as Author,
      item: {} as Detail
    } as ItemDetail;    
    component.description = {} as Description;
    expect(component).toBeTruthy();
  });
});
