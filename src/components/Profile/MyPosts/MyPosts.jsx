import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div>
                    <Post/>
                </div>
            </div>
    );
}

export default MyPosts;
