export default function TodoListPage() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
      async function getNotes() {
        const todos = await todosAPI.getAll();
        // const sortedNotes = sortNotes(notes, sortOrder);
        setTodos(todos);
      }
      getNotes();
    });

    return (
      <>
        <h1>Todo List</h1>
        {/* <NewNoteForm handleAddNote={handleAddNote} /> */}
        {todos.length === 0 ? (
          <p>No Todo Added Yet!</p>
        ) : (
          <table>
            <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
            {todos.map((todo)=>(
                <tr>
                    <td>{todo.taskText}</td>
                    <td>{todo.taskStatus}</td>
                    <td>{todo.startDate}</td>
                    <td>{todo.endDate}</td>
                </tr>
            ))}
          </table>
        )}
      </>
    );
}