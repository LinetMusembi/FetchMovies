

'use client';

import NavigationBar from "./Navbar/page";


import GenreList from "./genres/page";

export default function Home() {


  return (
    <main className="bg-black">
     <NavigationBar/>
      
      <GenreList/>
    
     

    </main>
  );
}

