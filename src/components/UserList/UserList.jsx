import {UserItem, UserList 
} from 'pages/Tweets/Tweets.styled'
import UserCard from 'components/UserCard/UserCard'

const UsersList =({ users, onFollowClick })=>{
    return(
        
<UserList>
    {users.map(({ id, tweets, followers, avatar }) => (
  
      <UserItem key={id} >

<UserCard
    id={id}
    tweets={tweets}
    followers={followers}
    avatar={avatar}
    onFollowClick={onFollowClick}
     />
  </UserItem>
    ))}
    </UserList>)
}

export default UsersList