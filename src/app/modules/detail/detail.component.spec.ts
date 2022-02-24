import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { DetailComponent } from './detail.component';
import { Description, Detail, ItemDetail } from 'src/app/model/itemDetail';
import { Author } from 'src/app/model/ItemSearch';
import { ActivatedRoute, Resolve, RouterModule } from '@angular/router';
import { DetailDataResolver } from './services/detail.resolver';
import { Mock } from 'protractor/built/driverProviders';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
class MockDetailDataResolver implements Resolve<ItemDetail> {
  constructor() {}
  resolve(): Observable<ItemDetail> {
    const detail = {} as ItemDetail;
    return of(detail);
  } 
}

@Injectable()
class MockDescriptionDataResolver implements Resolve<Description> {
  constructor() {}
  resolve(): Observable<Description> {
    const description = {} as Description;
    return of(description);
  } 
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
   
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        NgbModule,
        FormsModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
          {
            component: DetailComponent,
            path: 'items/:itemId',
            resolve: {
              dataResolver: MockDetailDataResolver,
              descriptionResolver: MockDescriptionDataResolver
            },            
          }
        ])        
       ],
      declarations: [ DetailComponent ],
      providers: [ {
        provide: ActivatedRoute,
        useValue: { snapshot: {
           params: { 'id': 'MLA1'}},           
          }
      },     
     ]
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
