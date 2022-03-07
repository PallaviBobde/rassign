
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Delete } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Note = (props) => {
    return (
        <>
					<Card className='note'>
						<Typography variant='subtitle1' component='h2' className='notetitle'>
							{props.title}
						</Typography>
						<Typography variant='body2' component='h2'>
						{props.content}
						</Typography>
						<div className='btndiv delicondiv' onClick={()=>{props.deletenote(props.id)}}>
							<Button>
							<Delete 
							className='delicon'
							 />
							</Button>
						</div>
						
					</Card>
        </>
    );
}

export default Note;