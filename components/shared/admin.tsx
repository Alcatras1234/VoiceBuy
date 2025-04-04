import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent
} from "@/components/ui/tabs"

export const AuthAdmin = () => {
    return (
        <Tabs defaultValue="account" className="flex items-center justify-center h-screen">

            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                            Введите логин и пароль для входа в систему
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="login">Login</Label>
                            <Input id="login" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Log in</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}