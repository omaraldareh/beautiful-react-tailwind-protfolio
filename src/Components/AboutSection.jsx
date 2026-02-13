import { Briefcase, Code, User } from 'lucide-react'

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foreground"> 
                    I build modern and responsive web interfaces with a strong focus on clean design and usability
                    As a recent graduate, I’m highly motivated to grow, learn, and contribute to real-world projects.
                    </p>

                    <p className="text-muted-foreground">
                    I enjoy solving problems through code and turning ideas into practical, well-structured solutions.
                    I’m always learning and improving my skills by building projects and exploring modern front-end tools.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#context" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="/Omar_Aldarey_CV_New2026.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Code className='h-6 w-6 text-primary'/>
                            </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Web Development</h4>
                            <p className='text-muted-foreground'>
                                Creating responsive websites and web application with
                                modern frameworks.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <User className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Developer Profile</h4>
                            <p className='text-muted-foreground'>
                            Detail-oriented front-end developer focused on clean UI,
                            usability, and maintainable code.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Briefcase className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                           <h4 className='font-semibold text-lg'>Training & Projects</h4>
                            <p className='text-muted-foreground'>
                            Hands-on experience through academic projects and a 3-month
                            training program working on real-world scenarios.
                            </p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>        
    </section>
}