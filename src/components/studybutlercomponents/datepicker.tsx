
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps{
  date: Date | null;
  setDate: (date: Date | null) => void;
}



export const DatePicker: React.FC<DatePickerProps> = ({date, setDate}) =>{
  

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date ? "text-muted-foreground" : "dark:text-zinc-200 text-black"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 dark:text-zinc-200" />
          {date ? format(date, "dd/MM/yyyy") : <span className='dark:text-zinc-200'>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
