import { Link } from "react-router-dom";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Backpack,
  ScanText,
  Calendar,
  GraduationCap,
  LogOut
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavSidebar } from "@/components/study-butler-components/nav-sidebar.tsx";
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Dialog, DialogContent, DialogTrigger, DialogHeader,DialogTitle, DialogFooter, DialogDescription,DialogClose } from '../components/ui/dialog'
import { Label } from '@/components/ui/label';
export default function Pricing() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-300 ">
      <div className="hidden border-r dark:border-zinc-800 bg-muted md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b dark:border-zinc-800 px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-3 font-semibold">
              <GraduationCap className="h-6 w-6" />
              <span >StudyButler</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
     <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
       <Link to="/dashboard"  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary dark:hover:bg-zinc-800">
         <Home className="h-5 w-5" />
         Dashboard
       </Link>
       <Link to="/orders" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary dark:hover:bg-zinc-800">
         <Backpack className="h-5 w-5 " />
         Minha Mochila
         <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
           6
         </Badge>
       </Link>
       <Link to="/products" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-zinc-800">
         <ScanText className="h-5 w-5" />
         Extrair Questões {" "}
       </Link>
       <Link to="/customers" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary dark:hover:bg-zinc-800">
         <Calendar className="h-5 w-5" />
         Calendário de Revisões
       </Link>
       <Link
         to="/analytics"
         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary dark:hover:bg-zinc-800"
       >
         <LineChart className="h-5 w-5" />
         Progresso Acadêmico
       </Link>
     </nav>
   </div>
          
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b dark:border-zinc-800 bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col dark:text-zinc-300 dark:border-zinc-600">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="/orders"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  to="/products"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to="/customers"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to="/analytics"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Venha ser Premium</CardTitle>
                    <CardDescription>
                      Desbloqueie todo o seu potencial acadêmico com a nossa coletânea de funcionalidades exclusivas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Quero ser Premium
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className=" absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>

          <ModeToggle></ModeToggle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-zinc-900 dark:text-white" align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer dark:hover:bg-zinc-800"><Link to="/user-settings">Configurações</Link></DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer dark:hover:bg-zinc-800">Suporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer dark:hover:bg-zinc-800 gap-2">
              <LogOut className='h-4 w-4'></LogOut>
               Logout
             
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 dark:bg-zinc-950">
        <div className="container grid gap-8 px-4 md:px-6">
            <div className="grid gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing Plans</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that fits your needs and budget.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 grid gap-6">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span>1 user</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>5 GB storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Basic features</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button className="flex-1" variant="default">
                    Get Started
                  </Button>
                  
                </CardFooter>
              </Card>
              <Card className="p-6 grid gap-6">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$19</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span>5 users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>50 GB storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Advanced features</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button className="flex-1" variant="default">
                    Get Started
                  </Button>
                  
                </CardFooter>
              </Card>
              <Card className="p-6 grid gap-6">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$49</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span>Unlimited users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Unlimited storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Enterprise features</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button className="flex-1" variant="default">
                    Get Started
                  </Button>
                 
                </CardFooter>
              </Card>
            </div>
          </div>

        </main>
      </div>
    </div>
    </ThemeProvider>
    
  );
}
