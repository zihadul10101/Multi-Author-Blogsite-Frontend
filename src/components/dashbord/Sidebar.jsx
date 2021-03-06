import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai'
import { RiArticleLine } from 'react-icons/ri'
import { FaRegCaretSquareRight, FaTag, FaEye, FaPlusCircle } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { BsChevronRight } from 'react-icons/bs'
const Sidebar = () => {
    return (
        <div className="dashborad-main-content-sidebar">
            <ul>
                <input type="checkbox" id="artical" />
                <input type="checkbox" id="category" />
                <input type="checkbox" id="tag" />
                <input type="checkbox" id="user" />

                <li>
                    <Link to='/dashborad'>
                        <label htmlFor="">
                            <h3>
                                <span>
                                    <AiFillDashboard />
                                </span>
                                <span> Dashborad</span>
                            </h3>
                        </label>
                    </Link>
                </li>
                <li>

                    <label htmlFor="artical">
                        <h3>
                            <span>
                                <RiArticleLine />
                            </span>
                            <span>Article</span>
                        </h3>
                        <span className='right-icon1'> <BsChevronRight /> </span>
                    </label>
                    <div className="article-categoory">
                        <Link to="/dashborad/all-artical">
                            <span>
                                <FaEye />
                            </span>
                            <span>All Article</span>
                        </Link>
                        <Link to='/dashborad/artical-add'>
                            <span>
                                <FaPlusCircle />
                                <span>Add Article</span>
                            </span>
                        </Link>

                    </div>
                </li>
                <li>

                    <label htmlFor="category">
                        <h3>
                            <span>
                                <FaRegCaretSquareRight />
                            </span>
                            <span> Category</span>
                        </h3>
                        <span className='right-icon2'> <BsChevronRight /> </span>
                    </label>
                    <div className="categoory-categoory">
                        <Link to='/dashborad/all-category'>
                            <span>
                                <FaEye />
                            </span>
                            <span>All Category</span>
                        </Link>
                        <Link to='/dashborad/category-add'>
                            <span>
                                <FaPlusCircle />
                                <span>Add category</span>
                            </span>
                        </Link>

                    </div>

                </li>
                <li>

                    <label htmlFor="tag">
                        <h3>
                            <span>
                                <FaTag />
                            </span>
                            <span> Tag</span>
                        </h3>
                        <span className='right-icon3'> <BsChevronRight /> </span>
                    </label>
                    <div className="tag-categoory">
                        <Link to="/dashborad/all-tag">
                            <span>
                                <FaEye />
                            </span>
                            <span>All Tag</span>
                        </Link>
                        <Link to='/dashborad/tag-add'>
                            <span>
                                <FaPlusCircle />
                                <span>Add Tag</span>
                            </span>
                        </Link>

                    </div>
                </li>
                <li>

                    <label htmlFor="user">
                        <h3>
                            <span>
                                <HiUserGroup />
                            </span>
                            <span> User</span>
                        </h3>
                        <span className='right-icon4'> <BsChevronRight /> </span>
                    </label>
                    <div className="user-categoory">
                        <Link to='/dashborad/all-user'>
                            <span>
                                <FaEye />
                            </span>
                            <span>All User</span>
                        </Link>
                        <Link to="/dashborad/all-sub-admin">
                            <span>
                                <FaEye />
                                <span>Add Sub Admin</span>
                            </span>
                        </Link>

                    </div>
                </li>
                <li>
                    <Link to='/dashborad/comments'>
                        <label htmlFor="">
                            <h3>
                                <span>
                                    <AiFillDashboard />
                                </span>
                                <span>Comment</span>
                            </h3>
                        </label>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;