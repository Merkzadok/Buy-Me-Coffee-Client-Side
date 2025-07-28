import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog"; 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

export const DonationProfile = () => {
  return (
    <div>
      <div className="p-6 border w-[632px] rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pinimg.com/1200x/43/f7/ee/43f7eefe75d8d3a236dacb312186dc7e.jpg"
              alt="profile zurag"
              className="w-12 h-12 rounded-full"
            />
            <p className="font-bold">Moloko</p>
          </div>

          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">Edit page</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </form>
          </Dialog>
        </div>

        <div className="border mt-6 mb-6"></div>

        <div className="flex flex-col gap-4">
            <h1 className="font-semibold">About Moloko</h1>
            <h2 className="font-normal">I’m a typical person who enjoys exploring different things. I also make music art as a hobby. Follow me along.</h2>
        </div>
      </div>
    </div>
  );
};
