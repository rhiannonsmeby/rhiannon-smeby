import React, { useState } from 'react';
import PhotoGridImages from './PhotoGridImages';
import './PhotoGrid.css';

export default class PhotoGrid extends React.Component {
    constructor() {
        super()
        this.state = {
            showMe: true
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
                <PhotoGridImages photoId={this.props.info.id} />
                {this.state.showMe ? <p>
                    {this.props.info.content}
                </p> : null}
            </div>
        );
    }
}