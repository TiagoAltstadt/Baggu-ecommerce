import React,{Component} from 'react';
import KeyMetric from "./KeyMetric";

class Users extends Component {
    constructor(props){
		super(props);
		this.state = {
			metrics: [] 
		}
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/api/users')
			.then(response => response.json())
			.then(users => 
				this.setState({
					metrics: [ 
						{
							color:"primary", 
							title:"Users in Data Base", 
							value:users.meta.total, 
							iconClass:"fa-clipboard-list"
						},
					]
				})
				)
            .catch(errors => console.log(errors)
            )
    }


    render(){
        return(
            <div className="row">
	
                { 
                    this.state.metrics.length ? 
                        this.state.metrics.map((metric, index) => 
                            <KeyMetric 
                                color={ metric.color } 
                                title={ metric.title }
                                value={ metric.value } 
                                iconClass={metric.iconClass} 
                                key={`metric-${index}`} 
                            />	
                        )
                    :
                    <p>Cargando metricas...</p>
                }
		    </div>
        )
    }
}
export default Users;