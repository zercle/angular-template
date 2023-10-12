export interface AccessToken {
  jti: string;
  aud: string;
  iss: string;
  iat: number;
  exp: number;
}
