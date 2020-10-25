import React,{Component} from 'react';
import KeyMetric from "./KeyMetric";
import TableContent from "./TableContent";

class Table extends Component {
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
                    products.forEach((product) =>{
                        metrics: [ 
                            {
                                id: product.id,
                                image:product.image,
                                name:product.name,
                                price:product.price,
                                brand:product.brand,
                                category: product.catch
                            },
                        ]
                    })
				})
				)
            .catch(errors => console.log(errors)
            )
    }

    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Category</th>
                    </tr>
                </thead>
                {
                    this.state.metrics.length 
                    ? 
                        this.state.metrics.map((metric, index) => 
                            <TableContent
                                id={ metrics.id }
                                image={ metrics.image }
                                name={ metrics.name }
                                price={ metrics.price }
                                brand={ metrics.brand }
                                category={ metrics.category }
                            />
                        )
                    :
                        <p>Cargando metricas...</p>
                }
            </table>
        )
    }
}

export default Table;




        



