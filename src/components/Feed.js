import React, {useState, useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
// import FlipMove from 'react-flip-move'
import './feed.css'
import InputOptions from './InputOptions';
import Posts from './Posts';
import {db} from '../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Feed = () => {
    const [input, setInput]= useState('');
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser);
    

     useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data: doc.data()
                      
                }
            )))
        ))
     },[])

     const sendPost = (e)=> {
         e.preventDefault();
         db.collection('posts').add(({
             name: user.displayName, 
             description:user.email,
             message: input,
             photoUrl:user.photoUrl || '', 
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),

         }))
         setInput("");
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e=> setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions title='Photo' Icon={ImageIcon} color='#70B5F9' />
                    <InputOptions title='Video' Icon={SubscriptionsIcon} color='#EFA33E' />
                    <InputOptions title='Event' Icon={EventNoteIcon} color='#C0CBCD' />
                    <InputOptions title='Write article' Icon={CalendarViewDayIcon} color='#7FC15E' />
                </div>
            </div>

            {/* Posts */}
           

            {posts.map(({id,data:{name, description, message, photoUrl}})=>(
                 <Posts
                 key={id}
                 name= {name} description={description} message={message} photoUrl={photoUrl}
                 />
                 ))}
          
            
        </div>
    )
}

export default Feed


