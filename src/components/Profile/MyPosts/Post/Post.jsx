import classes from './Post.module.css'

const Post = () => {
    return (

        <div className={classes.item}>
            <img src={'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>

    );
}

export default Post;
