import React from 'react';
import codeImage from '../../../resources/code-img.png'

const Blogs = () => {
    return (
        <div className='lg:px-24'>

            {/* QUESTION NO 01 */}
            <div class=" card my-8 w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">1.How will you improve the performance of a React Application?</h2>
                    <p className='text-justify font-semibold'>Answer: There are several ways to improve the performance of a react application. Some of the mechanisms are described below:

                        <ul className='list-disc ml-10 text-[16px]'>
                            <li>We know when we build a react project it compressed the whole project components into some bundles. But by the increasing of the bundle size the performance of the application is getting down. To reduce the bundle size we may split the bundle into some small bundle by using react lazy and suspense component.</li>
                            <li>Avoiding large rendering in the react application. Insured of render all the data in the initial loading, we have to render what actually view in the screen. For this optimization react have a tool called react window which only mound the viewport data.</li>
                            <li>Prohibited unnecessary rendering for boosting up the performance. React render the dom elements by the changing of the state value. For minimizing the rendering process, we may use react hook for reuse state value without multiple rendering.</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* QUESTION NO 02 */}
            <div class=" card my-8 w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">2.	What are the different ways to manage a state in a React application?</h2>
                    <p className='text-justify font-semibold'>Answer: There are mainly four ways to manage the state in react application. Each of them are described below:

                        <ul className='list-disc ml-10 text-[16px]'>
                            <li>Local state: Local state are used to manage the state inside the components. For example, set state true or false to open a modal.</li>
                            <li>Global state: It is used when state value should update or changes from anywhere from the application means the state should be lifting up to the parent component.</li>
                            <li>Server state: When data come from any external server, the application should fetch the data and set into a state to manipulate data.</li>
                            <li>URL state: when data exist in the url with query parameters that information should set in the url state</li>
                        </ul>
                    </p>
                </div>
            </div>


            {/* QUESTION NO 03 */}
            <div class=" card my-8 w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">3.How does prototypical inheritance work?</h2>
                    <p className='text-justify font-semibold'>Answer: Prototype is an internal and hidden property of every object and its properties. A prototypical inherit is a JavaScript feature that can add methods and property in an object. By using this inheritance power, an object can inherit the properties and method to another object.
                    </p>
                </div>
            </div>

            {/* QUESTION NO 04 */}
            <div class=" card my-8 w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">4.Why you do not set the state directly in React?</h2>
                    <p className='text-justify font-semibold'>Answer:According to the react documentation, use setstate to set a value to the state. But if you update the state directly it won’t re-render the component as a result the value are not set to the state immediately. Instead of, using the set method to set updated value to the state, react can catch the changes the and it re-render the particular dom to show the changes.
                    </p>
                </div>
            </div>

            {/* QUESTION NO 05 */}
            <div class=" card my-8 w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                    <p className='text-justify font-semibold'>Answer:We can use the javascript includes and filter method. For example,
                        <img className='w-96 rounded' src={codeImage} alt="" />
                    </p>
                </div>
            </div>

            {/* QUESTION NO 06 */}
            <div class=" card my-8 w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">6.What is a unit test? Why should write unit tests?</h2>

                    <p className='text-justify font-semibold'>Answer:Unit testing is a level of software testing where individual units/components of a software are tested. In the React world this means testing an individual React Component or functions. <br />
                        Unit test is essential to make sure that every component of the react application are working perfectly. By doing unit test, it checked the expected output for every input in each of the components. To improve application performance and find out any broken code, unit test is a good choice. There are many tools for unit test like JEST, ENZYME. But JEST is a testing library developed by Facebook and very popular in the past few years.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;