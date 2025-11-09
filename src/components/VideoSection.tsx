import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";
import video5 from "@/assets/video-5.mp4";
import video7 from "@/assets/video-7.mp4";
import video8 from "@/assets/video-8.mp4";

type VideoItem = {
  id: number;
  src: string;
  title: string;
};

const videoItems: VideoItem[] = [
  { id: 1, src: video1, title: "فيديو المأكولات البحرية" },
  { id: 2, src: video2, title: "فيديو الطهي" },
  { id: 3, src: video3, title: "فيديو العرض" },
  { id: 4, src: video5, title: "فيديو المطبخ" },
  { id: 5, src: video7, title: "فيديو الطهي الاحترافي" },
  { id: 6, src: video8, title: "فيديو المأكولات البحرية" },
];

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleVideoClick = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach((v) => {
        if (v && v !== video) {
          v.pause();
        }
      });
      video.play();
      setPlayingVideo(id);
    }
  };

  return (
    <section id="videos" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            فيديوهات من مطبخنا
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            شاهد كيف نعد أشهى المأكولات البحرية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videoItems.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-xl bg-black aspect-video"
            >
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[video.id] = el;
                  } else {
                    delete videoRefs.current[video.id];
                  }
                }}
                src={video.src}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                onClick={() => handleVideoClick(video.id)}
              />
              
              {/* Play/Pause Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors cursor-pointer"
                onClick={() => handleVideoClick(video.id)}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                  {playingVideo === video.id ? (
                    <Pause className="w-8 h-8 text-primary" fill="currentColor" />
                  ) : (
                    <Play className="w-8 h-8 text-primary" fill="currentColor" />
                  )}
                </div>
              </div>

              {/* Video Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                <p className="text-white font-semibold text-lg text-center">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

