import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #251F2D;
`;

export const TitleInput = styled.TextInput`
font-size: 20px;
font-weight: bold;
padding: 15px;
color: #FFF;
`;

export const BodyInput = styled.TextInput`
flex: 1;
padding: 15px;
font-size: 15px;
color: #FFF;
`;

export const SaveButton = styled.TouchableHighlight`
margin-right: 15px;
`;

export const SaveButtonImage = styled.Image`
width: 24px;
height: 24px;
`;

export const CloseButton = styled.TouchableHighlight`
margin-left: 15px;
`;

export const CloseButtonImage = styled.Image`
width: 20px;
height: 20px;
`;

export const DeleteButton = styled.TouchableHighlight`
height: 40px;
background-color: #CF6679;
justify-content: center;
align-items: center;
`;

export const DeleteButtonText = styled.Text`
font-size: 14px;
color: #FFF;
`;