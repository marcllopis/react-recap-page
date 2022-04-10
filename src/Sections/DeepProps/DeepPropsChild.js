import DeepPropsChildOfChild from "./DeepPropsChildOfChild";

const DeepPropsChild = (props) => (
  <>
    <h3>That's the first child component</h3>
    <p>
      It receives 2 props. It will render one prop here as the title and will
      pass down the subtitle prop to it's own child component
    </p>
    <p>
      The title prop: <b>{props.title}</b>
    </p>
    {/* We render the child component as usual, declare a property name as usual and when we give the value, since it is coming from the parent as props, we pass it down referring to where it lives, inside the props object */}
    <DeepPropsChildOfChild subtitle={props.subtitle} />
  </>
);

export default DeepPropsChild;
