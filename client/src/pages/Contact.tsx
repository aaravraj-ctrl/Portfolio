import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "I'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl grid md:grid-cols-2 gap-12"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 glitch-text" data-text="LET'S TALK">
            LET'S TALK
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Have a project in mind or just want to vibe? Drop me a message. 
            I'm always open to new collaborations and rave partners.
          </p>
          
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: "#ff00ff" }}
                className="p-4 bg-white/5 rounded-full border border-white/10 hover:border-primary transition-colors text-white"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <Card className="bg-background/50 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-primary font-display">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Cyber Punk" {...field} className="bg-black/20 border-white/10 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="punk@city.com" {...field} className="bg-black/20 border-white/10 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Let's build something sick..." {...field} className="bg-black/20 border-white/10 focus:border-primary min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/80 font-bold uppercase tracking-wider box-glow">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
