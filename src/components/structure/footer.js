import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faTwitter,
  faYoutube,

} from '@fortawesome/free-brands-svg-icons';
import SketchfabIcon from "../../images/sketchfab-logo-white.svg";
const Footer = () => {
  return (
    <>
      <Container fluid style={{
        backgroundColor: `var(--color-footer-bg)`}}
      >
        <Container>
          <footer className="text-center text-lg-start text-white">
            <section className="d-flex justify-content-between pt-4">
              <Container>
                <Row>
                  <Col md={4} className="mb-4 mb-md-0">
                    <span>Follow us:</span>
                  </Col>
                  <Col md={8} className="mb-4 mb-md-0">
                    <a href="https://facebook.com/micropasts" className="text-white me-4"
                       aria-label="Our facebook profile"><FontAwesomeIcon icon={faFacebook} size="2x" className="m-2" /></a>
                    <a href="https://twitter.com/micropasts" className="text-white me-4"
                       aria-label="Our twitter profile"><FontAwesomeIcon icon={faTwitter} size="2x" className="m-2"/></a>
                    <a href="https://github.com/micropasts" className="text-white me-4"
                       aria-label="Our GitHub account profile"><FontAwesomeIcon icon={faGithub} size="2x" className="m-2" /></a>
                    <a href="https://www.youtube.com/@micropasts3076/" className="text-white me-4"
                       aria-label="Our YouTube profile"><FontAwesomeIcon icon={faYoutube} size="2x" className="m-2" /></a>
                    <a href="https://sketchfab.com/micropasts" className="text-white"
                       aria-label="My Sketchfab account profile"><SketchfabIcon className="fa-2x m-2 svg-inline--fa" style={{ height:32, width: 32 }}/></a>
                  </Col>
                </Row>
              </Container>

            </section>

            <section className="">
              <Container className="text-center text-md-start mt-5">
                <Row className="mt-3">
                  <Col md={3} lg={4} xl={3} className="cmx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">MicroPasts</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                    <p>
                      Crowd-sourced, <strong>crowd-fuelled</strong>, open-access, heritage research.
                    </p>
                    <p>
                      Join us on our mission to enable high quality digitally enabled
                      research into archaeology, history and heritage.
                    </p>
                  </Col>

                  <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Projects</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                    />
                    <ul className={'list-unstyled'} style={{marginLeft: 0}}>
                      <li><a href="https://crowdsourced.micropasts.org" className="text-white">Crowdsourcing</a></li>
                      <li><a href="https://bronze-age-index.micropasts.org" className="text-white">Bronze Age Index</a></li>
                      <li><a href="https://sketchfab.com/micropasts" className="text-white">3D modelling</a></li>
                    </ul>

                  </Col>

                  <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                    />
                    <p>Institute of Archaeology,<br/>31-34 Gordon Square,<br/>London<br/>WC1H 0PY</p>
                    <p><a className={'text-white'} href={"mailto:info@micropasts.org"}>info@micropasts.org</a></p>
                  </Col>
                </Row>
              </Container>
            </section>

          </footer>

        </Container>
      </Container>
    </>
  );
};

export default Footer;