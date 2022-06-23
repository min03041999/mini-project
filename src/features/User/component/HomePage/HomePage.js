import React from "react";

import CarouselSlider from "../../feature/CarouselSlider/CarouselSlider";
import image_1 from "../../../../asset/Image/carousel/carousel-1.jpg";
import image_about from "../../../../asset/Image/home_page/home_pape1.jpg";

import { Row, Col } from "antd";

const carousel = [
  {
    name: "Image1",
    image: image_1,
    content: "",
  },
  {
    name: "Image2",
    image: image_1,
    content: "",
  },
  {
    name: "Image3",
    image: image_1,
    content: "",
  },
];

const HomePage = () => {
  return (
    <>
      <CarouselSlider dotPosition="right" effect="fade" carousel={carousel} />
      <div>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <h1 style={{ textAlign: "center", margin: "30px 0" }}>
              About Store
            </h1>
          </Col>
          <Col span={12}>
            <img
              src={image_about}
              alt="image_about"
              style={{
                width: "70%",
                height: "600px",
                display: "block",
                margin: "auto",
              }}
            />
          </Col>
          <Col span={12}>
            <div
              style={{
                padding: "70px 130px",
                fontSize: "18px",
              }}
            >
              <h3>-- MY STORE --</h3>
              <div>
                More Hats! I am crazy about hats these days. Some text about
                this blog entry. Fashion, fashion, and drugs should not be used
                as the life-style of the fans. But now that's a lot of memories
                We live for the great ferry, and the consumer at the course of
                the torturer. But it's just not for me to do anything for the
                body. It's nice to sit on the ground. But the life of the just
                storytelling, the gate of the bed of life, the compensation for
                the pregnant backyard is not ecological. There are those who
                forsake their services in a fault that softens the soul, that is
                the main reason of the labors of the customer, but I give them
                time to fall into such a way that they do some great work and
                pain. In order for more information to come, what is our school
                practice
              </div>
              <div>
                There are those who forsake their services in a fault that
                softens the soul, that is the main reason of the labors of the
                customer, but I give them time to fall into such a way that they
                do some great work and pain. For more information on how to do
                our school district training.
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
