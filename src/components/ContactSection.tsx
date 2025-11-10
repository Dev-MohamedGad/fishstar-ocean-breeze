import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, Instagram, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl text-foreground">
              <div className="p-3 bg-secondary rounded-full">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">الهاتف / واتساب</h3>
                <a 
                  href="https://wa.me/966539888843" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors flex items-center gap-2"
                  dir="ltr"
                >
                  +966 53 988 8843
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl text-foreground">
              <div className="p-3 bg-secondary rounded-full">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">الموقع</h3>
                <p className="text-foreground mb-2">الرياض حي المروج</p>
                <p className="text-muted-foreground mb-2">سوق الشمال للخضار والفاكهة</p>
                <a 
                  href="https://maps.app.goo.gl/c867FQrzkt32xa5s7?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1 text-sm"
                >
                  عرض على الخريطة
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl text-foreground">
              <div className="p-3 bg-secondary rounded-full">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">ساعات العمل</h3>
                <p className="text-foreground">8:00 صباحاً - 12:00 منتصف الليل</p>
                <p className="text-muted-foreground">طوال أيام الأسبوع</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 bg-ocean-light rounded-2xl text-foreground"
            >
              <h3 className="font-bold text-lg text-primary mb-4">تابعنا على وسائل التواصل</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/star_fish_sa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                  <span>إنستغرام</span>
                </a>
                <a
                  href="https://www.tiktok.com/@star_fish81?_r=1&_t=ZS-91GLIP0LwvQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span>تيك توك</span>
                </a>
                <a
                  href="https://snapchat.com/t/h7QpXPy0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-full hover:scale-105 transition-transform shadow-lg font-bold"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.031.003.005c.012.857.085 1.714.085 2.576 0 3.163-.108 6.275-1.305 8.729-1.24 2.543-3.218 4.438-5.93 4.438-2.713 0-4.69-1.895-5.93-4.438-1.197-2.454-1.305-5.566-1.305-8.729 0-.862.073-1.719.085-2.576l.003-.005v-.031c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793zm4.843 8.85c-.003-.82-.006-1.55.002-2.12.006-.46.01-.85.01-1.16 0-.31-.004-.7.01-1.16.008-.57.005-1.3.002-2.12-.99-2.3-3.393-2.59-4.073-2.59-.68 0-3.083.29-4.073 2.59-.003.82-.006 1.55.002 2.12.006.46.01.85.01 1.16 0 .31-.004.7-.01 1.16-.008.57-.005 1.3-.002 2.12.99 2.3 3.393 2.59 4.073 2.59.68 0 3.083-.29 4.073-2.59z"/>
                  </svg>
                  <span>سناب شات</span>
                </a>
                <a
                  href="https://wa.me/966539888843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>واتساب</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1!2d46.6543!3d24.7123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ0LjQiTiA0NsKwMzknMTUuNiJF!5e0!3m2!1sar!2ssa!4v1234567890!5m2!1sar!2ssa&q=الرياض+حي+المروج+سوق+الشمال+للخضار+والفاكهة"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع نجمة السمك - الرياض حي المروج"
          />
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/c867FQrzkt32xa5s7?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              فتح في Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
