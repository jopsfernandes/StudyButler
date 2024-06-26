
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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {DatePicker} from "@/components/studybutlercomponents/datepicker"

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
    message: "O nome da matéria ter no mínimo 6 caracteres."
  }),
  dob: z.date(
    {required_error: "Uma data deve ser selecionada."}
  ),
})


  





export default function SubjectFormStudyButler() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {subject: "", dob: new Date()},

  
    
  })



  // 

  function onSubmit() {
    toast({
      title: "formulário enviado com sucesso!!",
     
    })
  }


    


  return (
   

  <Dialog>
      <DialogTrigger asChild>
        <Button className="transition ease-in-out hover:scale-110 duration-300 mt-4">Criar novo caderno</Button>
      </DialogTrigger>
      <DialogContent className='w-full'>
         <DialogHeader className='mb-3 select-none'>
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
              <FormLabel className='dark:text-zinc-200 select-none'>Matéria</FormLabel>
              <FormControl>
                <Input className="dark:text-zinc-200" placeholder="Matemática, Física..." {...field} />
              </FormControl>
             
              <FormMessage className=""/>
            </FormItem>
          )}
        />

        <FormField 
        control={form.control}
        name="dob"
        render={({field}) => (
          <FormItem className='w-2/3'>
            <FormLabel className='dark:text-zinc-200 select-none'>Data da prova</FormLabel>
            <FormControl>
                <DatePicker date={field.value} setDate={field.onChange} />
              </FormControl>
            <FormMessage className=""/>

          </FormItem>
        )}></FormField>

    
        
        
      
      <DialogFooter className='w-full flex justify-end'>
      <DialogClose className='' asChild><Button className="dark:text-zinc-200 transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300" variant={'outline'}>Cancelar</Button></DialogClose>
      <DialogClose className=''asChild><Button className="transition ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:ml-15 duration-300" type="submit">Criar caderno</Button></DialogClose>
      
      </DialogFooter>
      </form>
      </Form>
      </DialogContent>

      
    </Dialog>
   
  );
}
