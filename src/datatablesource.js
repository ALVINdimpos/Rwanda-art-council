import { width } from "@mui/system";
import { convertDate } from "./components/token/Token";
  const myImage='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'      
  export const userColumns = [
  { field: "id", headerName: "ID", width: 4, resizable:false},

  {
    field:"fullName",
    headerName:"Full Name",
    width:145,
    flex:1,
  },
  {
    field: "federation_name",
    headerName: "Federation",
    width: 140,
    flex:1,
  },
  
  {
    field: "phone_number",
    headerName: "Mobile",
    width: 120,
    flex:1,

  },
  {
    field: "email",
    headerName: "Email",
    width: 110,
    flex:1,

  },
  {
    field: "gender",
    headerName: "Gender",
    width: 50,
    flex:1

  }
  
];

//url data 

export const artistData= [
  {
    id: 1,
    fullName:"Mugabe Olga",
    federation_name: "Fashion",
    phone_number: "0785419773",
    email: "admin@gmail.com",
    tinnumber: 11111,
    nationalID:119997004873292,
    gender:"Female",
    number_of_members: 121,
    union:"Fashion Modeling",
    created_at: convertDate("2022-08-18T16:24:41.000000Z"),
  },
  {
    id: 2,
    fullName:"Din Boss",
    federation_name: "Music and dance ",
    phone_number: "0785419773",
    email: "admin@gmail.com",
    tinnumber: 11111,
    nationalID:119997004873292,
    gender:"Male",
    union:"Traditional Dance",
    created_at: convertDate("2022-08-18T16:24:41.000000Z"),
  }
  ,
  {
    id: 3,
    fullName:"Rugaju Simbi Nathali",
    federation_name: "Music and dance ",
    phone_number: "0785419773",
    email: "admin@gmail.com",
    tinnumber: 11119481,
    nationalID:119957004873292,
    gender:"Male",
    union:"Traditional Dance",
    created_at: convertDate("2022-08-18T16:24:41.000000Z"),
  },
  {
    id: 4,
    fullName:"Iribagiza Dorcas",
    federation_name: "Music and dance ",
    phone_number: "0785419773",
    email: "admin@gmail.com",
    tinnumber: 11119481,
    nationalID:119957004873292,
    gender:"Male",
    union:"Gospel",
    created_at: convertDate("2022-08-18T16:24:41.000000Z"),
  }
]


export const federationColumns = [
  { field: "id", headerName: "ID", width: 4, resizable:false},
  {
    field: "federation_name",
    headerName: "Federation",
    width: 140,
    flex:1,
  },
  {field:'tinnumber',
  headerName:"Tin",
  width:100,
  flex:1
},
  {
    field:'status',
    headerName:'Status',
    width:70,
    flex:1,

  },
 
  {
    field: "email",
    headerName: "Email",
    width: 110,
    flex:1,

  },
 
  
];

// end of data

//function return federation size
// const [rowFed,setRowFed]=useState([])

export function getFederation_Size(){ 
  let fedSize=[]   
  fetch('https://rwanda-art-api.herokuapp.com/api/ViewUser',
    {
        method:'GET',
    headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
        'Content-Type':'application/json'
    }       
}).then(res=>res.json())
    .then(val=>
      fedSize.push(val.User?.Data)
  
        // console.log('Side federarion',val.User?.Data),
        //   setRowFed(val.User?.Data)
        )
    .catch(err=>console.error('mention Error.',err))
  
  return fedSize.length
  }

   

//analyse union api view

export const unionColumn=[
  {field:"id", 
  headerName:"#",
  width:40,
  flex:1,
},
  {field:"union_name",
  headerName:"Union Name",
  width:120,
  flex:1,
},{
  field:"email",
  headerName:"Email",
  width:120,
  flex:1,
},
{
  field:"province",
  headerName:"Address",
  width:120,
  flex:1,
},
{
field:'number_of_members',
headerName:'No Artist',
width:50,
flex:1
},
{
  field:"fedelation_code",
  headerName:"Federation Code",
  width:120,
  flex:1,
},
{
  field:"tinnumber",
  headerName:"Tin number",
  width:120,
  flex:1,
}
]




// cell
// : 
// "nyabihu"
// created_at
// : 
// "2022-09-12T22:06:51.000000Z"
// district
// : 
// "nyabihu"
// email
// : 
// "nyab@gmail.com"
// fedelation_code
// : 
// "111"
// file
// : 
// "1663020411.20200307200426_458fb189a394ed53cd39f55ef79da308.png"
// first_name
// : 
// "union"
// id
// : 
// 1
// image
// : 
// "1663020411.20200307200426_458fb189a394ed53cd39f55ef79da308.png"
// last_name
// : 
// "union"
// number_of_members
// : 
// 12
// password
// : 
// "$2y$10$UY8HJCS70NuhsAmAB3O15.wcdK2XrtZQAFtek06WDw0oadxYjbaYm"
// phone_number
// : 
// "0781234567"
// province
// : 
// "western"
// sector
// : 
// "nyabihu"
// status
// : 
// "Pending"
// tinnumber
// : 
// 112233499
// union_name
// : 
// "my union"
// union_slogan
// : 
// "union n yacu"
// updated_at
// : 
// "2022-09-12T22:06:51.000000Z"








