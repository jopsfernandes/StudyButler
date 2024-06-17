import { Button } from '../components/ui/button'
import '../global.css'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogFooter } from '../components/ui/dialog'
import { Search, PlusCircle, CircleCheck } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { DialogClose, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { ThemeProvider } from '../components/ui/theme-provider'
import { SelectContent, SelectTrigger, Select, SelectValue, SelectItem } from '@/components/ui/select'
import classNames from "classnames"
import { Progress } from '@/components/ui/progress'


export function Dashboard() {


  return (

    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme' >
      <div className=' dark:bg-zinc-900'>
        <div className='p-1 max-w-3xl mx-auto space-y-4 dark:bg-zinc-900'>

          <div className='flex items-center justify-between'>
            <form className='flex items-center gap-2'>

              <Input name='id' placeholder='Nome do Tópico' className='w-auto dark:text-white'></Input>

              <Button type='submit' variant='secondary'>
                <Search className='w-4 h-4 mr-3'></Search>
                Procurar Tópico
              </Button>

            </form>


            <Dialog>
              <DialogTrigger>
                <Button className='dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600'>
                  Novo Tópico
                  <PlusCircle className='w-4 h-4 m-3'></PlusCircle>
                </Button>
              </DialogTrigger>

              <DialogContent className='dark:text-white'>
                <DialogHeader>
                  <DialogTitle><h1>Novo Tópico</h1></DialogTitle>
                  <DialogDescription>Crie um novo tópico para esta Matéria.</DialogDescription>
                </DialogHeader >

                <form action='' className='space-y-6'>
                  <div className=' grid grid-cols-4 items-center text-center gap-2'>
                    <Label htmlFor='name'>Nome do Tópico </Label>
                    <Input id='name' className='col-span-3'></Input>

                  </div>
                  <div className=' grid grid-cols-4 items-center text-center gap-2'>
                    <Label htmlFor='difficulty'>Dificuldade </Label>
                    <Select>
                      <SelectTrigger id="framework" className='col-span-3'>
                      <SelectValue placeholder="Escolha a dificuldade deste tópico..." />
                    </SelectTrigger>
                      <SelectContent position="popper">
                      <SelectItem value="next"> Fácil </SelectItem>
                      <SelectItem value="sveltekit">Médio</SelectItem>
                      <SelectItem value="astro">Desafiador</SelectItem>
                    </SelectContent>
                  </Select>

                  </div>
                  <DialogFooter>

                    <DialogClose asChild>
                      <Button type='button' variant='outline'> Cancelar </Button>
                    </DialogClose>

                    <Button type='submit' > Salvar</Button>
                  </DialogFooter>
                </form>

              </DialogContent>

            </Dialog>

          </div>
          <div className='border dark:border-zinc-800 rounded-lg'>
            <Table>
              <TableHeader className='select-none'>
                <TableHead>Tópicos</TableHead>

                <TableHead>Dificuldade</TableHead>

                <TableHead>Progresso</TableHead>

              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                   const rowClasses = classNames('dark:text-zinc-200 border-none select-none', {
                    'dark:bg-zinc-950': i % 2 === 0
                  }, {'bg-zinc-100': i % 2 === 0});

                  return (
                    <TableRow className={rowClasses}
                    key={i}>

                      <TableCell>Tópico {i}</TableCell>
                      <TableCell className=''><CircleCheck color='#059669' strokeWidth={3} className='w-6 h-6 mr-5 ml-4' /> </TableCell>
                      <TableCell><Progress value={40}/> </TableCell>
                    </TableRow>
                  )
                })}

              </TableBody>
            </Table>

          </div>
        </div>
      </div>

    </ThemeProvider>



  )
}


