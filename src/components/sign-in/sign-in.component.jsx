import { useState } from "react";
import { signInWithGooglePopup, signInUserWithEmailAndPassword, createUserDocument } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.styles.scss"


const defaultFormFields = {
    email: "",
    password: "",
}

const SignIn = () => {

    const [ formFields, setFormFields ] = useState( defaultFormFields );
    const { email, password } = formFields;

    const resetForm = () => {
        setFormFields( defaultFormFields );
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocument( user );
    }

    const handleSummit = async ( event ) => {
        event.preventDefault();

        try {
            await signInUserWithEmailAndPassword( email, password );
            resetForm();
        } catch ( e ) {
            if ( e.code === "auth/wrong-password" ) {
                alert( "Incorrect password" );
            } else if ( e.code === "auth/user-not-found" ) {
                alert( "User not found. Please register!" )
            } else {
                console.log( e );
            }
        }
    }

    const handleChange = ( event ) => {
        const { name, value } = event.target;

        setFormFields( { ...formFields, [ name ]: value } )
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={ handleSummit }>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={ handleChange }
                    name="email"
                    value={ email }
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={ handleChange }
                    name="password"
                    value={ password }
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        buttonType='google'
                        type="button"
                        onClick={ signInWithGoogle }
                    >Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;