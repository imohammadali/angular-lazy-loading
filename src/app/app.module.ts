import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {PagesComponent} from "./pages/pages.component";
import {HttpClientModule} from "@angular/common/http";
import {CustomPreloadStrategy} from "./services/custom-preload-strategy";

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers:[
    CustomPreloadStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
