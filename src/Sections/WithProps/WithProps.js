import ChildComponentProps from "./ChildComponentProps";

const WithProps = () => (
  <div className="centered-content">
    <h1>Just a Component that renders a child component with some props</h1>
    <p>
      The child component is declared an in this moment, we write those
      properties directly in the component. In the child component, we need to
      enable it to receive props. Those props will be received as an object and
      we will be able to access them as a usual JS object and display them.
    </p>
    {/* When ChildComponentProps is declared here, that's the place where you define the property name (title and subtitle and it's values)
    props can have any value. A string like we show here but also a number, boolean, arrays, objects, functions or even another component
    */}
    <ChildComponentProps
      title="Child component title"
      subtitle="Child component subtitle"
    />
  </div>
);

export default WithProps;
