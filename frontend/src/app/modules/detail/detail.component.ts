import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Description } from 'src/app/model/itemDetail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  data: any
  description: Description

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    debugger;
    this.data = this.route.snapshot.data.dataResolver.item;
    this.description = this.route.snapshot.data.descriptionResolver;

    this.data.price.amount = new Intl.NumberFormat().format(this.data.price.amount);

  }

  sendSearch($event) {
    this.router.navigate(['/', $event]);
  }

}
