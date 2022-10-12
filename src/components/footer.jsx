// import logo from '../public/img/gyifLogo.png';

export const Footer = (props) => {
  return (
    <div>
      <div id="footer" style={{ backgroundColor: "gold" }}>
        <div className="footer-top">
          <div
            style={{ marginLeft: "70px", marginTop: "-2%" }}
            className="col-md-4"
          >
            <section>
              <h3>About Us</h3>
              <p>
                By looking at the development and knowledge of children today
                about science, invention and innovation, especially in the field
                of science, it requires us to know the extent of the students'
                insights, knowledge and abilities in applying their knowledge of
                science.
              </p>
              <ul>
                <li>
                  <a href="./#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/gyiif_official/?hl=id"
                    style={{ marginLeft: "5px" }}
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/c/IYSAOfficial"
                    style={{ marginLeft: "5px" }}
                  >
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div
            style={{ marginLeft: "70px", marginTop: "-2%" }}
            className="col-md-3"
          >
            <section>
              <h3>Information link</h3>
              <ul>
                <li>
                  <a href="./#">Home</a>
                </li>
                <li>
                  <a href="./#">About</a>
                </li>
                <li>
                  <a href="./#">Gallery</a>
                </li>
                <li>
                  <a href="./#">Contact</a>
                </li>
              </ul>
            </section>
          </div>
          <div style={{ marginLeft: "10px", marginTop: "0%" }}>
            <section>
              <h3>Contact Details</h3>
              <ul>
                <li>
                  <a href="./#">gyiif.iysa@gmail.com</a>
                </li>
                <li>
                  <a href="./#">0817 7091 4129</a>
                </li>
                <li>
                  <a href="./#">https://gyiif.or.id/</a>
                </li>
                <li style={{ marginLeft: "845px" }}>
                  Jalan Kemang No. 63 RT. 3 RW. 06 Pasir Putih, Sawangan Depok
                  Kecamatan Sawangan, Kota Depok, Jawa Barat 16511, Indonesia.
                </li>
              </ul>
              <div
                className="container text-center"
                style={{ marginTop: "70px" }}
              >
                <p>
                  &copy; 2022 Official GYIIF. Design by{" "}
                  <a href="./#" rel="nofollow">
                    Web Developer
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
