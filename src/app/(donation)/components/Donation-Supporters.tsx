import { Heart } from "lucide-react"

export const DonationSupporters = () => {
    return (
        <div>
            <div className="p-6 border w-[632px] rounded-lg">
                <h1 className="pb-3">Recent Supporters</h1>
                <div className="p-6  pt-9 border w-full rounded-lg flex flex-col justify-center items-center">
                    <Heart className="fill-black"/>
                    <p>Be the first one to support Moloko</p>
                </div>
            </div>
        </div>
    )
}