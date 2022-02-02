import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  /* margin-bottom: 150px; */
`;

export const ButtonContainer = styled.View`
  bottom: 20px;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonField = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: #5227c7;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  /* flex-direction: row; */
  /* padding: 13px; */
  
`;
export const ButtonText = styled.Text`
  color: #fff;
  /* font-family: 'Poppins-Bold'; */
  text-transform: uppercase;
  font-size: 18px;
  /* margin-left: 100px; */
  /* position: absolute; */
`;

export const ErrorTitle = styled.Text`
  color: red;
  font-size: 12px;
  /* font-family: 'Poppins-Regular'; */
  /* width: 50px; */
  margin-bottom: 10px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  /* font-family: 'Poppins-Regular'; */
  /* width: 50px; */
  margin-bottom: 5px;
`;
