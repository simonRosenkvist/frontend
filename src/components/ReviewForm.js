import React from 'react';

class ReviewForm extends React.Component {
    render(){
        return (
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header">
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.props.handleSubmit}>
                                <input type="text" className="form-control" placeholder="Your Restaurant address" autoComplete="off" required={true} name="address" value={this.props.address} onChange={this.props.onChange}></input>
                                <textarea type="text" rows="4" cols="39" name="reviewText" value={this.props.reviewText} onChange={this.props.onChange}></textarea>

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

export default ReviewForm;