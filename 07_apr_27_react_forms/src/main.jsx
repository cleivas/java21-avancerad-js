import ReactDOM from"react-dom/client";
import {useState} from "react";
// import Conditionals from "./components/Conditionals";
// import NameForm from "./components/NameForm";
import MultipleInputs from "./components/MultipleInputs";
import Info from "./components/Info";

function App(){
    const [userInfo, setUserInfo] = useState({});

    function changeUserInfo(newInfo){
        setUserInfo(newInfo);
    }

    return (
        <>
            <MultipleInputs changeUserInfo={changeUserInfo} />
            <Info userInfo={userInfo}/>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);