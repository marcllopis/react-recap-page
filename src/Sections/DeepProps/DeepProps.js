import DeepPropsChild from "./DeepPropsChild";

const DeepProps = () => (
  <div className="centered-content">
    <h1>Passing down props 2 levels deep</h1>
    <p>
      This is a component that renders a child component with some props. That
      child component will receive those props and pass them down to another
      child component
    </p>
    <DeepPropsChild
      title="title declared in the parent component"
      subtitle="subtitle declared on the parent component"
    />
  </div>
);

export default DeepProps;
