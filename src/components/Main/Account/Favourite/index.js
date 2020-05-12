import React, { Component } from 'react';
import './index.css';

import poster from '../../../../assets/category_poster/1.jpg';
import { Link } from 'react-router-dom';

class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="container-fluid my-3 favourite">
                    <div className="row">
                        <div className="col-12 mb-3 ml-2">
                            <h5 className="mb-0">All Favoutite</h5>
                        </div>

                        <div className="col-12">
                            <Link to="/home/play/1">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/2">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/3">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/4">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/4">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/4">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Favourite;