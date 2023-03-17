import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);
function App() { 
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <img src={AlexaImage} alt="Alexa logo"/>
            <img src={CortanaImage} alt="Cortana logo" />
            <img src={SiriImage} alt="Siri logo" />

            <ProfileCard title="Alexa" handle="@alexa99" />
            <ProfileCard title="Cortana" handle="@cortana32" />
            <ProfileCard title="Siri" handle="@siri01" />
        </div>
    );
}

export default App;