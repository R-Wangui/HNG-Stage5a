import Image from 'next/image';
import Authheaders from './common/authheaders'

const Customizelinks: React.FC = () => {
    return (
        <main>
            <Authheaders />
            <div className="mt-8 ml-8">
                <p>Customize your links</p>
                <p>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>
            <div className="mt-16 mx-8">
            </div>
        </main>
    );
  }
  
  export default Customizelinks;