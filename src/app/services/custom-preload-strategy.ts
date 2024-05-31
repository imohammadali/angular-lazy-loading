import {Injectable} from "@angular/core";
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of} from "rxjs";

@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if(route.data && route.data['preload']){
        //   load in background
          return load()
        }else{
          return of(null)
        }
    }

}
