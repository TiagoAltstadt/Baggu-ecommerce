import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import KeyMetric from "./components/KeyMetric";
import Navbar from "./components/Navbar"
import Algo from './components/Algo';
import CategoryContainer from './components/CategoryContainer';
import LastItemContainer from "./components/LastItemContainer";
import TableContainer from './components/TableContainer';


const metrics = [ {
	color:"primary", 
	title:"Products in Data Base", 
	value:135, 
	iconClass:"fa-clipboard-list"
},
{
	color:"success", 
	title:"Amount in Products", 
	value:546456, 
	iconClass:"fa-dollar-sign"
},
{
	color:"warning", 
	title:"Total Users", 
	value:<Algo />, 
	iconClass:"fa-user-check"
}
];

function App() {
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
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800"><Algo/></div>
										</div>
										<div className="col-auto">
											<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">

						{ metrics.map(metric => 
							<KeyMetric 
							color={ metric.color } 
							title={ metric.title }
							value={ metric.value } 
							iconClass={metric.iconClass}  
							/>	
						)}
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

export default App;
