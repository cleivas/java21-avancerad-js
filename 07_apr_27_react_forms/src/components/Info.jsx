export default function Info({userInfo}){
    
    const {firstName, lastName, age} = userInfo;
    return(
        <>
            <h1>Hello, {firstName} {lastName}!</h1>
            <p>You're {age} years young.</p>
        </>
    )
}