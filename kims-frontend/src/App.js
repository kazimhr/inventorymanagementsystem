import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Sidebar from './components/Sidebar';
import NavbarTop from './components/Navbar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Salesperson from './components/Salesperson';
import Accounts from './components/Accounts';
import Invoices from './components/Invoices';
import Notfound from './components/Notfound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userService from './services/UserServices';

function App() {
	return (
		<Router>
			<div className="App">
				<Sidebar />
				<NavbarTop />
				<Switch>
					<Route path="/not-found" component={Notfound} />
					<Route path="/invoices" component={Invoices} />
					{userService.isAdmin() && <Route path="/accounts" component={Accounts} />}
					{/* <Route path="/purchase" component={Purchase} />
					<Route path="/retailers" component={Retailers} /> */}
					<Route path="/salesperson" component={Salesperson} />
					<Route path="/inventory" component={Inventory} />
					<Route path="/" exact component={Dashboard} />
					<Redirect to="/not-found" />
				</Switch>
				<ToastContainer autoClose={1500} />
			</div>
		</Router>
	);
}

export default App;
