import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./linebar.css";
function linebar() {
  return (
    <div>
      <div className="linebar">
        <Row>
          <Col className="column d-flex align-items-center justify-content-center">
          <p>
            <a
              class="btn btn-success"
              data-toggle="collapse"
              href="#example_1"
              role="button"
              id="btn-1"
              aria-expanded="false"
              aria-controls="example_1"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2ZQU7DMBBFXRa9E3A2/7cqhWuVfcWOHqDlGiBDIlVVqJqQUk/ynzSbiWT5Zxxnvp2SmQDAUtIL8AF8lpB0kLQuz1IUgOdWQEc8pShIOpRJ55zv2xzw0FYmRYHm7V+arxYqFrIA3s6s+844HeQ433esISHp9XQCd8A2mhBgM9mlNU8harbfsuW2uZzzY5Pbpyjo5w/+2we4SsFalPVRZb4rUUSEalGMMaYXNmi1YYM2h+ZzMcRYjRXnhPAfxurWQvirsRqLyfgapiJENmiVYYNmjLkeNkG1Id9SVQYRGjxgCeyu7B1GD3UYq3Io/R5NCEOMVYilNSshsgmqDHxLZVIfvgD9PwLtQGV+DAAAAABJRU5ErkJggg=="
                alt="FILTER"
              />{" "}
              &nbsp; FILTER
            </a>
          </p>
          </Col>
          <Col className="column d-flex align-items-center justify-content-center">
          <div className="sort-grid">
            <div className="sortby">
              <p>SORT BY</p>
              <select>
                <option>FEATURED</option>
                <option>BEST SELLING</option>
                <option>A - Z</option>
                <option>Z - A</option>
                <option>PRICE, LOW - HIGH</option>
                <option>PRICE, HIGH - LOW</option>
                <option>DATE, OLD - NEW</option>
                <option>DATE, NEW - OLD</option>
              </select>
            </div>
          </div>
          </Col>
        </Row>
        <div class="linerbar-container">
          
        </div>
      </div>
      <div class="collapse" id="example_1">
        <div class="card card-body">
          <div className="content-line-bar">
            <div className="type" id="catbig">
              <p id="cat">CATEGORY</p>
              <p>Nike</p>
              <p>Adidas</p>
              <p>Vans</p>
              <p>Puma</p>
              <p>Skechers</p>
              <p>Converse</p>
            </div>
            <div className="type">
              <p id="mat">MATERIALS</p>
              <p>
                Cotton{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                Down
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                Houndstooth{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                Leather{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                Nappa{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                Leather{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
            </div>

            <div className="type">
              <p id="colors">COLORS</p>
              <p>
                Red{" "}
                <span>
                  <input type="checkbox" />
                  <span class="checkmark" checked="checked"></span>
                </span>
              </p>
              <p>
                Orange
                <span>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </span>
              </p>
              <p>
                Yellow{" "}
                <span>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </span>
              </p>
              <p>
                Green{" "}
                <span>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </span>
              </p>
              <p>
                Blue{" "}
                <span>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </span>
              </p>
            </div>

            <div className="type">
              <p id="size">SIZE</p>
              <p>
                XS{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                S
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                M{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                L{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                XL{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                XXL{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default linebar;
