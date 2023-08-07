import locationUrl from "../service/location-url.js";

export function initApp() {
  document.querySelector('#pokemonForm').setAttribute('action', `${locationUrl}create`)
}
