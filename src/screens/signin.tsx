import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/ui/theme-provider";




export function SignIn(){
     return (
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <main className="h-screen flex w-full bg">
                <div className="bg-foreground w-full h-full flex p-16 bg-zinc-200">
              
              </div>
              <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
                    <Card>
                         <CardHeader>
                              <CardTitle className="text-2xl font-bold tracking-tighter">
                                   Entre com a sua conta
                              </CardTitle>
                              <CardDescription>
                                   Utilize seu e-mail e senha ou sua conta Google para entrar.
                              </CardDescription>
                         </CardHeader>

                         <CardContent>
                              <div className="space-y-2">
                                   <Label htmlFor="email">E-mail</Label>
                                   <Input id="email" placeholder="exemplo@email.com" type="email"/>
                              </div>
                              <div className="mt-4 space-y-2">
                                   <Label htmlFor="password">Senha</Label>
                                   <Input id="password" placeholder="Sua senha secreta" type="password"/>
                              </div> 

                              <Button className="mt-6 w-full" >Entrar</Button>

                              <div className="flex items-center gap-3 mt-3">
                                   <Separator/>
                                   <span> OU</span>
                                   <Separator/>
                              </div>
                              <div className="space-y-2 flex gap-2">
                              <Button variant="outline" className="mt-3 w-full"  >Entrar com o Google</Button>
                              <ModeToggle></ModeToggle>
                              </div>
                              
                         </CardContent>
                    </Card>
               </section>
               </main>
          
               
          </ThemeProvider>
         

     )
    
}