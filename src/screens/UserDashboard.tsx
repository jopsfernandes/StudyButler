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
import BusinessCase from '@/assets/briefcase-business-case-svgrepo-com.js';

export function UserDashboard() {
  return (
  
  
  
  <>
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

  
  </>
         
    
  );
}
