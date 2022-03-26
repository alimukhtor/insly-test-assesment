import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { GlobalContext } from "../context/store/GlobalState";

const Home =()=> {
    // const [counter, setCounter] = useState(0)
    const [togleBtn, setToggleBtn] = useState(false)

    const { increaseCounter, counter, decreaseCounter } = useContext(GlobalContext);
    


    return (
        <div>
            <Button type="button" onClick={()=> {setToggleBtn({toggleBtn:!togleBtn})}} style={{backgroundColor: togleBtn ? "red":"none"}}>+</Button>
            <p>{counter}</p>
            {/* <Button type="button" variant="danger" onClick={()=> {decreaseCounter()}}>-</Button> */}
        </div>
    )
}
export default Home