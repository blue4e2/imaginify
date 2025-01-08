"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../ui/form"
import { defaultValues } from "@/constants"
import { CustomField } from "./CustomField"

export const formSchema = z.object({
    title: z.string(),
    aspectRatio: z.string().optional(),
    color: z.string().optional(),
    prompt: z.string().optional(),
    publicId: z.string()
})

const TransformationFrom = ({ action, data = null }: TransformationFormProps) => {
    const initialValues = data && action === "Update" ? {
        title: data?.title,
        aspectRatio: data?.aspectRatio,
        color: data?.color,
        prompt: data?.prompt,
        publicId: data?.publicId
    } : defaultValues

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    })

    function onSubmit(){

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <CustomField
                    control={form.control}
                    name="title"
                    formLabel="Image Title"
                    className="w-full"
                    render={({ field }) => <Input {...field} className="input-field"/>}
                />
            </form>
        </Form>
    )
}

export default TransformationFrom