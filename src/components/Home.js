import React from 'react';

import Header from './Header';
import GenderBanner from './GenderBanner'
import Categories from './Categories';
import Categories2 from './Categories2';
import Categories3 from './Categories3';
import Footer from './Footer';

function Home(){
    return(
        <div>
            <Header></Header>
            <GenderBanner></GenderBanner>
            <Categories></Categories>
            <Categories2></Categories2>
            <Categories3></Categories3>
            <Footer></Footer>
        </div>
    )

}


export default Home