import { Container } from './styles'
import MaterialTable from 'material-table'

export const titleCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function FileList({ files, setFiles, headers }) {
  
  const columns = headers?.map(header => (
    { 
      field: header, 
      title: titleCase(header), 
    }
  ))

  return (
    <Container>
      <MaterialTable 
        title="Drag'n'Drop"
        setFiles={setFiles}
        data={files} 
        columns={columns} 
        
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...files, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setFiles(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...files]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setFiles(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate: (updatedRow,oldRow) => new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...files]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setFiles(updatedRows)
              resolve()
            }, 2000)
          }),
          onBulkUpdate: selectedRows => new Promise((resolve,reject)=>{
            const rows=Object.values(selectedRows)
            const updatedRows=[...files]
            let index;
            rows.map(emp => {
              index=emp.oldData.tableData.id
              updatedRows[index]=emp.newData
            })
            setTimeout(()=>{
              setFiles(updatedRows)
              resolve()
            },2000)
          })
        }}
        options={{
          actionsColumnIndex: -1, 
          addRowPosition: "first"
        }}
      />
    </Container>
  )
}