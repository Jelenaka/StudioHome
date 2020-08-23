import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
    {path: 'portfolio',
      component: PortfolioComponent
    }, {
      path: 'home',
      component: HomeComponent
    }, {
      path: 'contact',
      component: ContactComponent
    },{
      path: 'about-me',
      component: AboutMeComponent
      },{
        path: '',
        component: HomeComponent
        }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
