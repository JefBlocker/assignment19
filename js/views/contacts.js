function processData(data) {
  return data.map(function(item){
    return `
      <li class="contact-list-item" data-contact-id="${item.objectId}">
        <span><i class="fa fa-user"></i> ${item.Name}</span>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="contacts-list">
      <h1>My Peeps</h1>
      <ul>${processData(data)}</ul>
    </div>
  `;
}
