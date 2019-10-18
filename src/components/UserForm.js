import React from 'react';

class UserForm extends React.Component {
    render(){
        return (
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header">
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.props.handleSubmit}>
                                <input type="text" className="form-control" id="username" placeholder="Your Username" autoComplete="off" required={true} name="username" value={this.props.username} onChange={this.props.onChange}/>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" autoComplete="off" required={true} name="email" value={this.props.email} onChange={this.props.onChange}></input>
                             
                                <label><input type="radio" required={true} name="role" value="1" checked={this.props.role === "1"} onChange={this.props.handleChange}/>User</label>
                                <br/>
                                <label><input type="radio" required={true} name="role" value="2" checked={this.props.role === "2"} onChange={this.props.handleChange}/>Owner</label>
                            
                                <input type="password" className="form-control" id="password" placeholder="Your Password" required={true} name="password" value={this.props.password} onChange={this.props.onChange}></input>
                            <div className="row">
                                <div className="col-xs-12 col-md-6"><input type="submit" className="btn btn-primary btn-block btn-lg" tabIndex="7"></input></div>
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

export default UserForm;