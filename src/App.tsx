import { useCallback, useEffect } from "react";
import { addInterceptors, getTodo } from "./service";

function App() {
    useEffect(() => {
        addInterceptors();
    }, []);

    const request = useCallback((id: number) => {
        getTodo(id)
            .then(response => response.data)
            .then(json => console.log(json))
            .catch(console.log)
    }, []);

    return (
        <>
            <h1>Mock using mswjs!!</h1>
            <button onClick={() => request(1)}>Request 1</button>
            <button onClick={() => request(2)}>Request 2</button>
            <button onClick={() => request(3)}>Request 3</button>
            <button onClick={() => request(4)}>Request 4</button>
        </>
    );
}

export default App
