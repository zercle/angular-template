import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { LocalStorage } from "../../shared/services/storage/local-storage.service";


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  #router = inject(Router);
  #http = inject(HttpClient);
  #document = inject(DOCUMENT);
  #localStorage = inject(LocalStorage);

  oauthToken = signal('');
  accessToken = signal('');
  isAccessTokenLoaded = signal(false);
  isTokenExpired = computed(() => {
    //TODO: implement is token expired
  });
  user = computed(() => {
    //TODO: decode user data from token
  });

  constructor() {
    effect(() => {
      //TODO: Clear token if expired
    });
  }

  loadAccessToken() {
    console.log('load access_token')
    this.accessToken.update(() => this.#localStorage.getItem('access_token') ?? '');
    this.isAccessTokenLoaded.set(true);
  }

  clearAccessToken() {
    this.#localStorage.removeItem('access_token');
    queueMicrotask(() => {
      this.accessToken.set('');
    });
  }

  signOut() {
    this.clearAccessToken();
    this.#router.navigate(['/']).then();
  }

  signInWithKKUAccount() {
    // const login_url = environment.kku.oauth_url + '/authorize';
    // const client_id = environment.kku.oauth_client_id;
    // const redirect_uri = this.#document.location.origin + '/login/callback';
    // const response_type = 'token';
    //
    // this.#document.location.href = login_url + '/?client_id=' + client_id + '&response_type=' + response_type + '&redirect_uri=' + redirect_uri;
  }

  getUser(token: string) {
    const requestURL = `${environment.api_url}/v1/login`;
    this.#http.post<{ token: string }>(requestURL, {token: token}, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).subscribe({
      next: (res) => {
        if (res && res.token) {
          this.#localStorage.setItem('access_token', res.token);
          this.accessToken.update(() => res.token);
        }
      }
    });
  }
}
