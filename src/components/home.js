import React from "react";
import Img1 from "./images/floodgif.gif";
import Damage1 from "./images/damage1.jpg";
import Damage2 from "./images/damage2.jpg";
import Damage3 from "./images/damage3.jpg";

export default function home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">What is Flood ?</h1>
        <br />
        <div className="container row">
          <div className="col">
            <img src={Img1} alt="Logo" width={"650px"} />
          </div>
          <div className="col">
            <h6>
              A flood is an overflow of water that submerges land that is
              usually dry. Floods are an area of study in the discipline of
              hydrology. They are the most common and widespread natural severe
              weather event. Floods can look very different because flooding
              covers anything from a few inches of water to several feet. They
              can also come on quickly or build gradually. To better answer the
              question of “What is a flood?” we’ll answer what each specific
              type of flooding event is. According to our friends at the
              National Severe Storms Laboratory, there are different types of
              floods such as River flood, coastal flood,storm Surge and inland
              flooding.
            </h6>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className="text-center">Damage caused by flood </h1>
        <br></br>
        <div className="container">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Damage1}
                  className="d-block w-100"
                  alt="..."
                  height={"500px"}
                  width={"600px"}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Destruction of a home by the flood</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={Damage2}
                  className="d-block w-100"
                  alt="..."
                  height={"500px"}
                  width={"600px"}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>A village is affected by the flood</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={Damage3}
                  className="d-block w-100"
                  alt="..."
                  height={"500px"}
                  width={"600px"}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>A car is submerged in flood</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br />
        <br />
        <h6>
          The consequences of floods, both negative and positive, vary greatly
          depending on their location, duration, depth and speed, as well as the
          vulnerability and value of the affected natural and constructed
          environments. Floods impact both individuals and communities, and have
          social, economic, and environmental consequences. <br /> <br />
          Floods have large social consequences for communities and individuals
          As most people are well aware, the immediate impacts of flooding
          include loss of human life, damage to property, destruction of crops,
          loss of livestock, and deterioration of health conditions owing to
          waterborne diseases. As communication links and infrastructure such as
          power plants, roads and bridges are damaged and disrupted, some
          economic activities may come to a standstill, people are forced to
          leave their homes and normal life is disrupted. <br /> <br />
          Similarly, disruption to industry can lead to loss of livelihoods.
          Damage to infrastructure also causes long-term impacts, such as
          disruptions to supplies of clean water, wastewater treatment,
          electricity, transport, communication, education and health care. Loss
          of livelihoods, reduction in purchasing power and loss of land value
          in the floodplains can leave communities economically vulnerable.{" "}
          <br />
          <br />
          Floods can also traumatise victims and their families for long periods
          of time. The loss of loved ones has deep impacts, especially on
          children. Displacement from one's home, loss of property and
          disruption to business and social affairs can cause continuing stress.
          For some people the psychological impacts can be long lasting.
        </h6>
      </div>
    </>
  );
}
