import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={'https://c.wallhere.com/photos/ce/1f/Manhattan_Brooklyn_purple_bridge_lights_sea_river_New_York_City-260493.jpg!d'}/>
            </div>
            <div>
                ava + desctiption
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
