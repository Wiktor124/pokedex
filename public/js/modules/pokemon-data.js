import locationUrl from "../service/location-url.js";
const pokeForm = document.querySelector('#pokemonForm');

export function initApp() {

  pokeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = pokeForm.querySelectorAll('input[type="text"], input[type="file"]');
    const data = {};

    formData.forEach(item => {
      console.log(item)

      data[item.name] = item.value;
    })

    console.log(data);

    try {
      return await fetch('/pokemon', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
    } catch (err) {
      console.log('Oops, hay un error!');
    }
  });
}