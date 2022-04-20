import Dog from "./Dog";
import Likes from "./Likes";
import ProfilePic from "./ProfilePic";

function DogUser({dUser}){
    console.log('Destructured props in DogUser', dUser);
    const {name, age, likes, url} = dUser;
    
    return (
        <div className='border'>
            <Dog name={name} age={age}/>
            <Likes likes={likes}/>
            <ProfilePic url={url} />
        </div>
    )
}
export default DogUser;