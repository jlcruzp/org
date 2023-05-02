import "./footer.css"

const Footer = ()=>{
return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png)"}}>
<div className="redes">
    <a href= "www.google.com">
        <img src="/img/facebook.png" alt="facebook"/>
    </a>
    <a href= "www.google.com">
        <img src="/img/twitter.png" alt="Twitter"/>
    </a>
    <a href= "www.google.com">
        <img src="/img/instagram.png" alt="Instagram"/>
    </a>

</div>
<img className="logo"src="/img/group.png" alt="Org"/>
<strong>Desarrollado por Juan Luis Cruz</strong>
</footer>
}

export default Footer