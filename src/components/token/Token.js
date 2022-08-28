export const base_uri=`https://rwanda-art-api.herokuapp.com/api/ViewUser`
// export  const aprove_uri='https://rwanda-art-api.herokuapp.com/api/users/Aproval'
export const eventUrl='https://rwanda-art-api.herokuapp.com/api/events'

    
  const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcndhbmRhLWFydC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE2NjE2NTE3MTksImV4cCI6MTY2MTY1NTMxOSwibmJmIjoxNjYxNjUxNzE5LCJqdGkiOiI5S2c4WmFGOXllYlBVVWRIIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7ImlkIjoxLCJmZWRlcmF0aW9uX25hbWUiOiJSd2FuZGFBcnRDb3VuY2lsIiwicGhvbmVfbnVtYmVyIjoiMDc4NTQxOTc3MyIsImltYWdlIjoiam8uanBnIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ0aW5udW1iZXIiOjExMTExLCJmaWxlIjoia2tray5qcGciLCJudW1iZXJfb2ZfbWVtYmVycyI6MTIxLCJjYXRlZ29yeV9pZCI6bnVsbCwic3RhdHVzIjoiQXByb3ZlZCJ9fQ.YPtSbxiwGuWEFWDKzWmdsIX4MC_gx5mdtwShmsnZLMA'
  localStorage.setItem('token','Bearer ' +token) 
     
  const tok=localStorage.getItem('token');

export  function getTocken(){
    return  tok;
}


export  const convertDate=(data)=>{
  const date=new Date(data)
  return date.toLocaleString('en-us',{month:'short'}) + "-" +date.getFullYear()+ "-" +date.getDate()
}
export  const convertMonth=(data)=>{
  const date=new Date(data)
  return date.toLocaleString('en-us',{month:'long'})
}
