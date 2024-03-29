import { Divider, Input, Snippet, Textarea } from '@nextui-org/react'
import { Helmet } from 'react-helmet-async'

export default function ContactPage() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>

            <Helmet>
                <title>Get in touch</title>
            </Helmet>

            <h1 className='lg:text-left text-center'>E-mail me @ <Snippet variant="bordered" symbol="">aymen.khedhriya@gmail.com</Snippet></h1>

            <Divider className="my-4" />

            <form
                name="aymkh-clients-submissions"
                method="POST"
                className='lg:max-w-[500px] w-4/5'
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="aymkh-clients-submissions" />
                <Input
                    type="text"
                    label="Name"
                    placeholder="Jhon Doe"
                    description="How should I refer to you or your business?"
                    className="w-full"
                    name="client-name"
                />

                <Textarea
                    variant="faded"
                    label="Description"
                    placeholder="I have a business opportunity that I would like to discuss with you..."
                    description="Tell me how I can be of help to you."
                    className="w-full my-4"
                    name='client-message'
                />
                <input className='w-full' type="submit" value="Submit message" />
            </form >
        </div >
    )
}
