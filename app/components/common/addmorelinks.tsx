import React from 'react'
import { Button } from '../../../@/components/ui/button';
import { Label } from '../../../@/components/ui/label';
import { Input } from '../../../@/components/ui/input';
import { Plus } from "lucide-react"
import Image from 'next/image';
// import { Select } from '../../@/components/ui/select';
import { Selectdropdown } from '../layout/selectdropdown';

const addmorelinks: React.FC = () => {
  return (
    <main>
        <div className="bg-[#FFFFFF] lg:bg-[#FAFAFA] lg:flex lg:gap-6 lg:m-6">
                <div className="hidden lg:bg-[#FFFFFF] lg:w-[560px] lg:h-[834px] p-6">
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
                        <div className="bg-[#FAFAFA] mt-6 flex flex-col items-center gap-6 p-5 rounded-2xl">
                            <div className="flex text-base text-[#737373]" >
                                <div className="flex gap-2 mr-[120]">
                                    <Image 
                                    src="/images/link1-icon.svg"
                                    alt="phone outline"
                                    width={12}
                                    height={6}
                                    // className="mt-[46.5px] "
                                    />
                                    <p className="font-bold">Link#1</p>
                                </div>
                                <p className="">Remove</p>
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-sm text-foreground">Platform</Label>
                                <Selectdropdown 
                                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-sm text-foreground">Link</Label>
                                <Input
                                type="link"
                                placeholder="e.g. https://www.github.com/johnappleseed"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <Button 
                            className="rounded-lg block m-4 w-[311px] py-3 px-7 bg-primary text-white lg:object-right-bottom lg:w-[91px] lg:h-[46px]"
                            >Save
                        </Button>
                    </div>
                </div>
                {/* <hr />
                <Button 
                    className="rounded-lg block m-4 w-[311px] py-3 px-7 bg-primary text-white lg:hidden lg:object-right-bottom lg:w-[91px] lg:h-[46px]"
                    >Save
                </Button> */}
        </div>
    </main>
  )
}

export default addmorelinks