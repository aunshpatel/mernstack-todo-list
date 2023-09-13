import sendRequest from "./send-request";

const BASE_URL = '/api/todos';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createTodos(todoData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', todoData);
}

export function deleteTodos(todoId) {
    console.log('deleted from services')
    sendRequest(`${BASE_URL}/delete/${todoId}`, 'DELETE');
    // return sendRequest(`${BASE_URL}/delete/${todoId}`, 'DELETE');
}

export async function updateTodos(todoId, todoData) {
    return sendRequest(`${BASE_URL}/update/${todoId}`, 'PUT', todoData);
}

export async function getTodoByID(todoId) {
    return sendRequest(`${BASE_URL}/${todoId}`, 'GET');
}