import React from 'react';
import axios from 'axios';

class MailForm extends React.Component {
    //Initialize the class component State:s
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }


    //Manage all the form inputs:
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //Handle the Submit:
    handleSubmit = event => {
        //Prevent the page from re-loading by defaut:
        event.preventDefault();

        //Object where all the form input data will be store to be used around:
        const user = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };

        // AXIOS post to use the post request from nodemailer at 'server.js' file:
        axios.post('http://localhost:3001/api/form', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        // AXIOS post to use the post request from routes on 'routes/posts.js' file:
        axios.post('http://localhost:3001/posts', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    //Resetea estado inicial:
    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })

        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 1500)
    }

    // JSX Form element (check for properties!):
    render() {
        return (
            <div>
                <div className="col-12">

                    <form method="post" action="send" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6 col-12-small">
                                <input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nombre"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="col-6 col-12-small">
                                <input type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <input type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Asunto"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <textarea type='text'
                                    name="message"
                                    id="message"
                                    placeholder="Mensaje"
                                    onChange={this.handleChange}>

                                </textarea>
                            </div>
                            <div className="col-12">

                                <ul className="actions">
                                    <li><input type="submit" value="Enviar" /></li>
                                    <li><input type="reset" value="Borrar" className="alt"
                                        onClick={this.resetForm} /></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

//Export component to be used elsewhere:
export default MailForm;