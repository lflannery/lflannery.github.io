class Homepage extends React.Component {
      render() {
          return (

          	<div class="ContentPage">
				<div class="SectionOne ContentBody">
					<div class="Detail Body">{{{this.body}}}</div>
				</div>
				<div class="SectionTwo ContentBody">
					<div class="ThreeColumn">
						<div class="Column One">
							<img src="{{this.image1}}" height="200" width="200">
							<div class="Detail Body">{{{this.contentBlock1}}}</div>
						</div>
						<div class="Column Two">
							<img src="{{this.image2}}" height="200" width="200">
							<div class="Detail Body">{{{this.contentBlock2}}}</div>
						</div>
						<div class="Column Three">
							<img src="{{this.image3}}" height="200" width="200">
							<div class="Detail Body">{{{this.contentBlock3}}}</div>
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