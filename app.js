const span = document.querySelector('span');
const ul = document.querySelector('ul');
let events = [];

function render(){
  span.innerHTML = events.length;
  const html = events.map(function(event){
    return `
      <li>
        <h4>${ event.name }</h4>
        <p>
          ${ event.description }
        </p>
        <em>${ event.location }</em>
      </li>
    `;
  }).join('');
  ul.innerHTML = html;
}

render();

async function fetchEvents(){
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events');
  const json = await response.json();
  events = json.data;
  render();
}

fetchEvents();