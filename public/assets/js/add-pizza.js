
const $userForm = document.querySelector('#pizza-form');


const handleUserSubmit = event => {
  event.preventDefault();

  if (!userName || !createdBy || !toppings.length) {
    return;
  }

  const formData = { userName, createdBy, size, toppings };

  fetch('/api/pizzas', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
      // DO INDEXED DB STUFF HERE
    });
};

$userForm.addEventListener('submit', handleUserSubmit);
$addToppingBtn.addEventListener('click', handleAddTopping);
