import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            تواصل معنا
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            نسعد بتواصلكم واستفساراتكم
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl">
              <div className="p-3 bg-secondary rounded-full">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">الهاتف</h3>
                <p className="text-foreground" dir="ltr">+966 50 123 4567</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl">
              <div className="p-3 bg-secondary rounded-full">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">الموقع</h3>
                <p className="text-foreground">جدة، السعودية</p>
                <p className="text-muted-foreground">حي البحيرات</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl">
              <div className="p-3 bg-secondary rounded-full">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">ساعات العمل</h3>
                <p className="text-foreground">السبت - الخميس: 12:00 ظهراً - 12:00 منتصف الليل</p>
                <p className="text-foreground">الجمعة: 1:00 ظهراً - 12:00 منتصف الليل</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-ocean-light rounded-2xl"
          >
            <div>
              <label className="block text-foreground font-semibold mb-2">
                الاسم
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="أدخل اسمك الكامل"
                className="bg-background"
              />
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">
                البريد الإلكتروني
              </label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
                className="bg-background"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">
                الرسالة
              </label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="اكتب رسالتك هنا..."
                className="bg-background min-h-32 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg gap-2 group"
            >
              إرسال الرسالة
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.5087249487556!2d39.177!3d21.543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMyJzM0LjgiTiAzOcKwMTAnMzcuMiJF!5e0!3m2!1sen!2ssa!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع نجمة السمك"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
