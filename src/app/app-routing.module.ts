// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MicroImprovementComponent } from './modules/micro-improvement/micro-improvement.component';
import { InfrastructureComponent } from './modules/infrastructure/infrastructure.component';
import { ExplorePageComponent } from './modules/explore-page/explore-page.component';
import { SingleBlogContentComponent } from './modules/single-blog-content/single-blog-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExplorePageComponent }, // explore component yahn par.
  { path: 'micro-improvement', component: MicroImprovementComponent },
  { path: 'domain/:title', component: InfrastructureComponent },
  { path: 'blog/:title', component: SingleBlogContentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
