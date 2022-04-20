import ReactDOM from "react-dom/client";
import DogUser from "./modules/DogUser";

const objG = {
    name: 'Guinness',
    age: 7,
    likes: ['Skälla', 'Leka', 'Mamma'],
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/CH_Renaissance_Hopeful_Impulse.jpg/150px-CH_Renaissance_Hopeful_Impulse.jpg"
}
const objH = {
    name: 'Hassan',
    age: 4,
    likes: ['Sova', 'Äta', 'Leka'],
    url: "https://d3hbo574c0e4c4.cloudfront.net/c799825a-08b0-4ddc-86c1-a18a93053e52/scale/500"
}

function App(){
    return (
        <div>
            <DogUser dUser={objG}/>
            <DogUser dUser={objH}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root") );
root.render(<App/>);


// element skapade med jsx
// const name = "Aquaman";
// const age = 81;
// const element = (
//     <div className="border">
//         <h1>Hello, {name}!</h1> 
//         <p>Du är {age*12} månader gammal. </p>
//     </div>
// );