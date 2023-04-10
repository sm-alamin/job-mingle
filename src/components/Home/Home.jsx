import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import JobPostings from '../JobPostings/JobPostings';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <>
            <Header />
           <section>
            <div className='text-center py-5'>
                <h3 className='text-3xl'>Job Category List</h3>
                <p className='text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {
                    categories.map(category => <Category key={category.id} category ={category} />)
                }
            </div>
           </section>
           <section className='my-5 py-5'>
            <div className='text-center py-5'>
                <h3 className='text-3xl'>Featured Jobs</h3>
                <p className='text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
          <JobPostings />
            
           </section>
        </>
    );
};

export default Home;