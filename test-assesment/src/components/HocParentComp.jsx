import { useState } from "react"

const HocParentComp =(OriginalComponent, incrementNumber)=> {
    const HocParentComp =(props)=>{
            const [counter, setCounter] = useState(0)
            const increment =()=> {
                setCounter(counter + incrementNumber)
            }
            return <OriginalComponent counter={counter} increment={increment} {...props}/>
    }

    return(
        // <h1>Higher order component</h1>
        HocParentComp
        )
}
export default HocParentComp