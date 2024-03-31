
import clsx from "clsx"
import style from "../FriendListItem/FriendListItem.module.css"
export const FriendListItem=({ avatar, isOnline, name})=>{
   const textColor=  clsx( style.isOnline, isOnline ? style.online : style.ofline)
    return(
        <div className={style.itemsWrapper}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={style.text}>{name}</p>
  <p className={textColor}>{isOnline ? 'Online':'Ofline'}</p>
</div>
    )
    
}