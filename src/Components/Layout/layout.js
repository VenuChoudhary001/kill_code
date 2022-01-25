import "./layout.scss";

function Layout(props) {
  return (
    <>
      <div className="background">
        <div className="bg-overlay"></div>
        <div className="content">{props.children}</div>
        <footer>
          <div className="logos">
          <a href="https://www.facebook.com/debatingsociety3103.nitd/" target="_blank" ><img alt="." src="Images/fb.png" className="footIconSmall" /></a>
          <a href="https://www.debsocnitdgp.in/" target="_blank" ><img alt="." src="Images/ds.png" className="footIcon" /></a>
          <a href="https://instagram.com/debsocnitd?utm_medium=copy_link" target="_blank" ><img alt="." src="Images/ins.png" className="footIconSmall" /></a>
          </div>
          <div className="footText">The Debating Society, NIT Durgapur</div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
