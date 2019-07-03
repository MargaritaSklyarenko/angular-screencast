import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, ReflectiveInjector } from '@angular/core';
import { HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ItemComponent } from './item/item.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';
import { ElemComponent } from './elem/elem.component';
import { UserService } from './user.service';


const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

import { Injector } from "@angular/core";
import { Inject } from '@angular/compiler/src/core';

const injector:Injector = ReflectiveInjector.resolveAndCreate([{provide: UserService, useClass: UserService}])
const userService = injector.get(UserService)

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
    DelayDirective,
    ElemComponent
  ],
  entryComponents: [ElemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    {provide: UserService, useClass: UserService},
    {provide: API_BASE_URL, useValue: 'api.mysite.com'},
    {provide: UserService, useExisting: UserService},//already existing service
    {provide: UserService, useFactory: function(){
      return UserService;
    }},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
