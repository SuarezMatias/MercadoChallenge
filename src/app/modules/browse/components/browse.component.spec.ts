import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { CategoriesBarComponent } from '../../categories-bar/categories-bar.component';
import { HeaderComponent } from '../../header/components/header.component';

import { BrowseComponent } from './browse.component';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [ FormBuilder ],
      declarations: [ BrowseComponent, HeaderComponent, CategoriesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#handleError', () => {
    it('Should return an observable of true', () => {
      //arrange
      const error = 'error';

      //act
      component.handleError(error).subscribe(res => {        
        //assert
        expect(res).toBeTruthy();
        expect(res).not.toBeFalsy();
      });

    });    
  });
  
  describe('#sendSearch', () => {
    it('Should not call routing navigate if param is null', () => {
      //arrange
      const searchTerm = null;
      const spy = spyOn((component as any).router, 'navigate');

      //act
      component.sendSearch(searchTerm);

      //assert
      expect(spy).not.toHaveBeenCalled();
    });

    it('Should not call routing navigate if param is empty', () => {
      //arrange
      const searchTerm = '';
      const spy = spyOn((component as any).router, 'navigate');

      //act
      component.sendSearch(searchTerm);

      //assert
      expect(spy).not.toHaveBeenCalled();
    });
    
    it('Should navigate if searchTerm is provided', () => {
      //arrange
      const searchTerm = 'paleta';
      const spy = spyOn((component as any).router, 'navigate');

      //act
      component.sendSearch(searchTerm);

      //assert
      expect(spy).toHaveBeenCalled();
    });    
  });   
});
