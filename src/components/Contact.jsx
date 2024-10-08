import Footer from './Footer'
import ContactForm from './ContactForm'
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
    {
        icon: "HiChatBubbleLeftRight",
        heading: "Chat on us",
        description: "Our friendly team is here to help.",
        details: "info@jobpro.com",
    },
    {
        icon: "BiWorld",
        heading: "Visit us",
        description: "Come and say hello at our office HQ.",
        details:
        "Jalpaiguri, West Bengal-735101",
    },
    {
        icon: "IoCall",
        heading: "Call us",
        description: "Mon - Fri From 8am to 5pm",
        details: "+123 456 7869",
    },
]

const Contact = () => {
  return (
    <div>
        <div className='flex gap-10 justify-center  my-20 mx-auto'>
            <div className='flex h-fit lg:w-1/4 flex-col gap-6 rounded-xl p-4 lg:p-6 border border-gray-400'>
            {contactDetails.map((ele, i) => {
                let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
                return (
                <div
                    className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
                    key={i}
                >
                    <div className="flex flex-row items-center gap-3">
                    <Icon size={25} />
                    <h1 className="text-lg font-semibold text-richblack-5">
                        {ele?.heading}
                    </h1>
                    </div>
                    <p className="font-medium">{ele?.description}</p>
                    <p className="font-semibold">{ele?.details}</p>
                </div>
                )
            })}
            </div>
            <div className='w-1/2'>
                <ContactForm />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact