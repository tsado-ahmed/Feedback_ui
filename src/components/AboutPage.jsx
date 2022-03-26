import Card from "./shared/Card";
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h2>About This Application</h2>
            <p>This is a React Project to leave feedback for a  product or service</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back Home</Link>
            </p>
        </div>
  
    </Card>
  );
}

export default AboutPage;
