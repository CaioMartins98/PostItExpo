import styled from 'styled-components/native';
import { FlatList } from 'react-native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PostContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 170px;
  
  border-radius: 4px;
  height: 200px;
`;



export const Post = styled.View`
  flex: 1;
  margin: 8px;
  background: #5555;
  padding: 12px 0px;
  border-radius: 4px;
  border: 2px solid #5227c7;
  height: 340px;
  /* margin-bottom: 100px; */
  /* margin-top: 50px; */
`;

export const HeaderPost = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  /* word-wrap: break-word; */
  /* word-break:break-all; */
 /* padding: 0 12px; */
  /* box-sizing: border-box; */
`;

export const PostTitleContainer = styled.View`
   width: 400px;
  align-items: center;
  justify-content: center;
  
  height: 50px;
`

export const PostTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  /* font-family: 'Poppins-Regular'; */
  margin-top: 5px;
  font-weight: 400;
  
  letter-spacing: 0px;
  text-align: center;
  /* margin-left: 155px; */
  text-transform: uppercase;
`;

export const IconContainer = styled.View`
  margin-right: 10px;
  width: 30px;
  height: 50px;
  align-items: center;
  justify-content: center;
  height: 50px;
 /* padding: 0px 12px; */
`;

export const ContainerPostText = styled.View`
  height: 230px;
  
  padding: 10px;
`;

export const PostText = styled.Text`
  color: #fff;
  /* font-family: 'Poppins-Regular'; */
  font-size: 20px;
  margin-left: 5px;
`;

export const Divider = styled.View`
  border: 0.5px solid #666;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* border-top: 2px; */
  bottom: 0px;
  height: 45px;
`;

export const ContainerPostDate = styled.View`
  width: 125px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

export const PostDate = styled.Text`
  margin-top: 5px;
  color: #f3f9ff;
  font-size: 17px;
  /* font-family: 'Poppins-Regular'; */
`;

export const ContainerPostUser = styled.View`
  width: 120px;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid black; */
  margin-left: auto;
`;

export const PostUser = styled.Text`
  margin-top: auto;
  /* text-align: center; */
  color: #f3f9ff;
  font-size: 17px;
  /* font-family: 'Poppins-Regular'; */
`;
