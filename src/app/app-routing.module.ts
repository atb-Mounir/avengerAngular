import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TexterComponent } from './texter/texter.component';

const routes: Routes = [
  {path: 'count', component: CounterComponent},
    {path: 'texter', component: TexterComponent},
//   {path: '', pathMatch: 'full', redirectTo:'count'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
