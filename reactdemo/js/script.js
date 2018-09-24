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
      render() {
          return (

          	<div className="ContentPage">
				<div className="SectionOne ContentBody">
					<div className="Detail Body">Body Content</div>
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