import { Component } from "react"
import { Outlet } from "react-router-dom"

const AboutFunc=()=>{
    return <><div>About</div><Outlet/></>
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
        return <><div>About</div><Outlet/></>
    }
}

export default About