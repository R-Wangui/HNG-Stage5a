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
                <form action=""className="grid w-full max-w-sm items-center gap-1.5">
                    <div>
                        <Label className="text-xs" htmlFor="email">Email</Label>
                        <Input className="text-base h-12" type="email" id="email" placeholder="e.g. alex@email.com" />
                    </div>
                    <div>
                        <Label className="text-xs" htmlFor="email">Password</Label>
                        <Input className="text-base h-12" type="password" id="password" placeholder="Enter your password" />
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <button></button>
            </CardFooter>
        </Card>
      
    );
  }