import * as React from 'react';


class Register extends React.Component<IRegisterProps, IRegisterState> {


    constructor(props: IRegisterProps) {
        super(props);
        this.state= {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            role: 'guest'
        }
    }


    render() {
        return (
            <main className="container">
                <section className="row">
                    <article className="col">
                        <form className="form-group border border-dark rounded p-3">
                            <h1 className="text-center">Please Register</h1>
                            <label>Name:</label>
                            <input type="text" placeholder="Required" className="form-control" />
                            <label>Email:</label>
                            <input type="text" placeholder="Optional" className="form-control" />
                            <label>Username:</label>
                            <input type="text" placeholder="Required" className="form-control" />
                            <label>Password:</label>
                            <input type="password" placeholder="Required" className="form-control" />
                            <label>Confirm Password:</label>
                            <input type="password" placeholder="Required" className="form-control" />
                            <button className="btn btn-primary mt-2">Submit</button>
                        </form>
                    </article>
                </section>
            </main>
        )
    }
}

export interface IRegisterProps { }

export interface IRegisterState {
    name: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    role: string;
}

export default Register;