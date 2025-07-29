import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Coffee } from "lucide-react"
 
export const DonationBuyCoffeeCart = () => {
    return (
        <div className="p-6 border w-[632px] rounded-lg">
           <div className="flex flex-col gap-6">
             <h1 className="font-semibold">Buy Moloko a Coffee</h1>
 
             <div className="flex flex-col gap-2">
                <p className="font-medium">Select amount:</p>
                <div className="flex gap-3">
                    <Button variant="secondary"><Coffee/>$1</Button>
                    <Button variant="secondary"><Coffee/>$2</Button>
                    <Button variant="secondary"><Coffee/>$5</Button>
                    <Button variant="secondary"><Coffee/>$10</Button>
                </div>
             </div>
            </div>
 
            <div className="grid w-full max-w-sm items-center gap-2 pt-8">
                <Label htmlFor="text" className="font-medium">Enter BuyMeCoffee or social acount URL:</Label>
                <Input type="text" id="text" placeholder="buymeacoffee.com/" />
            </div>
 
             <div className="grid w-full max-w-sm items-center gap-2 pt-5">
                <Label htmlFor="text" className="font-medium">Special message:</Label>
                <Input type="text" id="text" placeholder="Please write your message here" className="w-full h-[131px]"/>
            </div>
 
        </div>
    )
}