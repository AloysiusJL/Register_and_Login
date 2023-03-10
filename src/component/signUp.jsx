import react from "react"
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import React from "react"
import axios from "axios"

const signupSchema = Yup.object().shape({
    name: Yup.string()
        .min(6, "Name must be 6 character at minimum")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol')
})

class SignUp extends react.Component{
    render(){
        return (
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title">Sign Up</h1>
                    <Formik
                      initialValues={{ name: "", email: "", password: "" }}
                      validationSchema={signupSchema}
                      onSubmit={(values) => {
                        axios
                          .post("http://localhost:3000/user", values)
                          .then((response) => {
                            console.log(response.data)
                          })
                          .catch((error) => {
                            console.error(error)
                          })
                      }}
                    >
                      {(props) => {
                        return (
                          <Form>
                            <div className="field">
                              <label className="label" htmlFor="name">
                                Name
                              </label>
                              <div className="control">
                                <Field
                                  className="input"
                                  type="text"
                                  name="name"
                                  placeholder="Enter name"
                                />
                              </div>
                              <ErrorMessage
                                component="div"
                                name="name"
                                className="help is-danger"
                              />
                            </div>
                            <div className="field">
                              <label className="label" htmlFor="email">
                                Email
                              </label>
                              <div className="control">
                                <Field
                                  className="input"
                                  type="text"
                                  name="email"
                                  placeholder="Enter email"
                                  autoComplete="off"
                                />
                              </div>
                              <ErrorMessage
                                component="div"
                                name="email"
                                className="help is-danger"
                              />
                            </div>
                            <div className="field">
                              <label className="label" htmlFor="password">
                                Password
                              </label>
                              <div className="control">
                                <Field
                                  className="input"
                                  type="password"
                                  name="password"
                                  placeholder="Enter password"
                                />
                              </div>
                              <ErrorMessage
                                component="div"
                                name="password"
                                className="help is-danger"
                              />
                            </div>
                            <div className="field">
                              <div className="control">
                                <button
                                  className="button is-primary"
                                  type="submit"
                                  disabled={props.isSubmitting}
                                >
                                  Create account
                                </button>
                              </div>
                            </div>
                          </Form>
                        )
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }

export default SignUp