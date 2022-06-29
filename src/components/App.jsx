import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App(){

    const newArray = notes.map(note => <Note title={note.title} content={note.content} />) 

    return <div>
            <Header />
            {newArray}
            <Note title="Mark Ringrose" content="This is Sparta!!" />
            <Footer />
            </div>
    
}

export default App;

