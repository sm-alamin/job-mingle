import React, { useEffect, useState } from 'react';
import { getJobInformation } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedPost from '../AppliedPost/AppliedPost';

const AppliedJob = () => {
    const {initialJobCartInfo} = useLoaderData();

    return (
        <div>
            <div className='grid grid-cols-1 gap-8' >
            {
                initialJobCartInfo.map(post => <AppliedPost key={post.id} post ={post} />)
            }
            </div>
        </div>
    );
};

export default AppliedJob;