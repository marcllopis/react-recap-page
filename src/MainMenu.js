const MainMenu = (props) => (
  <div className="main-menu">
    <div onClick={() => props.action("basic")} className="menu-container">
      <h1>Basic Component</h1>
    </div>
    <div onClick={() => props.action("withProps")} className="menu-container">
      <h1>Component with Props</h1>
    </div>
    <div onClick={() => props.action("deepProps")} className="menu-container">
      <h1>Passing props 2 levels deep</h1>
    </div>
    <div
      onClick={() => props.action("conditionalRendering")}
      className="menu-container"
    >
      <h1>Conditional Rendering</h1>
    </div>
    <div onClick={() => props.action("usingState")} className="menu-container">
      <h1>Using state</h1>
    </div>
    <div onClick={() => props.action("clickEvents")} className="menu-container">
      <h1>Click events</h1>
    </div>
    <div
      onClick={() => props.action("counterExample")}
      className="menu-container"
    >
      <h1>Counter example</h1>
    </div>
    <div onClick={() => props.action("formExample")} className="menu-container">
      <h1>Form example</h1>
    </div>
    <div onClick={() => props.action("apiCall")} className="menu-container">
      <h1>API call with UseEffect</h1>
    </div>
    <div
      onClick={() => props.action("apiCallClick")}
      className="menu-container"
    >
      <h1>API call with onClick</h1>
    </div>
  </div>
);

export default MainMenu;
