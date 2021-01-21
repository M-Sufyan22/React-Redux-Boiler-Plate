import Header from '../components/header';
import {AddNewUser} from '../store/action';
import {connect} from 'react-redux'

function Home(props){

    

    return(
        <>
        <Header/>
         <h1>Home</h1>
         <button onClick={()=>props.AddNewUser()}>Add New user</button>
         {props.allUsers.length ? 
         <ul>
             {
            props.allUsers.map((v,i) => 
                <li key={i}>{v.name}: <span> &nbsp;&nbsp; {v.country}</span></li>
           )
           }
        </ul>
            :<h3>Users Are Empty!</h3>
        }
        </>
    );
};




const mapStateToProps = (state)=>({
    allUsers: state.users,
    allProducts: state.products
});
  
const mapDispatchToProps = (dispatch)=>({
    AddNewUser: ()=> dispatch(AddNewUser())
});
  
export default connect(mapStateToProps,mapDispatchToProps)(Home);
