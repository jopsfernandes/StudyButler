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
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ThemeProvider } from '@/components/ui/theme-provider';
import SubjectFormStudyButler from '@/components/studybutlercomponents/SubjectFormStudyButler.tsx'
import { Toaster } from '@/components/ui/toaster';
import BusinessCase from '@/assets/briefcase-business-case-svgrepo-com';

export function UserDashboard() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-primary dark:bg-zinc-900 dark:text-zinc-300 ">
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
       <Link to="/dashboard"  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary dark:hover:bg-zinc-700">
         <Home className="h-5 w-5" />
         Dashboard
       </Link>
       <Link to="/user-dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-primary dark:hover:bg-zinc-700 dark:bg-zinc-800">
         <Backpack className="h-5 w-5 " />
         Minha Mochila
         <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
           6
         </Badge>
       </Link>
       <Link to="/user-question-extractor" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-zinc-800">
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
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Mude para o StudyButler PRO</CardTitle>
                <CardDescription>
                  Desbloqueie todo o seu potencial acadêmico
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Link to="/pricing">
                <Button size="sm" className="w-full transition ease-in-out hover:-translate-y-0.5 hover:scale-105 duration-300 ">
                  Assinar
                </Button>
                </Link>
              
              </CardContent>
            </Card>
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
                
                <Input
                  type="search"
                  placeholder="Procurar na mochila..."
                  className="w-full appearance-none bg-background  shadow-none md:w-3/4 lg:w-1/4"
                />
                <Search className="absolute left-40 top-3 h-4 w-4 text-muted-foreground" />
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
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 dark:bg-zinc-900">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Cadernos</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed dark:border-zinc-900 shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
                <BusinessCase className="mb-5"></BusinessCase>


              <h3 className="text-2xl font-bold tracking-tight">
                Você ainda não tem nenhum caderno em sua Mochila
              </h3>
              <p className="text-sm text-muted-foreground">
                Aperte no botão para criar um agora mesmo!!!
              </p>
              <SubjectFormStudyButler/> 
              

            </div>
          </div>
          <Toaster/>
        </main>

      
      </div>
    </div>
    </ThemeProvider>
    
  );
}
