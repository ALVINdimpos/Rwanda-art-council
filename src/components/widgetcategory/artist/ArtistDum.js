import { GridColumns } from "@mui/x-data-grid";
export const artist = [
  {
    id: "1",
    fname: "Mugabe",
    lname: "Bruce",
    gender: "Male",
    useNaname: "Bruce Melody",
    email: "mugabe@gmail.com",
    category: "Music and Dance",
    cluster: "Music",
  },
  {
    id: "2",
    fname: "Masamba",
    lname: "Iwacu",
    gender: "Male",
    useNaname: "Intore ",
    email: "masamba@gmail.com",
    category: "Music and Dance",
    cluster: "Music",
  },
  {
    id: "3",
    fname: "Urukerereza",
    lname: "Urukerereza",
    gender: "",
    useNaname: "Urukerereza",
    email: "mugabe@gmail.com",
    category: "Literature",
    cluster: "Poems",
  },
  {
    id: "4",
    fname: "Isubyo",
    lname: "Isubyo",
    gender: "",
    useNaname: "Isubyo",
    email: "isubyo@gmail.com",
    category: "Music and Dance",
    cluster: "Traditional dance",
  },
  {
    id: "5",
    fname: "Motion",
    lname: "Motion",
    gender: "",
    useNaname: "motion",
    email: "motion1@gmail.com",
    category: "Plastic Atrs",
    cluster: "Painting",
  },
];

export const artistColumn= [
  { field: "id", headerName: "id", hide: true },

  { field: "fname", headerName: "First Name", width: "150" },
  {
    field: "lname",
    headerName: "Last Name",
    width: "150",
  },
  {
    field: "gender",
    headerName: "Sex",
    width: "80",
    headerClassName: 'super-app-theme--header'
  },
  {
    field: "useNaname",
    headerName: "User Name(aka)",
    width: "200",
  },
  ,
  {
    field: "email",
    headerName: "Email",
    width: "200",
  
},
{
    field: "category",
    headerName: "Category",
    width: "200",
}
,
{
    field: "cluster",
    headerName: "Cluster",
    width: "200",
}

];
