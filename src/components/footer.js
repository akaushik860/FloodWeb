import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Team Members</h3>
                <ul>
                  <li>
                    <a>Abhishek Kaushik</a>
                  </li>
                  <li>
                    <a>Ajay Pal</a>
                  </li>
                  <li>
                    <a>Anubhav Chitragupta</a>
                  </li>
                  <li>
                    <a>Aditi Yadav</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Inderprastha Eng. College</a>
                  </li>
                  <li>
                    <a href="#">Computer Science</a>
                  </li>
                  <li>
                    <a href="#">2022</a>
                  </li>
                </ul>
              </div>
             
            </div>
            <p className="copyright">Four A's © 2022</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
