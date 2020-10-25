import React, {Component, component} from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar"
import User from './components/User';
import Product from './components/Product';
import CategoryContainer from './components/CategoryContainer';
import LastItemContainer from "./components/LastItemContainer";
import TableContainer from './components/TableContainer';

class App extends Component{

	componentDidMount() { console.log('Me monte!') }

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

						<User/>
						<Product/>

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
