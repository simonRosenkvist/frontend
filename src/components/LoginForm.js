import React from 'react';

class LoginForm extends React.Component {
    render(){
        return (
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header"><h2>{this.props.header}</h2></div>
                    <div className="card-body">
                        <form onSubmit={this.props.handleSubmit}>

                            <input type="text" className="form-control" placeholder="Your Username" id="username" autoComplete="off" required={true} name="username" value={this.props.username} onChange={this.props.onChange}/>
                            
                            <input type="password" className="form-control" placeholder="Your Password" id="password" required={true} name="password" value={this.props.password} onChange={this.props.onChange}/>
                            
                            <div className="row">
                                <div className="col-xs-12 col-md-6"><input type="submit" className="btn btn-primary btn-block btn-lg" tabIndex="7"/></div>
                                <div className="col-xs-12 col-md-6"><a href="/" className="btn btn-success btn-block btn-lg">Back</a></div>
                            </div>
                        </form>
                        <label style={{display: this.props.error}}>ERROR TRY AGIAN</label>

                    </div>
                </div>
            </div>
        )
    }
};

export default LoginForm;