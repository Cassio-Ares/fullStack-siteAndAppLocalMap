import { RegisterPage } from "@/pages/registerView";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    return (
        <main>
            <RegisterPage/>
            <ToastContainer />
        </main>
    )
}
