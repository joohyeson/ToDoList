import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Todo.css";

function Todo(props) {
  const {
    line5,
    text2,
  } = props;

  let [메모, 메모변경] = useState(['안녕하세요', '메모1', '바보바보']);
  let [메모추가플래그, 메모추가플래그변경] = useState(true);
  let [메모내용, 메모내용변경] = useState('');

  function 메모추가() {
    let temp = [...메모];
    temp.push(메모내용);
    메모변경(temp);

    console.log(메모);
  }

  return (
    <div className="container-center-horizontal">
      <div className="mein-hwamyeon-todo screen">

        <Navbar_todo {...props} />

        <Container>
          <Row xs={1} md={2}>
            {
              메모.map(function (object, index) {
                return (
                  <Col>
                    <테이블내용 text={메모[index]} src={line5} />
                  </Col>)
              })
            }
          </Row>
        </Container>

        <div className="addbutton" onClick={() => { 메모추가플래그변경(!메모추가플래그) }}>
          <div className="overlap-group4">
            <div className="text-2 valign-text-middle leaguegothic-regular-normal-white-64px">{text2}</div>
          </div>
        </div>

        {
          메모추가플래그 === false
            ? (
              <>
                <button class="btn btn-outline-secondary leaguegothic-regular-normal-white-64px" type="button" id="button-addon1" onClick={() => { 메모추가(); 메모내용변경(''); 메모추가플래그변경(true) }}>Add</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={메모내용} onChange={(e) => {
                  메모내용변경(e.target.value);
                }} />
              </>
            )
            : null
        }
      </div>
    </div >
  );
}

function Navbar_todo(props) {

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
  } = props;

  return (
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
  )
}

function 테이블내용(props) {


  let [삭제버튼, 삭제버튼변경] = useState(true);
  return (
    <div className="todotext" onMouseOver={() => { 삭제버튼변경(false); }} onMouseOut={() => { 삭제버튼변경(true); }}>
      <div className="flex-row" >
        <div className="rectangle-10" ></div>
        <div className="text valign-text-middle lato-normal-jacarta-18px" >{props.text}</div>
        <div><p className="deleteButton" hidden={삭제버튼} >X</p></div>
      </div>
      <img className="line-5" src={props.src} />
    </div>
  )
}

export default Todo;
