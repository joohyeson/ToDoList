import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Todo.css";

function Todo(props) {
  const {
    overlapGroup,
    todo,
    overlapGroup1,
    routine,
    overlapGroup2,
    event,
    overlapGroup3,
    checklist,
    text1,
    text,
    line5,
    text2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mein-hwamyeon-todo screen">
        <div className="navbar_m">
          <div className="todo">
            <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="todo-1 valign-text-middle lato-normal-jacarta-18px">{todo}</div>
            </div>
          </div>
          <div className="navbar-item">
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="routine lato-normal-jacarta-18px">{routine}</div>
            </div>
          </div>
          <div className="navbar-item">
            <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="event lato-normal-jacarta-18px">{event}</div>
            </div>
          </div>
          <div className="navbar-item">
            <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <div className="checklist lato-normal-jacarta-18px">{checklist}</div>
            </div>
          </div>
          <div className="text-1 leaguegothic-regular-normal-white-64px">{text1}</div>
        </div>
        <Container>
          <Row>
            <Col><테이블내용 text={text} src={line5} /></Col>
            <Col><테이블내용 text={text} src={line5} /></Col>
          </Row>
        </Container>

        <div className="addbutton">
          <div className="overlap-group4">
            <div className="text-2 valign-text-middle leaguegothic-regular-normal-white-64px">{text2}</div>
          </div>
        </div>
      </div>

    </div >
  );
}

function 테이블내용(props) {
  return (
    <div className="todotext">
      <div className="flex-row">
        <div className="rectangle-10"></div>
        <div className="text valign-text-middle lato-normal-jacarta-18px">{props.text}</div>
      </div>
      <img className="line-5" src={props.src} />
    </div>
  )
}

export default Todo;
