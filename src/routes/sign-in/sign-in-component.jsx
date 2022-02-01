import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocument(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google</button>
            <SignUp />
        </div>
    )
}

export default SignIn