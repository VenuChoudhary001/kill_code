import "./layout.scss";

function Layout(props) {
  return (
    <>
      <div className="background">{props.children}</div>
    </>
  );
}

export default Layout;
