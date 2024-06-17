import { Link } from "react-router-dom";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Backpack,
  ScanText,
  Calendar,
  GraduationCap,
  LogOut,
  Check,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ThemeProvider } from '@/components/ui/theme-provider';
export default function Pricing() {
  return (
        <>
        <div className="container grid gap-8 px-4 md:px-6">
            <div className="grid gap-4 text-center justify-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Planos que cabem no seu bolso!</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Temos os melhores planos para atender todas as suas necessidades!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 grid gap-6">
                <CardHeader>
                  <CardTitle>Estudantes</CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Check/>
                    <span>Extração de questões</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <Check/>
                    <span>Revisões Estratégicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <Check/>
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
                  <CardTitle>Professores</CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$19</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                  <Check/>
                    <span>Extração de questões</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <Check/>
                    <span>Gerenciar Revisões da sua matéria para alunos</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <Check/>
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
                  <CardTitle>Instituições</CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$49</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                  <Check/>
                    <span>Unlimited users</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <Check/>
                    <span>Unlimited storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <Check/>
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

          </>
    
  );
}
