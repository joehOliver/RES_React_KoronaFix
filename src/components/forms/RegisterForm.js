import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/button/dist/mdc.button.css';
import '@rmwc/@rmwc/icon/icon.css';

const fieldInput = (field) => {
    return <TextField label={field.props.inputLabel} type={field.type} />
}

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <Field
                            name="email"
                            type="email"
                            id="registerEmail"
                            props={{inputLabel:"Email"}}
                            component={fieldInput} />
                    </fieldset>
                    <fieldset>
                        <Field
                            name="password"
                            type="password"
                            id="registerPassword"
                            props={{inputLabel:"Password"}}
                            component={fieldInput} />
                    </fieldset>
                    <fieldset>
                        <Field
                            name="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            props={{inputLabel:"Confirm Password"}}
                            component={fieldInput} />
                    </fieldset>
                    <Button label="Login" raised type="submit" />
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: "register" })(RegisterForm);