import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [loginInput, setloginInput] = useState({ email: "", password: "" });
    const [SignUpInput, setSignUpInput] = useState({ name: "", email: "", password: "" });
    const changeInputHandler = (e ,type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignUpInput({ ...SignUpInput, [name]: value });
        }
        else {
            setloginInput({ ...loginInput, [name]: value });
        }
    }

    const handleRegistration  = (type) => {
        const inputData = type==="signup"? SignUpInput:loginInput;
        console.log(inputData);        
    }

    return (
        <div className="flex items-center w-full justify-center my-auto h-full">
            <Tabs defaultValue="signup" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            {/* <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription> */}
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    onChange={(e)=>changeInputHandler(e,"signup")}
                                    name="name"
                                    value={SignUpInput.name}
                                    id="name"
                                    placeholder="Name" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    onChange={(e)=>changeInputHandler(e,"signup")}
                                    name="email"
                                    value={SignUpInput.email}
                                    placeholder="@peduarte"

                                    required="ture" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    onChange={(e)=>changeInputHandler(e,"signup")}
                                    name="password"
                                    value={SignUpInput.password}
                                    placeholder="Strong Password"
                                    required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("signup")}>Sign Up</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                        <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    onChange={(e)=>changeInputHandler(e,"login")}
                                    name="email"
                                    value={loginInput.email}
                                    placeholder="@peduarte"
                                    required="ture" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    onChange={(e)=>changeInputHandler(e,"login")}
                                    name="password"
                                    value={loginInput.password}
                                    placeholder="Strong Password"
                                    required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("login")}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login