import css from"./Profile.module.css";
export const Profile=({name,tag,location,image,stats })=>{
    return(
        <div className={css.container}>
             <div>
                <img className={css.imgStyle} src={image}alt="User avatar"/>
                <p className={css.nameTitle }>{name}</p>
                <p className={css.nicknameTitle}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
                <ul className={css.statsList}>
                    <li className={css.listItem} >
                        <span className={css.listTitle}>Followers</span>
                        <span className={css.listAmount}>{stats.followers}</span>
                        </li>
                    <li className={css.listItem}>
                        <span className={css.listTitle}>Views</span>
                        <span className={css.listAmount}>{stats.views}</span>
                        </li>
                    <li className={css.listItem}>
                        <span className={css.listTitle}>Likes</span>
                        <span className={css.listAmount}>{stats.likes}</span>
                        </li>
                </ul>
            </div>
        )
    }