interface AuthConfig {
  auth_url: string,
  response_type: string,
  redirect_uri: string,
  client_id: string,
}

export class SecurityService {
  private token: string = '';

  constructor(private config: AuthConfig) { }

  authorize() {
    const {
      auth_url,
      response_type,
      redirect_uri,
      client_id,
    } = this.config;
    const url = `${auth_url}?redirect_uri=${redirect_uri}&response_type=${response_type}&client_id=${client_id}`;

    sessionStorage.removeItem('oauth_token');
    location.replace(url);
  }

  getToken() {
    const storageToken = sessionStorage.getItem('oauth_token');
    this.token = storageToken ? storageToken : '';

    if (!this.token && location.hash) {
      const match = location.hash.match(/access_token=([^&]*)/);

      this.token = (match && match[1]) || this.token;
      sessionStorage.setItem('oauth_token', this.token);
    }

    if (!this.token) {
      this.authorize();
    }

    return this.token;
  }
}