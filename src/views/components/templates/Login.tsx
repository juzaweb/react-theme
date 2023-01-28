import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../../app/components/Layout";
import Loading from "../../../app/components/Loading";
import { login } from "../../../app/context/Auth";
import { is_auth } from "../../../app/context/Helper";
import { selectConfig } from "../../../app/features/config/configSlice";

export default function Login() {
    const config = useSelector(selectConfig);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigate = useNavigate();

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email || !password) {
            return false;
        }

        login(email, password).then(
            function(res) {
                if (res.status === 200) {
                    localStorage.setItem('access_token', res.data.data.access_token);
                    localStorage.setItem('token_expires_at', res.data.data.expires_at);
                }
            }
        );

        return false;
    }

    if (is_auth()) {
        navigate('/');
        return <Loading />
    }

    return <Layout>
        <Helmet>
            <title>Login</title>
            <meta name="description" content="Login" />
        </Helmet>

        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={handleLogin} method="post">
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </Layout>;
}