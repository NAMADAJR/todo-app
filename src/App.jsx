import PageTitle from "./components/PageTitle";
import AddtodoForm from "./components/AddtodoForm";
import TodosContainer from "./components/TodosContainer";

const App = () => {
  return (
    <main>
      
      <PageTitle text={"Nam's To do App"} />

      <AddtodoForm />

      <TodosContainer />
      
    </main>
  );
};

export default App;
