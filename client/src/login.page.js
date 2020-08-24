import React from "react";
import auth from "./auth";
import GoogleLogin from 'react-google-login';

export const LandingPage = props => {
    console.log(props)
    console.log(auth)

    return (
        <div id="page-wrapper">

            <section id="banner">
                <div className="inner">
                    <div className="logo"><span className="icon fa-gem"></span></div>
                    <h2>Fantasy Co.</h2>
                    <p>Somos el Fondo Privado de Inversiones más eficiente del mercado nacional.</p>
                    <GoogleLogin

                        clientId="85357354801-oe7amo7cnqmam9vs5dsgbase3qvvis6e.apps.googleusercontent.com"
                        buttonText="Login"
                        className="button"
                        onClick={props.onClick}
                        disabled={props.disabled}


                        render={renderProps => (
                            <button
                                className="button"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                Login con Google
                            </button>
                        )}


                        onSuccess={(res) => {
                            auth.authObj = res;

                            auth.login(() => {
                                props.history.push("/app");
                            });
                        }}

                        onFailure={() => {
                            auth.logout(() => {
                                props.history.push("/");
                            });
                        }}
                    />
                </div>
            </section>



        </div>
    );
};
