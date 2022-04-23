import logo from './logo.svg';
import './App.css';
import Card from "./component/Card";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {showData} from "./redux/actions/action";

const user = useSelector( state => state.user.data);
const dispatch = useDispatch();

function App() {


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
     axios.get("http://localhost:3000/users")
    dispatch(showData(user))
  };

  return (
      <div>
      {
       user.map ((card) => (
           <Card key={card.id}
                 name={card.name}
                 username={card.username}
                 email={card.email}
                 phone={card.phone}/>
       ))
      }
      </div>
  );
}

export default App;
