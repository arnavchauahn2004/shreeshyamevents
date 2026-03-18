import { useState, useEffect, useRef } from 'react';
import { X, Play } from 'lucide-react';
import { supabase } from '../lib/supabase';

const defaultGalleryImages = [
  {
    url: "/elegant wedding.jpg",
    title: 'Elegant Wedding Setup',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/grand_wedding.jpg',
    title: 'Grand Wedding Ceremony',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/beautiful-decor.jpg',
    title: 'Beautiful Decoration',
    category: 'Decoration',
    type: "photo"
  },
  {
    url: '/entrance3.jpg',
    title: 'Entrance Decoration',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/Entrance.jpg',
    title: 'Floral Entrance',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/haldi.jpg',
    title: 'Haldi Decoration',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/mehndi.jpg',
    title: 'Mehendi Decoration',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/mandap.jpg',
    title: 'Mandap Decoration',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/wedding-reception.jpg',
    title: 'Wedding Reception',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/elegant-stage-decor2.jpg',
    title: 'Elegant Stage Setup',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Corporate Event',
    category: 'Corporate',
    type: "photo"
  },
  {
    url: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Birthday Celebration',
    category: 'Birthday',
    type: "photo"
  },
  {
    url: '/outdoor-wedding.jpg',
    title: 'Outdoor Wedding',
    category: 'Wedding',
    type: "photo"
  },
  {
    url: '/catering-spread.jpg',
    title: 'Catering Spread',
    category: 'Catering',
    type: "photo"
  },
  {
    url: '/special-occasions.jpg',
    title: 'Special Occasion',
    category: 'Party',
    type: "photo"
  },
  {
    url: "/stage-firework.mp4",
    title: "Stage Decor & Fireworks",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/Stage-decor.mp4",
    title: "Stage & Reception Decor",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/Bride-entry.mp4",
    title: "Bride Entry Setup",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/Bride-entry2.mp4",
    title: "Bride Entry Setup",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/entrance-decor.mp4",
    title: "Entrance & Reception Decor",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/entrance-color.mp4",
    title: "Simple & Elegant Entrance",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/fireworks.mp4",
    title: "Fireworks",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/Jaimala.mp4",
    title: "Jaimala Arrangements",
    category: "Wedding",
    type: "video"
  },
  {
    url: "/Dance-&-acts.mp4",
    title: "Dance & Acts",
    category: "Wedding",
    type: "video"
  },
];
interface GalleryItem {
  url: string
  title: string
  category: string
  type: "photo" | "video"
}
export default function Gallery() {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
  const [videoDurations, setVideoDurations] = useState<{[key:number]:string}>({});
  const [dbGalleryImages, setDbGalleryImages] = useState<GalleryItem[]>([]);
  const [showAllPhotos,setShowAllPhotos] = useState(false);
  const [showAllVideos,setShowAllVideos] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const galleryImages = [...dbGalleryImages, ...defaultGalleryImages];

  const filteredGallery = galleryImages.filter(
  (item) => item.type === activeTab
  );
  const photos = filteredGallery.filter(item=>item.type==="photo");
  const videos = filteredGallery.filter(item=>item.type==="video");

  const visiblePhotos = showAllPhotos ? photos : photos.slice(0,15);
  const visibleVideos = showAllVideos ? videos : videos.slice(0,15);
  const visibleItems = activeTab === "photo" ? visiblePhotos : visibleVideos;

  const nextImage = () => {
    if (selectedIndex === null) return;
    if (selectedIndex < filteredGallery.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };
  useEffect(() => {

    const fetchGallery = async () => {
    
    const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at",{ascending:false});
    
    if(!error && data){
    setDbGalleryImages(data);
    }
    
    };
    
    fetchGallery();
    
    }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, nextImage, prevImage]);

  /* Swipe navigation */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }

    if (touchEndX.current - touchStartX.current > 50) {
      prevImage();
    }
  };
  const formatDuration = (duration:number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2,"0")}`;
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse of our successful events and celebrations
          </p>
          <div className="flex justify-center gap-6 mb-12">

  <button
    onClick={() => setActiveTab("photo")}
    className={`px-6 py-2 rounded-full font-medium transition ${
      activeTab === "photo"
        ? "bg-amber-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Photos
  </button>

  <button
    onClick={() => setActiveTab("video")}
    className={`px-6 py-2 rounded-full font-medium transition ${
      activeTab === "video"
        ? "bg-amber-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Videos
  </button>

</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleItems.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3] transform transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => setSelectedIndex(index)}
            >
              {image.type === "video" ? (
  <>
    <video
      src={image.url}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      preload="metadata"
      muted
      playsInline
      onLoadedMetadata={(e) => {
        const video = e.currentTarget;
        setVideoDurations(prev => ({
          ...prev,
          [index]: formatDuration(video.duration)
        }));
      }}
    />

    {/* Play Button */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition">
        <Play className="text-white" size={36}/>
      </div>
    </div>

    {/* Duration Badge */}
    {videoDurations[index] && (
      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
        {videoDurations[index]}
      </div>
    )}
  </>
) : (
  <img
    src={image.url}
    alt={image.title}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
  />
)}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm md:text-lg font-semibold line-clamp-2">{image.title}</p>
                <p className="text-amber-400 text-xs md:text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {activeTab === "photo" && photos.length > 15 && !showAllPhotos && (

<div className="flex justify-center mt-10">

<button
onClick={()=>setShowAllPhotos(true)}
className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition shadow-lg"
>

+ View More Photos

</button>

</div>

)}

{activeTab === "video" && videos.length > 15 && !showAllVideos && (

<div className="flex justify-center mt-10">

<button
onClick={()=>setShowAllVideos(true)}
className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition shadow-lg"
>

+ View More Videos

</button>

</div>

)}  
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >

          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          {selectedIndex > 0 && (
            <button
              className="absolute left-6 text-white text-5xl hover:text-amber-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>
          )}

{filteredGallery[selectedIndex].type === "video" ? (
  <video
    src={filteredGallery[selectedIndex].url}
    controls
    autoPlay
    className="max-w-full max-h-[90vh]"
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
  />
) : (
  <img
    src={filteredGallery[selectedIndex].url}
    alt="Gallery preview"
    className="max-w-full max-h-[90vh] object-contain transition-all duration-500"
    onClick={(e) => e.stopPropagation()}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
  />
)}

          {selectedIndex < filteredGallery.length - 1 && (
            <button
              className="absolute right-6 text-white text-5xl hover:text-amber-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>
          )}

        </div>
      )}
    </section>
  );
}