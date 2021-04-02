import React from 'react';
import PhotoGridImages from './PhotoGridImages';
import './PhotoGrid.css';

export default class PhotoGrid extends React.Component {
    constructor() {
        super()
        this.state = {
            showMe: false
        }
    }
    handleClick = () => {
        this.setState({
            showMe: !this.state.showMe
        })
    }
    render() {
        return (
            <div className='gridItem gridItemBlur' onClick={() => this.handleClick()}>
                <PhotoGridImages photoId={this.props.info.id} photoName={this.props.info.name}/>
                {this.state.showMe ? <p>
                    {this.props.info.content}
                </p> : null}
            </div>
        );
    }
}