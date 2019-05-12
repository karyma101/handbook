import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    profilePic={faker.image.avatar()} 
                    timeAgo="Today at 4:45PM"
                    content="Nice Blog post"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    profilePic={faker.image.avatar()} 
                    timeAgo="Today at 2:00PM"
                    content="I like this subject"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Jane" 
                    profilePic={faker.image.avatar()} 
                    timeAgo="Today at 3:00PM"
                    content="I like the writing"
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App / > , document.querySelector('#root'))
