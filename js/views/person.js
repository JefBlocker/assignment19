export default function(data) {
  return `
    <div class="person">
      <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="gravatar">
        <img src="${data.Gravatar}">
      </div>
      <h1>${data.FirstName} ${data.LastName}</h1>
      <p>${data.Bio}</p>
    </div>
  `;
}
