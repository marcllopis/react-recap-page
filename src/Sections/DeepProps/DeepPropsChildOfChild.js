const DeepPropsChildOfChild = (props) => (
  <>
    <h3>That's the child of the first component child</h3>
    <p>
      It receives the subtitle prop that was passed from the parent, to it's
      previous child
    </p>
    <p>
      The subtitle prop: <b>{props.subtitle}</b>
    </p>
  </>
);

export default DeepPropsChildOfChild;
