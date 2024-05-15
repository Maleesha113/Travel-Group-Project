function submitForm(event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page

  // get the form elements
  const rating = document.querySelector('input[name="rating"]:checked');
  const reasons = document.querySelector('textarea[name="reasons"]');
  const taskCompletion = document.querySelector('select[name="task_completion"]');
  const taskPreference = document.querySelector('select[name="task_preference"]');

  // validate the form
  if (!rating) {
    alert('Please select a rating.');
    return;
  }

  // create the mailto: URL with the form data
  const formData = {
    rating: rating.value,
    reasons: reasons.value,
    taskCompletion: taskCompletion.value,
    taskPreference: taskPreference.value
  };
  const subject = 'Feedback';
  const body = Object.keys(formData).map(key => `${key}: ${formData[key]}`).join('\n');
  const mailtoUrl = `mailto:maleesha.20220977@iit.ac.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // open the mailto: URL in the current window
  window.location.href = mailtoUrl;

  // display a thank you message
  alert('Thank you for your feedback!');

  // reset the form
  event.target.reset();
}

// add an event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

