import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <>
        <div className='header'>
        <Box component="span" m={1}
        display='flex' 
        flexDirection='row' 
        flexWrap='wrap'
        >
            <MenuIcon
              className='menuicon'
             />
            Google-keep clone
        </Box>
            
        </div>
        </>
    );
}

export default Header;