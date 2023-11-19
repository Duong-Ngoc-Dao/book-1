import React, { Component } from 'react';
import PropTypes from 'prop-types';
import photo from '../assets/img/photo.jpg';

export class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mini-container jumbotron">
                <div class="media">
                    <a class="pull-left" href="https://github.com/Duong-Ngoc-Dao?tab=repositories">
                        <img class="media-object img-thumbnail w-10" src={photo} alt=""/>
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">About Developer</h4>
                        Dao
                        <p><a className="btn btn-primary btn-lg" href="https://github.com/Duong-Ngoc-Dao?tab=repositories" role="button">See More Projects</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;