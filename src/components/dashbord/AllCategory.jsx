import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Pagination from '../home/Pagination'
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { get_all_category, delete_category } from '../../store/actions/Dashborad/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const AllCategory = () => {
    const { currentPage } = useParams();
    const dispatch = useDispatch();
    const { perPage, allCategory, categoryCount, categorySuccess } = useSelector(state => state.dashboradCategory)

    useEffect(() => {
        if (categorySuccess) {
            toast.success(categorySuccess);
            dispatch({
                type: 'CATEGORY_SUCCESS_MESSAGE_CLEAR'
            })
        }
        dispatch(get_all_category(currentPage ? currentPage.split('-')[1] : 1))
    }, [currentPage, categorySuccess])
    return (
        <div className="all-category">
            <Toaster
                position={'bottom-center'}
                reverseOrder={false}
                toastOptions={
                    {
                        style: {
                            fontSize: '15px',
                        }
                    }
                }
            />
            <Helmet >
                <title>
                    All Category
                </title>
            </Helmet>
            <div className="show-category-action">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>All Category({allCategory.length})</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                        <input onChange={(e)=>dispatch(get_all_category(currentPage ? currentPage.split('-')[1] : 1,e.target.value))} type="text" placeholder='search article' className="form-control" />                            <span>
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
                        {
                            allCategory.length > 0 ? allCategory.map(category =>

                                <div key={category._id} className="category">
                                    <div className="name">
                                        {category.categoryName}
                                    </div>
                                    <div className="action">
                                        <span>
                                            <Link to={`/dashborad/category/edit/${category.categorySulg}`}>
                                                <MdEdit />
                                            </Link>
                                        </span>
                                        <span onClick={() => dispatch(delete_category(category._id))}>
                                            <MdDelete />
                                        </span>
                                    </div>
                                </div>

                            ) : 'Category Not found'
                        }
                    </div>
                </div>

                {
                    categoryCount === 0 || categoryCount < perPage ? "" :
                    <Pagination
                    pageNumber ={currentPage ? currentPage.split('-')[1]:1}
                    parPage = {perPage}
                    itemCount = {categoryCount}
                    path = '/dashborad/all-category'
                    />
                    }
               
            </div>
        </div>
    );
};

export default AllCategory;