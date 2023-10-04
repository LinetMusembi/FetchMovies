

'use client';

import NavigationBar from "./Navbar/page";
import SliderCarousel from "./ SliderCarousel/page";
import Footer from "./Footer"


import GenreList from "./genres/page";

export default function Home() {

  return (
    <main className="bg-orange">
      <NavigationBar />
      <GenreList />
      <SliderCarousel/>
      <Footer/>
    </main>
  );
  
}

