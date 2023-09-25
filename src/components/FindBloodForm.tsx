"use client"
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Button } from './ui/button'
import { Input } from './ui/input'
import  {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { GoogleMap,useLoadScript,Marker, Autocomplete } from '@react-google-maps/api'

const FindBloodForm = () => {
    const formSchema = z.object({
        location:z.any(),
        blood_group: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          location: "",
        },
      })
      const onSubmit = () =>{
        console.log("Hi")
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
    <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
           

                <Input placeholder="Select a location" type='text' {...field} />
              
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="blood_group"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Blood Group</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select the blood group you want to find" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="O">O</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Find Blood</Button>
    </form>
  </Form>
  )
}

export default FindBloodForm
