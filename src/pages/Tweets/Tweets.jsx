import {useLocation} from 'react-router-dom'
import { useEffect, useState, 
  // useRef
} from 'react';
import { loadFromStorage, saveToStorage } from 'components/services/storage';
import {  StyledLink , UserItem, UserList, Wrapper, CardWrapper, AvatarBox, Avatar, WrapperBottom, Tweet, Followers, Button, ButtonText 
} from './Tweets.styled'
import {fetchUsers,  updateFollowers} from 'components/API/userApi'
import STATUS from 'components/services/status'
import Section from 'components/Section/Section'
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import DropDown from 'components/DropDown/DropDown'
import Loader from 'components/Loader/Loader'

const Tweets = () =>{
  const [status, setStatus] =useState(STATUS.idle)
  const [users, setUsers ] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('show all');
  const [page, setPage] = useState(1);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true);
  

const location = useLocation();
// const firsRender = useRef(true);

useEffect (()=>{
  setStatus(STATUS.pending);
  setIsLoadMoreVisible(false);

  fetchUsers(page).then(newUsers=> {
    setUsers(prevUsers => [...prevUsers, ...newUsers]);
    setStatus(STATUS.success);
    setIsLoadMoreVisible(true);
  })
  .catch(console.log);

  // if (!firsRender.current) {
  //   fetchUsers(page);
  //   return;
  // }

  // firsRender.current = false;
},[page])

useEffect(() => {
  if (users.length === 12 && page !== 1) {
    setIsLoadMoreVisible(false);
  }
}, [page, users.length]);

const handleFollowClick = (userId, isFollowing) => {
  const updatedUsers = users.map(user => {
    if (user.id === userId) {
      const updatedUser = {
        ...user,
        followers: user.followers + (isFollowing ? -1 : 1),
      };
      updateFollowers(user.id, { followers: updatedUser.followers });
      return updatedUser;
    }
    return user;
  });
  setUsers(updatedUsers);
  saveToStorage(`tweet_${userId}`, isFollowing ? false : true);
};

// const isBtnLoadMoreVisible = numberVisibleUsers < users.length;

const onBtnLoadMore = () => {
  setPage(prevPage=> prevPage + 1);
};

const filterUsers = (users, selectedFilter) => {
  switch (selectedFilter) {
    case 'show all':
      return users;
    case 'follow':
      return users.filter(
        user => loadFromStorage(`tweet_${user.id}`) !== true
      );
    case 'followings':
      return users.filter(
        user => loadFromStorage(`tweet_${user.id}`) === true
      );
    default:
      return users;
  }
};


const filteredUsers = filterUsers(users, selectedFilter);
// const isFollowing = loadFromStorage(`tweet_${users.id}`) === true;


    return (
    
    <Section>
       <Wrapper>
       <StyledLink  to={location.state?.from ?? '/'} className="link"  >
          Go Back
        </StyledLink >
        <DropDown
            value={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          {users.length > 0 && (
        
  <UserList>
    {users.map(({ id, user, tweets, followers, avatar, isFollowing }) => (
  
      <UserItem key={id} >
        <CardWrapper>
          <AvatarBox>
          <Avatar width={62} height={62} src={avatar} alt='user avatar' />
          </AvatarBox>

          <WrapperBottom>
            <Tweet> {tweets} Tweets </Tweet>
            <Followers> {followers.toLocaleString()} Followers </Followers>
          </WrapperBottom>
          
          <Button type='button' onClick={handleFollowClick}>
        <ButtonText >
          {isFollowing ? 'Following' : 'Follow'}
        </ButtonText>
      </Button> 
      

        </CardWrapper>  
      </UserItem>
    ))}
  </UserList> 
)}
  {isLoadMoreVisible && filteredUsers.length !== 0 &&
  (<ButtonLoadMore 
  onBtnLoadMore={onBtnLoadMore}/>)}
{status === STATUS.pending && <Loader/>}

  </Wrapper>
  </Section>
    )
}

export default Tweets






