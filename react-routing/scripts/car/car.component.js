var React = require('react');	
var {Link}= require('react-router');
class Car extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		const cars = this.props.route.data;
		const carNode = cars.map((car) => {
            return (
                <Link
                    to={"/cars/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        })
		return(<div><h1>Cars page</h1><div className="list-group">{carNode}</div></div>);
	}
}
module.exports = Car;