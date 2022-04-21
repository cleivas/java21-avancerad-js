function Welcome(props){
    props.text = 'ny text';
    
    return (
        <div>
            <Heading text={props.text}/>
            <Paragraph text={props.text.toLowerCase()}/>
        </div>
    )
}

function Heading(props){
    return <h1>Välkomna till {props.text}</h1>
}

function Paragraph(props){
    return <p>Det här är andra genomgången för {props.text}.</p>
}

export default Welcome;