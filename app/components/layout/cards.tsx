import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../@/components/ui/card"
  import { Input } from "../../@/components/ui/input"
  import { Label } from "../../@/components/ui/label"



  type CardProps = React.ComponentProps<typeof Card>

  export default function Cards({ className, ...props }: CardProps) {
    return (
        <Card className=" grid w-full items-center gap-6">
            <CardContent>
            <form className="w-full mt-6 space-y-4 bg-background">
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">First name*</Label>
                        <Input 
                            type="text" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">Last name*</Label>
                        <Input 
                            type="text" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">Email</Label>
                        <Input 
                            type="email" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <button></button>
            </CardFooter>
        </Card>
      
    );
  }