import qs from 'qs';

class Api {
  constructor(environmentName) {
    this.environmentName = environmentName;
    this.ROOT_URL = `https://${this.environmentName}-api.dev.blinker.com`
  }

  register(userDetails) {
    const query = qs.stringify(userDetails);
    return fetch(`${this.ROOT_URL}/api/v3/users?${query}`, {
      method: 'POST'
    }).then(res => res.json());
  }
}

window.api = new Api('integration');
