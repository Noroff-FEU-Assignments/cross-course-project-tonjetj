async function onSignup(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const isValid = form.valid;
  const apiUrl = form.action;
  const method = form.method;
  const body = new FormData(form);

  console.log(email, isValid, apiUrl, method);

  const response = await fetch(apiUrl, {
    method,
    body
  });

  const data = await response.json();
}