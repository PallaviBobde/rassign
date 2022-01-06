
import IDCard from './IDcard';

const Listbox =(props)=>{
    const handlingclick = (data)=>{
        props.setbigcard(data);
    }
    return (
        <>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {
                props.people.map((user)=>{
                    return (<IDCard 
                                key={user.email} 
                                name={user.name} 
                                gender={user.gender}
                                nat={user.nat}
                                email={user.email}
                                handleClick={handlingclick}
                            />)
                })
            }
        </div>
        </>
    );
}

export default Listbox;