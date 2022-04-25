import logo from './logo.svg';
import './App.css';
import Card from "./component/Card";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {showData} from "./redux/actions/action";


function App() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    console.log(user);

    useEffect(() => {
        dispatch(showData());
    }, []);


    // const loadUsers = async () => {
    //     const result = await axios.get("http://localhost:3000/users")
    //     console.log(result)
    //     dispatch(showData(result.data))
    // };


    return (
        <div>
            {
                user.data.map((card, i) => {
                    return (
                    <Card key={i}
                          name={card.name}
                          username={card.username}
                          email={card.email}
                          phone={card.phone}/>
                )})
            }
        </div>
    );
}

export default App;

