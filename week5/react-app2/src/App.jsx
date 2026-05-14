import UserList from "./components/UserList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  //state
  return (
    <div>
      <NavBar />
      <div>
        <UserList />
      </div>
      <Footer />
    </div>
  );
}
export default App;
