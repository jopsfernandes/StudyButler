import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  subject: z.string().min(6, {
    message: "O nome da matéria ter no mínimo 6 caracteres.",
  }),
})
 

export default function SubjectFormStudyButler() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      subject: "",
    },
  })

  // 

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  return (
   

  <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4">Criar novo caderno</Button>
      </DialogTrigger>
      <DialogContent className='w-full'>
         <DialogHeader className='mb-3'>
          <DialogTitle className='dark:text-zinc-300'>Criação de caderno</DialogTitle>
          <DialogDescription>preencha os campos para criar seu caderno.</DialogDescription>
        </DialogHeader>
         <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">


        <FormField 
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className='w-2/3'>
              <FormLabel className='dark:text-zinc-200 '>Matéria</FormLabel>
              <FormControl>
                <Input className="dark:text-zinc-200" placeholder="Matemática, Física..." {...field} />
              </FormControl>
             
              <FormMessage className=""/>
            </FormItem>
          )}
        />

    
        
        
      
      <DialogFooter className='w-full flex justify-end'>
      <DialogClose className='' asChild><Button className="dark:text-zinc-200" variant={'outline'}>Cancelar</Button></DialogClose>
      <DialogClose className=''asChild><Button type="submit">Criar caderno</Button></DialogClose>
      
      </DialogFooter>
      </form>
      </Form>
      </DialogContent>

      
    </Dialog>
   
  );
}
