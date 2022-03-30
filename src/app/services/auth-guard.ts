import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): boolean {
        const loggedInUser = JSON.parse(localStorage.getItem("users") || "{}");
        const {email,googleId} = loggedInUser[0];
      
        if (email == undefined || email == "" || googleId == undefined || googleId == "") {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
