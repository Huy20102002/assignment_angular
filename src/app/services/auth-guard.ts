import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): boolean {
        const loggedInUser = JSON.parse(localStorage.getItem("users") || "{}");
        const {email,id} = loggedInUser;
        if (email == undefined || email == "" ) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
