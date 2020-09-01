import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RepositoryComponent } from './components/repository/repository.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'repository', component: RepositoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
