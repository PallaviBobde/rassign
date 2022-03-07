import { Button, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

const Addnote = (props) => {
    const [expand,setexpand] = useState(false)
    const [note,setNote] = useState({
        title:'',
        content:'',
    })

    const formsubmitted = (e) => {
        e.preventDefault();
        setNote({
            title:'',
            content:'',
        })
    }

    const inputEvent = (e) =>{
        var {name,value} = e.target;
        setNote((prevalue)=>{
            return ({...prevalue,
                [name]:value,})
            
        })
    }
	return (
		<>
			<Card className='addnotetab' onClick={()=>{
                setexpand(true)
            }}
            onDoubleClick={()=>{
                setexpand(false)
            }}
            >
				<form className='form' onSubmit={formsubmitted}>
					{
                        expand?
                  <input
                    className='inputtab' 
                    placeholder='Title'
                    value={note.title}
                    onChange={inputEvent}
                    name='title'
                    autoComplete='off'
                     />
                        :null
                    }
                    
                     
                         <textarea 
                            placeholder='Take a note...' 
                            rows='3'
                            value={note.content}
                            onChange={inputEvent}
                            name='content'
                            ></textarea>
                            

                     {expand?

<div className='btndiv addbtn'>
                            <Button 
                            type='submit'
                            onClick={()=>{props.addanote(note)}}
                            >
                                <AddIcon className='addicon' />
                            </Button> 
                            </div> 
					
                     : null
                     }
                            
                    
					
				</form>
			</Card>
		</>
	);
};

export default Addnote;
