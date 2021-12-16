import { 
    redirectToPolls,
    signUpUser,
    signInUser 
} from './fetch.utils.js';

// import functions and grab DOM elements
const signUpForm = document.querySelector('#sign-up-form');


const signInForm = document.querySelector('#sign-in-form');


redirectToPolls();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
signUpForm.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');
    await signUpUser(email, password);
    window.location.href = './polls';
});

signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const email = data.get('email');
    const password = data.get('password');
    await signInUser(email, password);
    window.location.href = './polls';
});