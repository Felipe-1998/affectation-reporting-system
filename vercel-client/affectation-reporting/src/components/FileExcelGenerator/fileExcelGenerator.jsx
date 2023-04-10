import { FaFileExcel } from "react-icons/fa";
import swal from "sweetalert";
import {utils, write} from "xlsx";
import style from "./fileExcelGenerator.module.css";
const FileExcelGenerator=({dataObject,listName})=>{
  /** This component is a button to generate an .xlsx file from object obtained from a database */
  function downloadXLSX() {
    swal("Se ha generado un archivo .xlsx exitosamente!");
    if(!dataObject || dataObject.length<1) return swal("Data not available!");
    let data = [];
    let dataKeys = [...Object.keys(dataObject[0])];
    let dataValues = dataObject.map(dataO=>Object.values(dataO).map(val=>Array.isArray(val)?InternalObjects(val):val).reverse());
    data = [dataKeys.reverse(),...dataValues];
    const date = currentDate();
    const fileName=listName+date;
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    const workbook = { Sheets: {}, SheetNames: [] };
    const sheetName = listName[0].toUpperCase() + listName.substring(1) ; //sheet name's in excel, the first letter is a capital letter.
    const sheet = utils.aoa_to_sheet(data);
    workbook.Sheets[sheetName] = sheet;
    workbook.SheetNames.push(sheetName);
    //------------------------------------------------------------------------------------------------------------------------------------------------
    const wbBinaryString = write(workbook, { bookType: 'xlsx', type: 'binary' });
    const wbBlob = new Blob([s2ab(wbBinaryString)], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(wbBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName + '.xlsx';
    a.click();
  }
  /** currentDate() is a method to get the current date when the file was downloaded */
  const currentDate=()=>{
    const time = Date.now();
    const today = new Date(time);
    const string = "_"+today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()+"-"+today.getHours()+today.getMinutes()+today.getSeconds();
    return string;
  }
  /** internalObjects() is a method to get the data internal in a arrays of objects */
  const InternalObjects=(val)=>{
    if(typeof(val[0])==='string'){
      return val.toString();
    }else if(typeof(val[0])==='number'){
        return val;
    }else{
      return val.map((obj)=>obj.name).toString();
    }
  }

  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  }

    return (
      <div className={style.downloadXLSX}>
        <FaFileExcel/>
        <span onClick={downloadXLSX}>Download XLSX</span>
      </div>
        
    );
}

export default FileExcelGenerator;