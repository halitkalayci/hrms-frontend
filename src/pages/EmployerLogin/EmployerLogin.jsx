import React from "react";
import "./EmployerLogin.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Grid, Header, Message } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import { employerLoginAsync } from "../../store/actions/authActions";

export default function EmployerLogin() {
  const dispatch = useDispatch();
  const initialValues = {
    phone: "",
    password: "",
  };

  const schema = Yup.object({
    phone: Yup.string().required("Telefon zorunludur"),
    password: Yup.string().required("Şifre zorunludur"),
  });

  const handleSubmit = (values) => {
    dispatch(employerLoginAsync(values));
  };
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column className="general-grid" style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            `İş Veren` Olarak Giriş Yap
          </Header>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form className="ui form">
              <HrmsTextInput
                name="phone"
                placeholder="+90"
                label="Telefon Numaranız"
              ></HrmsTextInput>
              <HrmsTextInput
                type="password"
                name="password"
                placeholder="Şifreniz"
                label="Şifreniz"
              ></HrmsTextInput>
              <Button className="w-100" color="green" type="submit">
                Giriş Yap
              </Button>
            </Form>
          </Formik>
          <Message>
         <NavLink to="/login">İş Veren Başvurusu Yap</NavLink>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}
