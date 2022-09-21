import { signInWithGooglePopup } from "../../../utils/firebase/firebase";
import {createUserDocumentFromAuth} from "../../../utils/firebase/firebase" 


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await  signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>
                Sign In Page
            </h1>
            <button onClick={logGoogleUser} >
                Sign IN with Google Popup
            </button>
        </div>
    )
}

export default SignIn