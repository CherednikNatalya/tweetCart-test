import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavLink = styled.button`
padding: 5px 10px;
	border-radius: 7px;
	font-size: 12px;
	background-color: var(--secondary);
	border: 1px solid var(--lightGray);
	transition: all var(--anim);
	margin-bottom: 20px;
	&:hover {
		background-color: var(--lightGray);
		color: var(--primary);
		border-color: var(--secondary);}
`

export const BtnList =styled.ul`
display: flex;
	align-items: center;
	column-gap: 30px;
	margin-bottom:30px;`

export const StyledLink = styled(Link)`
   display: flex;
   max-width: 120px;
  padding: 5px 10px;
border-radius: 7px;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: bold;
  border: none;
  background: #EBD8FF;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover span {
    transform: translateY(-0.33em);
  }
  &:active span {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserList = styled.ul`
  display: flex;
	flex-wrap: wrap;
	column-gap: 35px;
	row-gap: 40px;
`


export const CardWrapper = styled.div`
position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
  height: 100%;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
   background-image: url('images/bgi-1.png'), url('images/vector.png');
  background-position: top 28px right 36px, top 20px left 20px;
  background-repeat: no-repeat, no-repeat;
  color: #ebd8ff;
  &::after {
    position: absolute;
    content: '';
    z-index: 0;
    top: 50%;
    left: 0;
    width: 100%;
    height: 8px;
    transform: translateY(-50%);
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`


export const AvatarBox = styled.div`
  z-index: 1;
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  background-color: #5736a3;
  border-radius: 50%;
  width: 62px;
  height: 62px;
`;

export const ImageWrapper = styled.div`
position: absolute;
top: 178px;
display: flex;
align-items: center;
justify-content: center;
height: 80px;
width: 80px; 
border-radius:  5px;
background: red ;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`

export const Image = styled.img`
border-radius:  5px;
width: 62px; 
height: 62px;
object-fit: cover;
`

export const WrapperBottom = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 26px;
`

export const Tweet = styled.text`
font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
`

export const Followers = styled.text`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
`

export const Button = styled.button`
  position: relative;
  padding: 14px;
  width: 196px;
  height: 50px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-style: none;
  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#EBD8FF'};
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;


export const ButtonText = styled.span`
  transform: ${({ isFollowing }) =>
    isFollowing ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
  display: inline-block;
  width: 100%;
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    transform-origin: left center;
    transform-style: preserve-3d;
    transition: transform 0.3s ease-in-out;
  }
`;


export const Line = styled.div`
position: absolute;
top: 214px;
height: 8px;
width: 380px; 
background: EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`

export const UserItem = styled.li`
 width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  `