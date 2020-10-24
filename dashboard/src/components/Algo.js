import React, {Component} from 'react';

class Algo extends Component{
    constructor(props){
        super(props);
    }
    apiCall(url, handler){
        fetch(url)
        .then(response => response.json())
        .then(data => handler(data))
        .catch(errors => console.log(errors))
        
    }
    componentDidMount(){
        
        this.apiCall('http://localhost:3001/api/users', this.showAlgo )
    }
    showAlgo = (data) => {
        console.log(data);
    }
    componentDidUpdate(){
        
    }
    render(){
        
        return(
            <div>

            </div>
        );
    }
}
export default Algo;