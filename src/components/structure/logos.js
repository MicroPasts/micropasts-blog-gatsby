import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Col, Row } from "react-bootstrap";

const Logos = () => {
  return (
    <>
      <Col md={10} className="mx-auto pt-2">
        <Row className="justify-content-center mb-2">
          <Col md={2} sm={2} className="col-md-2 text-center mx-2">
            <a href="https://www.ucl.ac.uk/">
              <StaticImage src={"../../images/logos/UCL-Logo.png"} alt={'UCL Logo'} className="img-fluid mx-auto mb-3"
                           width={180} height={60} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.ed.ac.uk">
              <StaticImage src={"../../images/logos/edinburgh.png"} alt={'Edinburgh University logo'}
                           className="img-fluid mx-auto mb-3" height={70} width={70} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.stir.ac.uk">
              <StaticImage src={"../../images/logos/university-of-stirling.png"} alt={'Stirling University logo'}
                           className="img-fluid mx-auto mb-3"  width={160} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.britishmuseum.org">
              <StaticImage src={"../../images/logos/british-museum-logo-vector.png"} alt={'British Museum logo'}
                           className="img-fluid mx-auto mb-3" width={160} placeholder={'NONE'}/>
            </a>
          </Col>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://www.st-edmunds.cam.ac.uk/">
              <StaticImage src={"../../images/logos/Gitlab-Eddies.png"} alt={'St Edmund\'s college logo'}
                           className="img-fluid mx-auto mb-3" height={70} width={70} placeholder={'NONE'}/>
            </a>
          </Col>
        </Row>
      </Col>
      <Container fluid className="bg-white py-3 mb-3  ">
        <Row className={'justify-content-center'}>
          <Col md={2} sm={2} className="text-center mx-2">
            <a href="https://ahrc.ukri.org/">
              <StaticImage src={"../../images/logos/AHRC_new.jpg"} alt={"AHRC logo"} className="img-fluid mx-auto text-center"
                           width={300} placeholder={'NONE'} backgroundColor={'white'} />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Logos;