import React from 'react';
import Helmet from 'react-helmet';
import Pagination from '../home/Pagination'
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaRegEye, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const AllTag = () => {
    return (
        <div className="all-category">
            <Helmet >
                <title>
                    All Tag
                </title>
            </Helmet>
            <div className="show-category-action">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>All Tag(22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" placeholder="search Artical" className="form-control" />
                            <span>
                                <FaSearch />
                            </span>
                        </div>

                    </div>
                    <div className="newAdd">
                        <Link to='/dashborad/category-add' className="btn">
                            Add New
                        </Link>
                    </div>
                </div>
                <div className="hight-60vh">
                    <div className="categorys">
                        <div className="category">
                            <div className="name">
                                Programing
                            </div>
                            <div className="action">
                                <span>
                                    <Link to='/dashborad/tag/edit/kk'>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">
                                Programing
                            </div>
                            <div className="action">
                                <span>
                                    <Link to='/dashborad/tag/edit/kk'>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">
                                Programing
                            </div>
                            <div className="action">
                                <span>
                                    <Link to='/dashborad/tag/edit/kk'>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">
                                Programing
                            </div>
                            <div className="action">
                                <span>
                                    <Link to='/dashborad/tag/edit/kk'>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">
                                Programing
                            </div>
                            <div className="action">
                                <span>
                                    <Link to='/dashborad/tag/edit/kk'>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default AllTag;