import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Col, Row } from "react-bootstrap";

const Logos = () => {
  return (
    <>
      <Col md={10} className="mx-auto">
        <Row className="justify-content-center mb-4 ">
          <Col md={2} sm={2} className="col-md-2 text-center mx-2">
            <a href="https://www.ucl.ac.uk/">
              <StaticImage src={"../../images/logos/UCL-Logo.png"} alt={'UCL Logo'} className="img-fluid mx-auto "
                           width={200} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.ed.ac.uk">
              <StaticImage src={"../../images/logos/edinburgh.png"} alt={'Edinburgh University logo'}
                           className="img-fluid mx-auto " height={100} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.stir.ac.uk">
              <StaticImage src={"../../images/logos/university-of-stirling.png"} alt={'Stirling University logo'}
                           className="img-fluid mx-auto" height={100} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.britishmuseum.org">
              <StaticImage src={"../../images/logos/british-museum-logo-vector.png"} alt={'British Museum  logo'}
                           className="img-fluid mx-auto" height={100} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.st-edmunds.cam.ac.uk/">
              <StaticImage src={"../../images/logos/Gitlab-Eddies.png"} alt={'St Edmund\'s college logo'}
                           className="img-fluid mx-auto" height={100} placeholder={'NONE'}/>
            </a>
          </Col>
        </Row>
      </Col>
      <Container fluid className="bg-white py-5">
        <Col md={2} sm={2} className="mx-auto">
          <a href="https://ahrc.ukri.org/">
            <StaticImage src={"../../images/logos/AHRC_new.jpg"} alt={"\"AHRC logo"} className="img-fluid mx-auto"
                         height={100} placeholder={'NONE'}/>
          </a>
        </Col>
      </Container>
    </>
  );
};

export default Logos;