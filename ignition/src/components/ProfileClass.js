import { Component } from "react";

class ProfileClass extends Component {
    constructor(props){
        console.log("Child-constructor");
        super(props);
        this.state={
            count:0,
        }
    }

    componentDidMount(){
        console.log("Child-componentDidMount")
    }

    render() {
        console.log("Child-render");
        return (
            <>
                <h1>Hello Guys</h1>
                <h2>{this.props.name}</h2>
                <h3>{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me</button>
            </>
        );
    }
}

export default ProfileClass;
