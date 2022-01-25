import './App.css';
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
  )
}

export default App;
