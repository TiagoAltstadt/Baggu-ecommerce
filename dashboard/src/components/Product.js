import React,{Component} from 'react';
import KeyMetric from "./KeyMetric";

class Product extends Component {
    constructor(props){
		super(props);
		this.state = {
			metrics: [] 
		}
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/api/products')
			.then(response => response.json())
			.then(products => 
				this.setState({
					metrics: [ 
						{
							color:"primary", 
							title:"Products in Data Base", 
							value:products.meta.total, 
							iconClass:"fa-clipboard-list"
                        },
                        {
							color:"success", 
							title:"Products value amount", 
							value:12393021 + ' $', 
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
export default Product;