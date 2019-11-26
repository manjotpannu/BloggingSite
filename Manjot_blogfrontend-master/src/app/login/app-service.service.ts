import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() {
  }

  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }

  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }
  isPublic(bool: boolean) {
    sessionStorage.setItem('publicc', String(bool));
    return bool;
  }
  checkPublic() {
    const publicc = sessionStorage.getItem('publicc');
    return JSON.parse(publicc);
  }
}
