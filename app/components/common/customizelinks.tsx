import Header from './header'
import { Button } from '../../../@/components/ui/button';
import { Plus } from "lucide-react"
import Image from 'next/image';

const Customizelinks: React.FC = () => {
    return (
        <main>
            <div className="bg-[#FFFFFF] lg:flex lg:gap-6 lg:m-6">
                <div className="hidden lg:w-[560px] lg:h-[834px] p-6">
                    <Image 
                        src="/images/phoneoutline.svg"
                        alt="phone outline"
                        width={307}
                        height={631}
                        // className="mt-[46.5px] "
                    />
                </div>
                <div className="mt-4 mx-4 h-[627px] lg:w-[808px]">
                    <p className="text-2xl font-bold text-center mt-6 mb-2">Customize your links</p>
                    <p className="text-base text-center">Add/edit/remove links below and then share all your profiles with the world!</p>
                    <div className="mt-10 mx-8">
                        <Button className="border border-primary rounded-lg mt-10 mb-6 w-[295px] h-[46p] py-3 px-7 text-primary lg:w-full" variant="outline">
                            <Plus className="mr-1 h-4 w-4 self-center inline" />Add New Link
                        </Button>
                        <div className="bg-[#FAFAFA] text-center mt-6 flex flex-col items-center gap-6 px-5">
                            <Image 
                                src="/images/Addlink image.svg"
                                alt="linkshare logo"
                                width={124.77}
                                height={80}
                                className="inline mt-[46.5px] lg:w-[249.53px] h-[160px] "
                            />
                            <p className="text-2xl font-bold mb-2">Let's get you started</p>
                            <p className="text-base">
                            Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. 
                            We’re here to help you share your profiles with everyone!
                            </p>
                            
                        </div>
                    </div>
                </div>
                <hr />
                <Button 
                    className="rounded-lg block m-4 w-[311px] py-3 px-7 bg-secondary text-white lg:object-right-bottom lg:w-[91px] lg:h-[46px]"
                    >Save
                </Button>
            </div>
        </main>
    );
  }
  
  export default Customizelinks;