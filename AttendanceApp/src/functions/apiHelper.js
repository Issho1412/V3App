import { AsyncStorage } from 'react-native';
import axios from 'axios';

class ApiHelper {
  requestType = 0;
  wWidePartial = 675;
  wWideFull = 1024;

  constructor() {
    if (ApiHelper.instance) {
      return ApiHelper.instance;
    }
    ApiHelper.instance = this;
    return this;
  }

  saveUser = async val => {
    return new Promise(() => {
      AsyncStorage.getItem('username')
        .then(prevItems => {
          var prevItems = JSON.parse(prevItems);
          prevItems = prevItems.username;
          if (typeof prevItems === 'undefined' || prevItems == null) {
            prevItems = [];
          }
          if (prevItems.indexOf(val) < 0) {
            prevItems.unshift(val);
            AsyncStorage.setItem(
              'username',
              JSON.stringify({ username: prevItems }),
            );
          }
        })
        .catch(error => {
          console.log('save user error', error);
          AsyncStorage.setItem('username', JSON.stringify({ username: [val] }));
        });
    });
  };

  getUser = async () => {
    return new Promise((resolve, reject) => {
      return AsyncStorage.getItem('username').then(items => resolve(items));
    });
  };


  build = async () => {
    new Promise((resolve, reject) => {
      resolve(
        AsyncStorage.getItem('requestType').then(result => {
          try {
            result = JSON.parse(result);
            this.requestType = result.requestType;
          } catch (err) {
            console.log('get asyncStorage error', err);
            this.requestType = 0;
          }
        }),
      );
    });

    this._axios = axios.create({
      baseURL: getApiUrl(this.requestType),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Cache: 'no-cache',
      },
      withCredentials: true,
    });
  };

  setType = type => {
    this.requestType = type;
    // console.log('re-init requestType',JSON.stringify({requestType : this.requestType}));
    let baseUrl = getApiUrl(this.requestType);
    console.log('change base url', baseUrl);
    this._axios.defaults = {
      baseURL: baseUrl,
    };
    new Promise((resolve, reject) => {
      resolve(
        AsyncStorage.setItem(
          'requestType',
          JSON.stringify({ requestType: this.requestType }),
        ),
      );
    });
  };

  connect = (url, body, method = 'POST') => {
    if (method === 'POST') {
      return this._axios
        .post(url, { ...body })
        .then(resp => resp.data)
        .catch(err => {
          console.log('axios error', err);
        });
    } else {
      return this._axios.get(url);
    }
  };
}

export default ApiHelper;

const Connect_GET = async (url) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  var promise = fetch(url, {
    credentials: 'include',
    method: 'GET',
    headers: headers,
    body: '',
  }).then(resp => {
    return resp.json();
  });
  return promise;
};

const Connect_POST = async (url, body, isAuthenticate) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  };

  if (isAuthenticate) {
    return AsyncStorage.getItem("Auth").then(result => {
      headers = { ...headers, Authorization: result };
      return promise = fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      }).then(resp => {
        return resp.json();
      });
    });
  }
  var promise = fetch(url, {
    credentials: 'include',
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  }).then(resp => {
    return resp.json();
  })
  return promise;
};

const getApiUrl = type => {
  // var store = configureStore().getState();
  // var type = store.authUser.requestType;
  return 'https://api-schdule.herokuapp.com/api';
};
export { Connect_POST };
export { Connect_GET };
