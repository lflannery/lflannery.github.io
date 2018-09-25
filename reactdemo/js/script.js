class MainNav extends React.Component {
      render() {
          return (

	        <nav className="Main-Nav">
			    <ul>
			      <li><a href="index.html" className="Active">Home</a></li>
			      <li><a href="blog.html">Blog</a></li>
			      <li><a href="news.html">News</a></li>
			    </ul>
	  		</nav>

        );
      }
  }
  ReactDOM.render(
      <MainNav />,
      document.getElementById('main-nav')
  );

class Homepage extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      array: []
	    };

	    this.renderContent = this.renderContent.bind(this);
	}

	componentDidMount(){
	   axios
	     .get('https://lflannery.github.io/reactdemo/json/homepage.json')
	     .then(({ data })=> {
	       console.log(data);
	       this.setState(
	         { array: data.content }
	       );
	     })
	     .catch((err)=> {})
	}

	render() {
	   console.log(this.state.array);
	   return(
	     <div>
	       <h1>Big Sister Association of Greater Boston</h1>
	          {this.renderContent()}
	     </div>
	   );
	}

	renderContent() {
		console.log(this.state.array);
	   	return _.map(this.state.array, content => {
	    	return (
	       		<div className="Detail Body">
                    {content.body} 
                </div>
	     	);
	   	});
	}
}

export default Data;

ReactDOM.render(<Homepage />,document.getElementById('mainHome'));
