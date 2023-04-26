import {  CardWrapper, AvatarBox, Avatar, WrapperBottom, Tweet, Followers, Button, ButtonText 
} from 'pages/Tweets/Tweets.styled'
import { loadFromStorage  } from 'components/services/storage';

const UserCard =({ id, avatar, tweets, followers, onFollowClick })=>{
    const isFollowing = loadFromStorage(`tweet_${id}`) === true;

    const handleFollowClick = () => {
      onFollowClick(id, isFollowing);
    };
    
    return(
        <CardWrapper>
        <AvatarBox>
        <Avatar  src={avatar} alt='user avatar' />
        </AvatarBox>

        <WrapperBottom>
          <Tweet> {tweets} Tweets </Tweet>
          <Followers> {followers.toLocaleString()} Followers </Followers>
        </WrapperBottom>
        
        <Button type='button' 
        onClick={handleFollowClick}
        isFollowing={isFollowing}>
      <ButtonText >
        {isFollowing ? 'Following' : 'Follow'}
      </ButtonText>
    </Button> 
    

      </CardWrapper>  
    )
}
export default UserCard