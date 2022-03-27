// import { useContext } from "react"
import { Button } from "react-bootstrap"
// import { GlobalContext } from "../context/store/GlobalState";
import HocParentComp from "./HocParentComp";
import MouseOverFunc from "./MouseOverFunc";

const Home =({name, increment, counter})=> {
    
    // const [togleBtn, setToggleBtn] = useState(false)

    // const { increaseCounter, decreaseCounter } = useContext(GlobalContext);
    

   
    return (
        <div className="p-5">
            <Button variant="primary" type="button" onClick={increment}>{name} Button is {counter} times clicked</Button>
            <MouseOverFunc/>
        </div>
    )
}
export default HocParentComp(Home, 5)