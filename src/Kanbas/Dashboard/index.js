import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const courses = [
    { title: 'CS5610', description: 'Web Development' },
    { title: 'CS5004', description: 'Introduction to Java' },
    { title: 'CS5500', description: 'Fundamentals of Computer Science' },
    { title: 'CS5001', description: 'Python' },
    { title: 'CS5510', description: 'Linux' },
    { title: 'CS6750', description: 'C++' },
    { title: 'CS3400', description: 'C#' },
    { title: 'CS2100', description: 'JS' },
  ];

  return (
    <Container>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({db.courses.length})</h2>
      <Row xs={1} sm={2} md={3} lg={4}>
        {db.courses.map((course, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src=".././images/react.png" />
              <Card.Body>
                <Card.name>{course.name}</Card.name>
                {/* <Card.Text>{course.description}</Card.Text> */}
                {/* <Button href={`/Kanbas/Courses/${course.title}`} variant="primary"> */}
                <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              >{course.name}</Link>
                  
                {/* </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
