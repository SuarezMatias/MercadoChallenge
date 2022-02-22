import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemSearch } from 'src/app/model/ItemSearch';
import { SearchMapper } from '../../search-mapper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() sendSearchEvent: EventEmitter<string> = new EventEmitter<string>();

  searchFormGroup: any;
  searchText: string;

  constructor(
    private formBuilder: FormBuilder,
    private searchMapper: SearchMapper,
  ) { }

  ngOnInit() {
    this.searchFormGroup = this.formBuilder.group({            
      searchText: ['', {
        validators: [
          Validators.maxLength(150),
        ],
        updateOn: 'change'
      }],
      
    });

  }

  sendSearch() {
    const p = this.searchFormGroup.getRawValue()
    this.sendSearchEvent.emit(p.searchText)
  }
  
}
