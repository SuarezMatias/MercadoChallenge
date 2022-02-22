import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './modules/browse/components/browse.component';
import { DetailComponent } from './modules/detail/detail.component';
import { DescriptionDataResolver } from './modules/detail/services/description.resolver';
import { DetailDataResolver } from './modules/detail/services/detail.resolver';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: ':search', component: BrowseComponent },
  { 
    path: 'items/:itemId',
    component: DetailComponent,
    resolve: {
      dataResolver: DetailDataResolver,
      descriptionResolver: DescriptionDataResolver 
    }
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
