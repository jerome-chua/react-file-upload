import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import Upload from "./Upload.jsx";

export default function App() {
  return (
    <Container>
      <Row>
        <h1>File Upload</h1>
        <Upload />
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>File Name</th>
              <th>Modified</th>
            </tr>
          </thead>
        </Table>
      </Row>
    </Container>
  );
}
