import styled, {css} from 'styled-components';

const dragActive = css`
  border-color: #008000;
`

const dragReject = css`
  border-color: #FF0000;
`

export const DropContainer = styled.div.attrs({
  className: 'dropzone'
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursos: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}
`;

const messageColors = {
  default: '#999',
  error: '#FF0000',
  sucess: '#008000'
}

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-itens: center;
  padding: 20px 0;
`

export const Img = styled.img`
  width: 50px;
  display: flex;
  position: absolute;
  margin: 0 20px;
`