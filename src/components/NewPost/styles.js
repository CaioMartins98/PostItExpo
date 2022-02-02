import { TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 190px;
`;


export const ContainerNewPost = styled.View`
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  border: 2px solid #5227c7;
  border-radius: 4px;
  background: #444;
  height: 490px;
  width: 380px;
  border-radius: 8px;
`;
export const NewPostTitleContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NewPostTitle = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 24px;
  /* font-family: 'Poppins-Bold'; */
  padding: 20px 0 0 0px;
  margin-bottom: 80px;
`;
export const TitleLabel = styled.Text`
  color: #fff;
  font-size: 20px;
  /* font-family: 'Poppins-Bold'; */

  padding: 0px 0px 0px 10px;
`;

export const InputTitleField = styled(TextInput)`
  background: #6666;
  height: 47px;
  width: 350px;
  color: #fff;
  /* font-family: 'Poppins-Regular'; */
  font-size: 18px;
  margin-bottom: 15px;
  margin-left: 10px;
  border-radius: 8px;
`;
export const DescriptionLabel = styled.Text`
  color: #fff;
  font-size: 20px;
  /* font-family: 'Poppins-Bold'; */

  padding: 10px 0px 0px 10px;
  /* margin-top: 40px; */
`;

export const InputDescriptionField = styled(TextInput)`
  background: #6666;
  height: 190px;
  width: 350px;
  color: #fff;
  /* font-family: 'Poppins-Regular'; */
  font-size: 18px;
  margin-bottom: 15px;
  margin-left: 10px;
  border-radius: 8px;
`;

export const ButtonContainer = styled.View`
  top: 25px;
  /* position: absolute; */
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
/* bottom:50px; */
  width: 100%;
`;

export const ButtonAddField = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: #5227c7;
  width: 180px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 12px;
`;
export const ButtonCancelField = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: #eb837c;
  width: 170px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 12px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  /* font-family: 'Poppins-Bold'; */
  text-transform: uppercase;
  font-size: 16px;
  /* margin-left: 100px; */
  /* position: absolute; */
`;

export const ErrorFieldContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const ErrorField = styled.Text`
  color: red;
  font-size: 12px;
  /* font-family: 'Poppins-Regular'; */
  padding: 12px;
  /* width: 50px; */
  margin-bottom: 0px;
`;
