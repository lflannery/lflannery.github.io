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
	state = {
		data : null
	};

	componentDidMount() {
		fetch('https://lflannery.github.io/headlessAPI/json/homepage.json')
		  .then(response => response.json())
		  .then(data => this.setState({ data }));
	}

	render() {
	    const { data } = this.state;
	    return (
	      <React.Fragment>
	        <h1>Big Sister Asssiation of Greater Boston</h1>
	          data.map(content => {
	            return (
	            	<div className="Detail Body">
                		{content.body} 
                	</div>;
	            );
	          })
	      </React.Fragment>
	    );
	 }
}


ReactDOM.render(<Homepage />,document.getElementById('mainHome'));
