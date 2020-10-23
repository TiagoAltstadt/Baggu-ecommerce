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
        console.log('Me monte!');
        this.apiCall('http://localhost:3001/api/users', this.showAlgo )
    }
    showAlgo = (data) => {
        console.log(data);
    }
    componentDidUpdate(){
        console.log('Me actualice!');
    }
    render(){
        console.log('Estoy renderizando!');
        return(
            <div>

            </div>
        );
    }
}
export default Algo;