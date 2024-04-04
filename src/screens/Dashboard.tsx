import { Button } from '../components/ui/button'
import '../global.css'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogFooter } from '../components/ui/dialog'
import { Search, PlusCircle, CircleCheck } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { DialogClose, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { ThemeProvider } from '../components/ui/theme-provider'




export function Dashboard() {


  return (

    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme' >
      <div className='h-screen w-screen dark:bg-zinc-900'>
        <div className='p-6 max-w-4xl mx-auto space-y-4 dark:bg-zinc-900'>

          <div className='flex items-center justify-between'>
            <form className='flex items-center gap-2'>

              <Input name='id' placeholder='Nome da Matéria' className='w-auto dark:text-white'></Input>

              <Button type='submit' variant='secondary'>
                <Search className='w-4 h-4 mr-3'></Search>
                Procurar matéria
              </Button>

            </form>


            <Dialog>
              <DialogTrigger>
                <Button className='dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600'>
                  <PlusCircle className='w-4 h-4 mr-3'></PlusCircle>
                  Nova Matéria
                </Button>
              </DialogTrigger>

              <DialogContent className='dark:text-white'>
                <DialogHeader>
                  <DialogTitle><h1>Nova matéria</h1></DialogTitle>
                  <DialogDescription>Criar uma nova matéria no sistema</DialogDescription>
                </DialogHeader >

                <form action='' className='space-y-6'>
                  <div className=' grid grid-cols-4 items-center text-left gap-2'>
                    <Label htmlFor='name'>Matéria </Label>
                    <Input id='name' className='col-span-3'></Input>

                  </div>
                  <div className=' grid grid-cols-4 items-center text-left gap-2'>
                    <Label htmlFor='name'>Situação </Label>
                    <Input id='name' className='col-span-3'></Input>

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
          <div className='border rounded-lg p-2'>
            <Table>
              <TableHeader>
                <TableHead>Matérias</TableHead>

                <TableHead>Situação</TableHead>

              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return (
                    <TableRow className='dark:text-white' key={i}>

                      <TableCell>Matéria {i}</TableCell>
                      <TableCell className='whitespace-normal'>  <CircleCheck color='green' strokeWidth={3} className='w-6 h-6 mr-5 ml-4' /> </TableCell>

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


