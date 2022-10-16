import axios from "axios";
import { useRouter } from "next/router";
import { handleClientScriptLoad } from "next/script";
import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { loginCredit } from "types/authTypes";
import { saveAuth, logOut } from "@redux/slices/auth";
import { RootState } from "@redux/rootReducers";

const LoginForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateOrAny) => state.auth);
  const [authData, setAuthData] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginCredit>();

  const router = useRouter();

  const onSubmit = async (data: loginCredit) => {
    await axios.post("http://localhost:3000/api/login", data).then((res) => {
      if (res.status) {
        setAuthData(res?.data?.userData);
        localStorage.setItem("userData", JSON.stringify(auth.userData));
        router.push("/");
      } else {
        alert("Email/Password wrong");
      }
    });
  };

  if (authData) {
    localStorage.setItem("userData", JSON.stringify(auth.userData));
    dispatch(saveAuth(authData));
  }

  const logout = () => {
    dispatch(logout());
  };

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email")}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
