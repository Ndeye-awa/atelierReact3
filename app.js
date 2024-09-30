class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [], // On stocke la liste des tâches ici
      };
    }
  
    // Méthode du cycle de vie pour récupérer les données après le montage du composant
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          this.setState({ todos: data }); // On stocke les données récupérées dans le state
        })
        .catch(error => console.error('Erreur:', error));
    }
  
    render() {
      return (
        <div>
          <h1>Liste de tâches</h1>
          <ul>
            
            {this.state.todos.map((todo) => (
              <li key={todo.id}>
                {todo.title} {todo.completed ? '✅' : '❌'}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  ReactDOM.render(<TodoList />, document.getElementById('app'));
  