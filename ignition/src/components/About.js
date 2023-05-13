import { Component } from "react"
import { Outlet } from "react-router-dom"

const AboutFunc=()=>{
    return <><div></div><Outlet/></>
}

class About extends Component{
    constructor(props){
        super(props)
        console.log("Parent-constructor")
    }

    componentDidMount(){
        console.log("Parent-componentDidMount");
    }

    componentDidUpdate(){}
    componentWillUnmount(){}

    render(){
        console.log("Parent-render");
        return <><div><div>
        <h1 className="text-center font-bold text-3xl">About</h1>
    </div></div><Outlet/></>
    }
}

export default About