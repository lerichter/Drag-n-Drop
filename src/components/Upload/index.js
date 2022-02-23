import { useState, useCallback } from 'react'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage, Img } from './styles'
import { parse } from "papaparse";

import uploadImg from '../../assets/cloud-upload-regular-240.png';

export default function Upload({ files, setFiles, setHeaders } ) { 
  const [highlight, setHighlight] = useState(false)

  const renderDragMessage = useCallback((isDragActive, isDragReject, isFocused) => {
    if(!isDragActive || !highlight) {
      return <UploadMessage>Drag your file here ...</UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error">Oh, no! Unsupported file ...</UploadMessage>
    }

    return <UploadMessage type="sucess">Drop your file here ... </UploadMessage>
  }, [highlight])
  

  return (
    <Dropzone 
      accept={'application/vnd.ms-excel'}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject, isFocused, ...rest }) => {
        return ( 
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}

          onDragOver={e => {
            e.preventDefault()
            setHighlight(true)
          }}
          onDrop={e => {
            e.preventDefault()
          
            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === 'application/vnd.ms-excel')
              .forEach(async (file) => {
                const text = await file.text()
                const result = parse(text, {
                  header: true,
                })
                setHeaders(result.meta.fields.filter(Boolean))
                setFiles((existing) => [
                  ...existing, 
                  ...result.data.filter(i => Boolean(i.id))
                ])
              })

            setHighlight(false)
          }}
        >
          <input {...getInputProps()} />
          <Img src={uploadImg} alt="" />
          {renderDragMessage(isDragActive, isDragReject, isFocused)}
      </DropContainer>
      )
      }}
    </Dropzone>
  )
}