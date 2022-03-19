import React from 'react';
import { useLocation } from 'react-router-dom';
import { InitPost } from './HomePage';


const PostDetails = () => {
    const {state} = useLocation();

    const post = state as InitPost;
    return (
        <div style={{ textAlign: "center" }} data-testid="detailsPost">
            <h3>Details</h3>
            <div >
                <pre>
                    {
                        JSON.stringify(post, null, 2)
                    }
                </pre>
            </div>
        </div>
    );
};

export default PostDetails;