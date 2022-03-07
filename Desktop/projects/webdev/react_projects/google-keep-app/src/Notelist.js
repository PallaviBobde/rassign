import Note from "./Note";
import { Box } from "@material-ui/core";

const Notelist = (props) => {
	const fordelnote = (id) =>{
		props.letsdeletenote(id)
	}
	return (
		<>
		<Box 
			display='flex' 
			flexDirection='row' 
			flexWrap='wrap'
			justifyContent='center'
			 >
				 {props.noteList.map((item,index)=>{
					 return (<Note 
						key={index}
						id={index}
						title={item.title}
						content={item.content}
						deletenote={fordelnote}
					 />)
				 })}
				
				
			</Box>
			
		</>
	);
};

export default Notelist;
