import sendRequest from "./send-request";

const BASE_URL = '/api/todos';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createTodos(todoData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', todoData);
}

export function deleteTodos(todoId) {
    return sendRequest(`${BASE_URL}/delete/${todoId}`, 'DELETE');
}

export async function updateTodos(todoId, todoData) {
    // const updatedNote = await sendRequest(`${BASE_URL}/update/${noteId}`, 'PUT', noteId, taskStatus, startDate,endDate);
    // return updatedNote;
    return sendRequest(`${BASE_URL}/update/${todoId}`, 'PUT', todoData);
}

export async function getTodoByID(todoId) {
    return sendRequest(`${BASE_URL}/${todoId}`, 'GET');
}