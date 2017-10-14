import * as firebase from 'firebase';


const API_ALIAS = 'json';

export const fireDB = firebase.initializeApp(process.env.DB_CONFIG);

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

export function fetchCommonJsonData(filename = 'data') {
  const uri = `${API_ALIAS}/${filename}.json`;
  return fetch(uri)
    .then(statusHelper)
    .then(response => response.json())
    .then(json => json) // to be data proccessing
    .catch(error => error);
}

export function fetchDataFromDBOnce(endpoint) {
  return fireDB.database().ref(`/${endpoint}/`).once('value').then(snapshot => snapshot.val());
}

export function generateKey(n) {
  const pattern = Math.pow(10, n + 1);
  return Math.floor((1 + Math.random()) * pattern)
    .toString(16)
    .substring(1);
}

