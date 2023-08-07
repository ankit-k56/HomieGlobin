"use client"
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import  {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }
  
    ),
      email: z.string().email(),
      password: z.string()
  })

const SignupForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })

      const onSubmit = () =>{
        console.log("Hi")
      }



  return (
    <Form {...form}>
      
    <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className='space-y-2'>
      {/* <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="email" type='email' {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
         <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="password" type='password' {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <Button className='w-full mt-10 ' type="submit">Submit</Button>
    </form>
    <div className='w-full  justify-evenly py-3 flex items-center before:block before:mr-2 before:flex-grow before:bg-stone-400 before:h-px after:flex-grow after:bg-stone-400 after:ml-3 after:h-px'>or</div>
    <p>If you already have an acount<Link href='/signin'> <span className='text-blue-700 cursor-pointer hover:underline'>signin here</span></Link></p>
    
  </Form>
  )
}

export default SignupForm
