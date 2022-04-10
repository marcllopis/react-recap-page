const Basic = () => (
  <div className="centered-content">
    <h1>This a basic React component</h1>
    <p>It is just a function that returns some html (that's jsx)</p>
    <p>
      You need to remember that you need to ALWAYS return only one html element.
      If you need to return more than one (like here, where I return 3
      paragraphs) you need to wrap them with a parent element.
    </p>
    <p>
      You will need to export this component as default so you'll be ready to
      use it in any other file of your project just by importing it from it's
      path
    </p>
  </div>
);

export default Basic;
