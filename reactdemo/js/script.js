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
	      data: null,
	    };
	  }

	  componentDidMount() {
	    fetch('https://lflannery.github.io/headlessAPI/json/homepage.json')
	      .then(response => response.json())
	      .then(data => this.setState({ data }));
	  }

	  render() {
          return (
          	<div className="ContentPage">
				<div className="SectionOne ContentBody">
	          	{
		          data.map(function(content){
		            return 
		            <div className="Detail Body">
		            {content.body} 
		            </div>;
		          })
		        }
				</div>
				<div className="SectionTwo ContentBody">
					<div className="ThreeColumn">
						<div className="Column One">
							<div className="Detail Body">Content Block 1</div>
						</div>
						<div className="Column Two">
							<div className="Detail Body">Content Block 2</div>
						</div>
						<div className="Column Three">
							<div className="Detail Body">Content Block 3</div>
						</div>
					</div>
				</div>
			</div>

        );
    }
}

  ReactDOM.render(
      <Homepage />,
      document.getElementById('mainHome')
  );
