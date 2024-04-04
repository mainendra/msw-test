import { useEffect } from "react";
import { addInterceptors, getTodo } from "./service";

function App() {
    useEffect(() => {
        addInterceptors();
        getTodo(1)
            .then(response => response.data)
            .then(json => console.log(json))
            .catch(console.log)
    }, []);
    return (
        <h1>Hello!!</h1>
    );
}

export default App
