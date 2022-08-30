export const base_uri=`https://rwanda-art-api.herokuapp.com/api/ViewUser`
// export  const aprove_uri='https://rwanda-art-api.herokuapp.com/api/users/Aproval'
export const eventUrl='https://rwanda-art-api.herokuapp.com/api/events'

    
  const token=localStorage.getItem('token')
  // localStorage.setItem('token','Bearer ' +token) 
     
  // const tok=localStorage.getItem('token');

// console.log('Validate Token',token);


export  function getTocken(){
    return  token;
}


export  const convertDate=(data)=>{
  const date=new Date(data)
  return date.toLocaleString('en-us',{month:'short'}) + "-" +date.getFullYear()+ "-" +date.getDate()
}
export  const convertMonth=(data)=>{
  const date=new Date(data)
  return date.toLocaleString('en-us',{month:'long'})
}
