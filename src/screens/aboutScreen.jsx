import React from 'react';
import { Row, Col, Typography, Layout } from 'antd';
import image from "../assets/paintingbudha.jpg";
import image2 from "../assets/heartBurst.jpg";
import image3 from "../assets/musicLove.jpg";
import "../styles/about.scss";

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

function AboutScreen() {
  return (
    <Layout className="about-container">
      <div className="content">
        <Row gutter={16} align="middle">
          <Col span={10}>
            <img src={image} width="100%" alt='Painting of Buddha' />
          </Col>
          <Col span={10}>
            <Title level={1}>Chitra Shadez</Title>
            <Paragraph style={{ marginTop: '16px' }}>
              Imperdiet quis sollicitudin vulputate velit id eget donec sed adipiscing turpis tristique aenean nulla
              <br /> dolor eu in habitasse vestibulum, blandit sem sed tempus.
              <br />
              Malesuada id lorem non magna tortor5duis
              <br /> sit blandit pulvinar enim turpis dui purus augue nec, eget sit sapien aliquam iaculis at erat sit
              <br /> porttitor massa tristique feugiat aliquam pellentesque vulputate tincidunt augue at duis mauris dictum
              <br /> urna amet ut quisque.
            </Paragraph>
          </Col>
        </Row>

        <Row gutter={13} align="middle">
          <Col span={12}>
            <Title level={1}>Choose Your Best</Title>
            <Paragraph style={{ marginTop: '16px' }}>
              Aliquam sed amet, fames scelerisque morbi mauris, sagittis,
              <br /> est mattis arcu aliquam pulvinar tristique nullam pellentesque nunc sit dictum massa quam viverra tortor
              <br /> iaculis vivamus amet quis ultrices amet, morbi nulla lorem quis vitae sit aliquet ut urna integer non.
            </Paragraph>
          </Col>
          <Col span={10}>
            <img src={image2} width="100%" alt='Heart Burst' />
          </Col>
        </Row>

        <Row gutter={16} align="middle">
          <Col span={10}>
            <img src={image3} width="100%" alt='Music Love' />
          </Col>
          <Col span={10}>
            <Title level={1}>Beauty of Painting</Title>
            <Paragraph style={{ marginTop: '16px' }}>
              Imperdiet quis sollicitudin vulputate velit id eget donec sed adipiscing turpis tristique aenean nulla
              <br /> dolor eu in habitasse vestibulum, blandit sem sed tempus.
              <br />
              Malesuada id lorem non magna tortor5duis
              <br /> sit blandit pulvinar enim turpis dui purus augue nec, eget sit sapien aliquam iaculis at erat sit
              <br /> porttitor massa tristique feugiat aliquam pellentesque vulputate tincidunt augue at duis mauris dictum
              <br /> urna amet ut quisque.
            </Paragraph>
          </Col>
        </Row>
      </div>

      <Footer style={{ textAlign: 'center', padding: '20px 0', background: '#f0f2f5' }}>
        <h2>
          Founder of Chitra Shadez
          </h2> 
          <h1>Chaithra</h1>
          <br />
          My passion, my thoughts, my happiness, my feelings added in these pictures.
        
      </Footer>
    </Layout>
  );
}

export default AboutScreen;
