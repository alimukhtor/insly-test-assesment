import { Button } from "react-bootstrap"
import HocParentComp from "./HocParentComp"

const MouseOverFunc =({counter, increment})=> {
    return (
        <div className="p-5">
            <Button variant="light" type="button" onMouseOver={increment}> Button is {counter} times clicked</Button>
        </div>
    )
}
export default HocParentComp(MouseOverFunc, 10)