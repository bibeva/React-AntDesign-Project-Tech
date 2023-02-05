import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Flat Design',
    content: 'Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Workflow',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
        </div>
        <div className="contentHolder">
          <p>Technology has revolutionized the way we live and work, providing us with new and innovative ways to solve problems, improve efficiency, and make our lives easier. From artificial intelligence to cloud computing, the rapid advancements in technology are changing the way we interact with the world around us. As we continue to push the boundaries of what is possible, we can expect new and exciting developments that will further shape the future of our world. Whether it's in healthcare, education, or any other industry, technology has the power to make a positive impact and create a better future for all of us. </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;