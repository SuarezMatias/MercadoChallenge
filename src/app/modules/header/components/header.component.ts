import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() sendSearchEvent: EventEmitter<string> = new EventEmitter<string>();

  public searchFormGroup: FormGroup;
  public searchText: string;

  constructor(
    private formBuilder: FormBuilder,
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
    const p = this.searchFormGroup.getRawValue();
    this.sendSearchEvent.emit(p.searchText);
  }
  
}
