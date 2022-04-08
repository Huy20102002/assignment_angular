import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): boolean {
        const loggedInUser = JSON.parse(localStorage.getItem("users") || "{}");
        const {email,googleId,roles} = loggedInUser;
        if (email == undefined || email == "" || googleId == undefined || googleId == "" || roles == "member") {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
