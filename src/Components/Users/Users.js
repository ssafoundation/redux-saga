import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";

const Users = () => {
  const [formData, setFormData] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setFormData(data);
  };
  console.log(formData);
  return (
    <div>
      <Breadcrumb
        leftTitle="Dashboard"
        rightTitle="Dashboard"
        pageTitle="Product List"
      />

      <div className="">
        <Row>
          <Col lg={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="fullname">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="fullname"
                  {...register("fullname")}
                  // name="fullname"/
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="email"
                  // name="email"
                  {...register("email")}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="phone"
                  // name="phone"
                  {...register("phone")}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  id="password"
                  // name="password"
                  {...register("password")}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Users;
