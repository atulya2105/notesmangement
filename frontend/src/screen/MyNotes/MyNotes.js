//import Button from '@restart/ui/esm/Button';
import  { useEffect,useState } from "react";
import React from 'react'
import { Card ,Button, Badge, Accordion} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from "../../component/MainScreen";
//import notes from "../../screen/data/notes";
import axios from "axios";

const MyNotes = () => {

    const [notes, setnotes] = useState([]);

    const deleteHandler = (id) => {
        if(window.confirm("Are you Sure?")){

        }
    };
    const fetchNotes = async() =>{
       
        const {data} = await axios.get("/api/notes");
        setnotes(data);
       // console.log(data)
      }; 
      //console.log(notes);
      useEffect(
        () => {
          //const subscription = props.source.subscribe();
         fetchNotes();
        },
        [],
      );
     return (
        <MainScreen title="Welcone back to Atulya...."> 
             <Link to="createnote">
                 <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
                     Create New Note
                 </Button>
             </Link>     
                 {
                     notes.map(note => (
                     <Accordion key={note._id}>
                     <Card style={{margin:10}}>
                     <Card.Header style={{display:"flex"}}>
                         <span
                           style={{
                               color:"black",
                               textDecoration:"none",
                               flex: 1,
                               cursor: "pointer",
                               alignSelf: "center",
                               fontSize: 18,
                           }}
                         >
                         {note.title}
                         </span>
                         <div>
                            <Button href={`/note/${note._id}`}>Edit</Button>
                            <Button variant="danger" className="mx-2" onClick={
                                () => deleteHandler(note._id)
                            }>Delete</Button>
                         </div>
                     </Card.Header>
                     <Accordion.Collapse>
                     <Card.Body>
                        <h4>
                            <Badge variant="success">
                                Category - {note.category}
                            </Badge>
                        </h4>
                     <blockquote className="blockquote mb-0">
                       <p>
                         
                         {note.content}
                       </p>
                       <footer className="blockquote-footer">
                          Created on date xx/xx/xxxx.
                       </footer>
                     </blockquote>
                     </Card.Body>
                    </Accordion.Collapse>
                 </Card>
                          
                     </Accordion>   
                         
                        

                 
                     ))
                 }

                 
             
        </MainScreen>
    )
}

export default MyNotes;
