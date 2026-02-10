'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface AccordionContextType { value: string | null; onValueChange: (v: string) => void }
const AccordionContext = React.createContext<AccordionContextType>({ value: null, onValueChange: () => {} })

export function Accordion({ type, collapsible, className, children, ...props }: { type?: string; collapsible?: boolean; className?: string; children: React.ReactNode }) {
  const [value, setValue] = React.useState<string | null>(null)
  const onValueChange = (v: string) => setValue(prev => collapsible && prev === v ? null : v)
  return <AccordionContext.Provider value={{ value, onValueChange }}><div className={cn('w-full', className)} {...props}>{children}</div></AccordionContext.Provider>
}

export function AccordionItem({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  return <div className={cn('border-b', className)} data-value={value}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { _value: value }) : child)}</div>
}

export function AccordionTrigger({ children, className, _value, ...props }: any) {
  const { value, onValueChange } = React.useContext(AccordionContext)
  const isOpen = value === _value
  return <button className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left', className)} onClick={() => onValueChange(_value)} {...props}>{children}<ChevronDown className={cn('h-4 w-4 shrink-0 transition-transform duration-200', isOpen && 'rotate-180')} /></button>
}

export function AccordionContent({ children, className, _value, ...props }: any) {
  const { value } = React.useContext(AccordionContext)
  if (value !== _value) return null
  return <div className={cn('overflow-hidden text-sm pb-4 pt-0', className)} {...props}>{children}</div>
}
