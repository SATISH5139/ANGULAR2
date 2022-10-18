import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { GreetComponent } from './greet/greet.component';
import { HttpusersComponent } from './httpusers/httpusers.component';
import { IfComponent } from './if/if.component';
import { LighteningComponent } from './lightening/lightening.component';
import { UseHttpComponent } from './use-http/use-http.component';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import { UseSvcComponent } from './use-svc/use-svc.component';


const routes: Routes = [
  {path:"greet", component:GreetComponent},
  {path:"bindings", component:BindingsComponent},
  {path:"toggle", component:IfComponent},
  {path:"lightening", component:LighteningComponent},
  {path:"pipes", component:UsePipesComponent},
  {path:"fbservice", component:UseSvcComponent},
  {path: "http", component:UseHttpComponent},
  {path: "users", component:HttpusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
