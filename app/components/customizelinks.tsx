import Header from './common/header'
import { Button } from '../../@/components/ui/button';
import { Plus } from "lucide-react"
import Image from 'next/image';

const Customizelinks: React.FC = () => {
    return (
        <main>
            <Header />
            <div className="lg:flex lg:gap-6 lg:m-6">
                <div className="lg:w-[560px] lg:h-[834px] p-6">
                    <Image 
                        src="/images/phoneoutline.svg"
                        alt="phone outline"
                        width={307}
                        height={631}
                        // className="mt-[46.5px] "
                    />
                </div>
                <div className="mt-4 mx-4 h-[627px] lg:w-[808px]">
                    <p className="text-2xl font-bold mb-2">Customize your links</p>
                    <p className="text-base">Add/edit/remove links below and then share all your profiles with the world!</p>
                    <div className="mt-16 mx-8">
                        <Button className="border-primary rounded-lg block mt-10 mb-6 w-[311px] py-3 px-7 text-primary" variant="outline">
                            <Plus className="mr-1 h-4 w-4 self-center" />Add New Link
                        </Button>
                        <div className="bg-[#FAFAFA] text-center mt-6 grid col justify-center gap-6">
                            <Image 
                                src="/images/Addlink image.svg"
                                alt="linkshare logo"
                                width={124.77}
                                height={80}
                                className="mt-[46.5px] lg:w-[249.53px] h-[160px] "
                            />
                            <p className="text-2xl font-bold mb-2">Let's get you started</p>
                            <p className="text-base">
                            Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. 
                            We’re here to help you share your profiles with everyone!
                            </p>
                            <hr />
                            <Button className="rounded-lg block m-4 w-[311px] py-3 px-7 bg-secondary text-white lg:object-right-bottom lg:w-[91px] lg:h-[46px]">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    );
  }
  
  export default Customizelinks;