import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";

export const DonationProfile = () => {
  return (
    <div>
      <div>
        <div></div>
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
    </div>
  );
};
