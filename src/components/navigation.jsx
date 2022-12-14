export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar-expand-lg navbar navbar-default navbar-fixed-top "
    >
      <div className="container-fluid">
        <div className="navbar-header navbar-fluid ">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/gyifLogo.png"
              alt="logo"
              style={{ width: "150px", height: "65px", marginTop: "-20px" }}
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#page-top" className="page-scroll">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#features" className="page-scroll">
                Event
              </a>
            </li> */}
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Categories
              </a>
            </li> */}
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a
                href=" https://drive.google.com/file/d/1kjEQDn9qmt0WXlWyfDRGR238PNnqkDGT/view?usp=share_link "
                className="page-scroll"
              >
                Guide Book
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
