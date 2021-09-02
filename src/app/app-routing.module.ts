import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FoucsComponent } from './pages/foucs/foucs.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';

const routes: Routes = [
  { path:'home',
  component: HomeComponent
},
{ path:'about',
component: AboutComponent
},
{ path:'foucs',
component: FoucsComponent
},
{ path:'contact',
component: ContactComponent 
},
{ path:'join',
component: JoinComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
