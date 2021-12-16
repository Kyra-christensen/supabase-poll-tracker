export function renderPoll(poll) {
    const newPollEl = document.createElement('div');
    const newQuestionEl = document.createElement('p');
    const newOption_1El = document.createElement('p');
    const newOption_2El = document.createElement('p');
    const newVotes_1El = document.createElement('p');
    const newVotes_2El = document.createElement('p');
    
    newPollEl.classList.add('poll');

    newQuestionEl.textContent = poll.question;
    newOption_1El.textContent = poll.option_1;
    newOption_2El.textContent = poll.option_2;
    newVotes_1El.textContent = poll.votes_1;
    newVotes_2El.textContent = poll.votes_2;

    newPollEl.append(
        newQuestionEl,
        newOption_1El,
        newVotes_1El,
        newOption_2El,
        newVotes_2El,
    );
}