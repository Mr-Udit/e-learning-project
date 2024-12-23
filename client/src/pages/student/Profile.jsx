import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"


const Profile = () => {
  const isLoading = true;
  return (
    <div className="max-w-4xl px-4 mx-auto my-10">
      <h1 className="text-2xl font-bold text-center md:text-left">PROFILE</h1>
      <div className="flex flex-col items-center gap-8 my-5 md:flex-row md:items-start">
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24 md:w-32 md:h-32">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile image" style={{ borderRadius: "50%" }} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
              Name: <span className="ml-2 font-normal text-gray-900 dark:text-gray-300">Udit chauhan</span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
              Email: <span className="ml-2 font-normal text-gray-900 dark:text-gray-300">uditchauhan@gmail.com</span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
              Role: <span className="ml-2 font-normal text-gray-900 dark:text-gray-300">Mentor</span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="file" className="text-right">
                    Profile Image
                  </Label>
                  <Input id="file" type="file" accept="image/*" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isLoading}>
                  {
                    isLoading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin"/> Please Wait</> : "Save changes"
                  }
                  </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-medium">
          Courses you are enrolled in 
        </h1>
        <div className="grid grid-cols-1 my-5 md:grid-cols-3 sm:grid-cols-2">
          
        </div>
      </div>
    </div>
  )
}

export default Profile
