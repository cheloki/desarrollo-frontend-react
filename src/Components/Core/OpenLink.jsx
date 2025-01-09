const OpenLink = ({redirectURL,LogoImage}) =>{


    return (
      
                <>
                            
                            <a href={redirectURL} target="_blank">
                                <img src={LogoImage} className="logo react" alt="React logo" />
                            </a>
                </>
        
    );
};

export default OpenLink; 