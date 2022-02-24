import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Description, Detail, ItemDetail } from 'src/app/model/itemDetail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  public data: Detail;
  public description: Description;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.data.dataResolver.item;
    console.log(this.data)
    this.description = this.route.snapshot.data.descriptionResolver;
  }

  sendSearch($event) {
    this.router.navigate(['/'], {
      relativeTo: this.route,
      queryParams: { search: $event },
      queryParamsHandling: 'merge'
    })
  }

}
