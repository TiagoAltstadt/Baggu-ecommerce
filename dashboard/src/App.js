import React, {Component, component} from 'react';
import Sidebar from "./components/sidebar/Sidebar";

import KeyMetric from "./components/KeyMetric";
import Navbar from "./components/Navbar"
//import Algo from './components/Algo';
import CategoryContainer from './components/CategoryContainer';
import LastItemContainer from "./components/LastItemContainer";
import TableContainer from './components/TableContainer';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			metrics: [] 
		}
	}

	componentDidMount() { 
		setTimeout(() =>{

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
							title:"Amount in Products", 
							value: products.meta.totalValue, 
							iconClass:"fa-dollar-sign"
						},
					]
				})
				)
			.catch(errors => console.log(errors))

			// this.setState({
			// 	metrics: [ {
			// 		color:"primary", 
			// 		title:"Products in Data Base", 
			// 		value:135, 
			// 		iconClass:"fa-clipboard-list"
			// 	},
			// 	{
			// 		color:"success", 
			// 		title:"Amount in Products", 
			// 		value:546456, 
			// 		iconClass:"fa-dollar-sign"
			// 	},
			// 	{
			// 		color:"warning", 
			// 		title:"Total Users", 
			// 		value:' ', 
			// 		iconClass:"fa-user-check"
			// 	}
			// 	]
			// })

		}, 3000 )
	}

	componentDidUpdate(){ console.log('Me actualice!'); }

	componentWillUnmount(){ }

	render(){
		
		return (
			<div id="wrapper">
	
			<Sidebar />
	
			<div id="content-wrapper" className="d-flex flex-column">
	
				<div id="content">
		
				<Navbar />
	
					<div className="container-fluid">
	
						<div className="d-sm-flex align-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
						</div>
	
						<div className="row">
	
							{ 
								this.state.metrics.length ? 
									this.state.metrics.map((metric, index) => 
										<KeyMetric 
											color={ metric.color } 
											title={ metric.title }
											value={ metric.value } 
											iconClass={metric.iconClass} 
											key={'metric-${index}'} 
										/>	
									)
									:
										<p>Cargando metricas...</p>
							}
						</div>
						<div className="row">
							
							<LastItemContainer />
	
						<CategoryContainer />	
					</div>
						<TableContainer />
					</div>
				</div>
				<footer className="sticky-footer bg-white">
					<div className="container my-auto">
						<div className="copyright text-center my-auto">
							<span>Copyright &copy; Dashboard 2020</span>
						</div>
					</div>
				</footer>
			</div>
		</div>	
	  );

	}
}

export default App;
