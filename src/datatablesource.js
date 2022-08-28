import { convertDate } from "./components/token/Token";
  const myImage='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'      
  export const userColumns = [
  { field: "id", headerName: "ID", width: 8, resizable:false},
  {
    field: "federation_name",
    headerName: "Federation",
    width: 145,
  },
  
  {
    field: "phone_number",
    headerName: "Mobile",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 140,
  },
  {
    field: "tinnumber",
    headerName: "Tin",
    width: 100,
  },
  {
    field: "number_of_members",
    headerName: "No",
    width: 40,
  },
  {
    field: "category_id",
    headerName: "Category",
    width: 50,
  },
  {
    field: "status",
    headerName: "Status",
    width: 80,
  },
  {
    field: "created_at",
    headerName: "Created",
    width: 120,
  },
  {
    field: "updated_at",
    headerName: "Status",
    width: 80,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//url data 

export const Data= [
  {
    id: 1,
    federation_name: "RwandaArtCouncil",
    phone_number: "0785419773",
    email: "admin@gmail.com",
    tinnumber: 11111,
    number_of_members: 121,
    status: "Pending",
    category_id: null,
    created_at: convertDate("2022-08-18T16:24:41.000000Z"),
    updated_at: convertDate("2022-08-18T16:24:41.000000Z")
  },
  {
    id: 2,
    federation_name: "Isubyo",
    phone_number: "0784748439",
    email: "isubyoart@gmail.com",
    tinnumber: 23838930,
    number_of_members: 89,
    status: "Pending",
    category_id: 1,
    created_at: convertDate("2022-08-19T12:48:31.000000Z"),
    updated_at: convertDate("2022-08-19T12:48:31.000000Z")
  }
  ,
  {
    id: 3,
    federation_name: "Ihuriro",
    phone_number: "0784748439",
    email: "ihuriro@gmail.com",
    tinnumber: 23838930,
    number_of_members: 100,
    status: "Pending",
    category_id: 1,
    created_at: convertDate("2022-08-19T12:48:31.000000Z"),
    updated_at: convertDate("2022-08-19T12:48:31.000000Z")
  }
]



// end of data







