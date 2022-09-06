import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={"https://e7.pngegg.com/pngimages/981/512/png-clipart-avengers-logo-captain-america-thor-hulk-logo-captain-america-marvel-avengers-assemble-avengers.png"} alt={'logo'}/>
        </header>
    );
}

export default Header;
