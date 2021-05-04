import React from 'react';
import './CourseDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const CourseDetail = (props) => {
    console.log(props);
    const {price, instructor} = props.course;
    return (
        <div className="course-detail">
            <h4 className="course-name">{props.course.["course-name"]}</h4>
            <br></br>
            <p>Price: $ {price}</p>

            <p>Instructor : {instructor}</p>
            <button 
            className="main-btn"
            onClick={
                () => props.handleAddCourse(props.course)
            }
            >
                <FontAwesomeIcon icon={faShoppingBag} /> Enroll Now</button>
        </div>
    );
};

export default CourseDetail;