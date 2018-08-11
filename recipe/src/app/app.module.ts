import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RecipeService } from './recipe.service';
import { ListItemDetailComponent } from './list-item-detail/list-item-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AboutComponent } from './about/about.component';

const routes = [
  {
    path: 'recipes/:mealTime',
    component: SearchBarComponent
  },
  {
    path: 'recipes/:mealTime/:recipe',
    component: ListItemDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'recipes/all'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ListItemComponent,
    ListItemDetailComponent,
    SearchBarComponent,
    DropdownDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}) // use hash in url
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
