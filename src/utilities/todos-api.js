import sendRequest from "./send-request";

const BASE_URL = '/api/todos';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createTodos(noteData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', noteData);
}