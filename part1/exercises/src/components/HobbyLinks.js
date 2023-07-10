export default function HobbyLinks(){
    const hobbyLinks=["https://www.thesprucecrafts.com/needlepoint-4162911", "https://www.aseprite.org/"]
    return(
        <div>
            <p><a href= {hobbyLinks[0]}> cross stitch</a></p>            
            <a href= {hobbyLinks[1]}> sprite art</a>
        </div>
    );
};

