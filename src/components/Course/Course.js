import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import CourseDetail from '../CourseDetail/CourseDetail';
import course from '../Data/data.json';
import './Course.css';

const Course = () => {
    console.log(course);
    const first15 = course.slice(0, 15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = () =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
    
    return (
        <div className="course-container">

            <div className="course-detail">
           
          {
              courses.map(crs => <CourseDetail 
               handleAddCourse={handleAddCourse}
               course={crs}>

                </CourseDetail>)
          }
      
        
            </div>

            <div className="course-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Course;