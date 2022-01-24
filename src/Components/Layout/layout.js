import "./layout.scss";

function Layout(props) {
  return (
    <>
      <div className="background">
        <div className="bg-overlay"></div>
        {props.children}</div>
    </>
  );
}

export default Layout;
