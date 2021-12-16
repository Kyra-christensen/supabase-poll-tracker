import { getPolls, createPoll, logout, checkAuth } from '../fetch.utils.js';
import { renderPoll } from '../render-utils.js';

const pollFormEl = document.querySelector('form');
const pollQuestionEl = document.querySelector('#poll-question');
const optionOneTitleEl = document.querySelector('#option-one-title');
const optionOneVotesEl = document.querySelector('#option-one-votes');
const optionTwoTitleEl = document.querySelector('#option-two-title');
const optionTwoVotesEl = document.querySelector('#option-two-votes');
const optionOneAddButton = document.querySelector('#option-one-add');
const optionTwoAddButton = document.querySelector('#option-two-add');
const endPollButton = document.querySelector('#end-poll');
const pastPollEl = document.querySelector('.past-polls');
const logoutButton = document.querySelector('#logout');


checkAuth();

let question = '';
let optionOneTitle = '';
let optionTwoTitle = '';
let optionOneVotes = 0;
let optionTwoVotes = 0;

window.addEventListener('load', async() => {
    await displayPolls();
});

logoutButton.addEventListener('click', async() => {
    await logout();
    
});

pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(pollFormEl);
    question = data.get('poll-question');
    optionOneTitle = data.get('option-one-title');
    optionTwoTitle = data.get('option-two-title');

    pollQuestionEl.textContent = question;
    optionOneTitleEl.textContent = optionOneTitle;
    optionTwoTitleEl.textContent = optionTwoTitle;

    pollFormEl.reset();

    
});

optionOneAddButton.addEventListener('click', () => {
    optionOneVotes++;
    optionOneVotesEl.textContent = optionOneVotes;

    
});

optionTwoAddButton.addEventListener('click', () => {
    optionTwoVotes++;
    optionTwoVotesEl.textContent = optionTwoVotes;
    
});

endPollButton.addEventListener('click', async() => {
    await createPoll(question, optionOneTitle, optionTwoTitle, optionOneVotes, optionTwoVotes);
    displayPolls();
    question = '';
    optionOneTitle = '';
    optionTwoTitle = '';
    optionOneVotes = 0;
    optionTwoVotes = 0;

    
});



async function displayPolls() {
    pastPollEl.textContent = '';

    const polls = await getPolls();

    for (let poll of polls) {
        const newPollEl = renderPoll(poll);
        pastPollEl.append(newPollEl);
    }
}

