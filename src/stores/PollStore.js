import {
    writable
} from 'svelte/store'

const PollStore = writable([{
    id: 1,
    question: "python or javascript",
    answerA: "python",
    answerB: "javascript",
    votesA: 9,
    votesB: 15,
}]);

export default PollStore;