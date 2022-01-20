function JoinUs(){
    return(
        <button className="joinus">JOIN US</button>
    )
}

function Settings(){
    return(
        <button>SETTINGS</button>
    )
}

function Login(){
    return(
        <button>LOGIN</button>
    )
}

function Search(){
    return(
        <button>SEARCH</button>
    )
}

function ContactUs(){
    return(
        <button>CONTACT US</button>
    )
}

function Help(){
    return(
        <button>HELP</button>
    )
}

function Home(){
    return(
        <button>HOME</button>
    )
}

function Download(){
    return(
        <button>DOWNLOAD</button>
    )
}

function Button({name}){
    return(
        <button>{name}</button>
    )
}

export {JoinUs, Settings, ContactUs, Login, Search, Help,Download,Home,Button}