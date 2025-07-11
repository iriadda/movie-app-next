import './UserInfo.css'

const UserInfo = () => {
    return (
        <>
            <a href={'#'} className="user-info">
                <img src={`https://img.icons8.com/color/48/user-female-circle--v1.png`} alt={"user-female-circle--v1"}
                     width="48" height="48"/>
                <p className="username">User name</p>
            </a>
        </>
    );
};
export default UserInfo;