// ContactPage.jsx
import React from 'react';
import { Layout, Form, Input, Button, Row, Col, Typography } from 'antd';
import '../styles/contact.scss';

const { Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const ContactPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    alert("submitted sucessfully")
    form.resetFields(); 
  };

  return (
    <Layout className="contact-page">
      {/* Content Section */}
      <Content className="content">
        <div className="logo-container">
        
        <h1>CHITRASHADEZ CONTACT US</h1>
        </div>

        <Row gutter={16} className="contact-content">
          {/* Left Column - Embedded Google Map */}
          <Col xs={24} md={12} className="map-section">
            <Title level={3}>Our Location</Title>
            <div className="map-container">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60886.110312698795!2d78.36354562458263!3d17.489274070127067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ec0162f43d%3A0x3288c6fe4358cf48!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1728469321995!5m2!1sen!2sin" 
                
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </Col>

          {/* Right Column - Contact Form */}
          <Col xs={24} md={12} className="form-section">
            <Title level={3}>Get in Touch</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="contact-form"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <TextArea rows={4} placeholder="Your Message" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ContactPage;
