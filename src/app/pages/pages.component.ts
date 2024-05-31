import {Component} from "@angular/core";
import {ActivatedRoute, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";
import {Meta} from "../models/meta.model";


@Component({
  selector: "app-pages",
  template: `
    <nav class="navbar navbar-expand-lg bg-body-secondary">
      <div class="container">
        <a class="navbar-brand" routerLink="/">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h1 class="container pt-3" *ngIf="loading">loading ...</h1>
    <div *ngIf="!loading" class="container pt-3">
      <router-outlet></router-outlet>
    </div>
    `,
})
export class PagesComponent {
  loading: boolean = false
  constructor(private _router:Router) {
    _router.events.subscribe((e)=>{
      if(e instanceof RouteConfigLoadStart){
        this.loading = true;
      }else if(e instanceof RouteConfigLoadEnd){
        this.loading = false
      }
    })
  }
}
