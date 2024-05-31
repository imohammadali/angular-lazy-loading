import {ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot} from "@angular/router";
import {Meta} from "../models/meta.model";
import {map, Observable} from "rxjs";
import {MetaService} from "../services/meta.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MetaResolverService implements Resolve<Meta> {
    constructor(private service:MetaService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        const meta = this.service.load();
        return meta.pipe(map((res) => res));
    }
}
