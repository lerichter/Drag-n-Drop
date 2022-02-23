import React, {useState} from 'react';
import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

export default function App( ) {
  const [files, setFiles] = useState([]);
  const [headers, setHeaders] = useState([]);

  return (
    <Container>
      <Content>
        <Upload 
          files={files} 
          setFiles={setFiles} 
          setHeaders={setHeaders} 
        />
        <FileList 
          files={files} 
          setFiles={setFiles} 
          headers={headers} 
        />
      </Content> 
      <GlobalStyle />
    </Container>
  );
}
