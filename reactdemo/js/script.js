class Homepage extends React.Component {
      render() {
          return (

          	<div class="ContentPage">
				<div class="SectionOne ContentBody">
					<div class="Detail Body">Body Content</div>
				</div>
				<div class="SectionTwo ContentBody">
					<div class="ThreeColumn">
						<div class="Column One">
							<div class="Detail Body">Content Block 1</div>
						</div>
						<div class="Column Two">
							<div class="Detail Body">Content Block 2</div>
						</div>
						<div class="Column Three">
							<div class="Detail Body">Content Block 3</div>
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


class MainNav extends React.Component {
      render() {
          return (

	        <nav class="Main-Nav">
			    <ul>
			      <li><a href="index.html" class="Active">Home</a></li>
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