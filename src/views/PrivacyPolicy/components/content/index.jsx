import {PrivacySideArray} from "../../../../utils/privacySideArray"

export const Content = () =>{
    return (
        <div className="space-y-10 pb-60 mt-10 text-[#4A5050] dm-sans">
            <p>This privacy policy (“Policy”) applies to all personal information collected, used, or disclosed by Orbit Finance (“Orbit Finance”, “we”, “us”, “our”) in the course of its business activities. It applies to all individuals who interact with us, including customers, website visitors, job applicants, and other third parties. This policy covers all forms of personal information, including but not limited to, name, address, email address, phone number, financial information, employment history, and any other information that may be used to identify an individual. We are committed to protecting the privacy and confidentiality of personal information that we collect and process. We collect personal information only for the purposes identified in this policy or as required by law. We do not sell or rent personal information to third parties. This policy outlines the types of personal information we collect, how we use and disclose that information, how we protect it, and how individuals can exercise their privacy rights.</p>
            {PrivacySideArray.map(item=>{
                return (
                    <section id={item.title}>
                        <h2 className="uppercase text-2xl text-[#2D2D2D] font-clash-medium">{item.title}</h2>
                        {item.listItems.map(i=>{
                            if(typeof(i) === 'string'){
                                return <p className="">{i}</p>
                            }
                            else if(typeof(i) === 'object' && i.listStyle === "organised"){
                                return <ol className="list-decimal list-inside">
                                    {i.listItems.map(list=>{
                                        return <li>{list}</li>
                                    })}
                                </ol>
                            }
                            else return <ul className="list-disc list-inside">
                                {i.listItems.map(list=>{
                                        return <li>{list}</li>
                                })}
                            </ul>
                        })}
                    </section>
                )
            })}
        </div>
    )
}