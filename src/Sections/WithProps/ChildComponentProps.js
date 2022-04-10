// We have to say to this child component that it will be receiving some props writing the parameter.
// props will always be an object so we will access those props names with dot notation. We will need to use the same props names as we declared in the parent
const ChildComponentProps = (props) => (
  <>
    <h2>{props.title}</h2>
    <h3>{props.subtitle}</h3>
  </>
);

export default ChildComponentProps;
