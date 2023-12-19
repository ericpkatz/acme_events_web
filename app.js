const span = document.querySelector('span');
const ul = document.querySelector('ul');
let events = [];

window.addEventListener('hashchange', function(){
  render();
});

function render(){
  span.innerHTML = events.length;
  const hash = window.location.hash;
  const id = hash.slice(1)*1;
  let filtered = events;
  if(id){
    filtered = filtered.filter(function(event){
      return event.id === id;
    });
  }
  const html = filtered.map(function(event){
    return `
      <li>
        <h4><a href='#${event.id}'>${ event.name }</a></h4>
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