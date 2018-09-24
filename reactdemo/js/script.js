class Greeting extends React.Component {
      render() {
          return (<p>Hello Jessica!</p>);
      }
  }
  ReactDOM.render(
      <Greeting />,
      document.getElementById('root')
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