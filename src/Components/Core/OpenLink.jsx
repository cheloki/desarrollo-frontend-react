const OpenLink = ({redirectURL,LogoImage}) =>{


    return (
      
                <div>
                            
                            <a href={redirectURL} target="_blank">
                                <img src={LogoImage} className="logo react" alt="React logo" />
                            </a>
                </div>
        
    );
};

export default OpenLink;