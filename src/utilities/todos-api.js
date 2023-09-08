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
// export async function updateTodo(noteId, updatedData) {
//     const updatedNote = await sendRequest(`${BASE_URL}/update/${noteId}`, 'PUT', updatedData);
//     return updatedNote.data;
// }
export async function updateTodo(noteId) {
    const updatedNote = await sendRequest(`${BASE_URL}/update/${noteId}`, 'PUT', noteId);
    return updatedNote.noteId;
}

