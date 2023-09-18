import { ACCESS_TOKEN, BASE_URL } from "@/app/config";

export async function GET(){

  if (!BASE_URL){
    return new Response("Movie base URL not available",{
      status:404,
    });
  }
  if (!ACCESS_TOKEN){
    return new Response("Movie API token not available",{
      status:400,
  });
}

try{
  const request = await fetch(`${BASE_URL}/3/genre/movie/list`, {
    method: 'GET',
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ACCESS_TOKEN}`
    }
  });
  if(!request.ok){
    throw new Error (`request failed with status: ${request.status}`);
  }

  const responseJson = await request.json();
  return new Response(JSON.stringify(responseJson),{
    status:200,
    statusText: 'Success',
    headers:{
      'Content-Type': 'application/json',
    
    },
  });
  }
catch(error:any){
  return new Response(JSON.stringify({error:error.message}), {
    status:500,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
}






