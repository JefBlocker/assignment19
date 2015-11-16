export default function(data) {
  return `
    <div class="contact">
      <button class="back-button" data-to="contacts">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="gravatar">
        <img src="${data.Gravatar}">
      </div>
      <h1><i class="fa fa-user"></i> ${data.Name} </h1>
        <p><i class="fa fa-envelope"></i> Email: ${data.Email}</p>
        <p><i class="fa fa-mobile"></i> Phone: ${data.phone}</p>
        <p><i class="fa fa-globe"></i> Location: ${data.cityState}</p>

    </div>
  `;
}