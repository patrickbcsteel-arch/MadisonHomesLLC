import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/IMG_6661.JPG', alt: 'Project photo' },
  { src: '/IMG_6239.JPG', alt: 'Project photo' },
  { src: '/IMG_6240.JPG', alt: 'Project photo' },
  { src: '/IMG_6244.JPG', alt: 'Project photo' },
  { src: '/IMG_6245.JPG', alt: 'Project photo' },
  { src: '/IMG_6453.JPG', alt: 'Project photo' },
  { src: '/IMG_6454.JPG', alt: 'Project photo' },
  { src: '/att.0itASVEaKHT_dr0cYACjzinllcHkZLvnGVhTPU6jBY4.JPG', alt: 'Project photo' },
  { src: '/att.3D-DYI_RRVZgP8-o3rxz86xo3H5W3jFa7m5bRM5Tnpw (1).JPG', alt: 'Project photo' },
  { src: '/att.eEJ7more4lQMEa1zppg8w8grmhUGNG2q6JaQKtju1VQ.JPG', alt: 'Project photo' },
  { src: '/att.jBarDvmabaR024yDAD9SkVS80-V9dWwqepurzZj_g94.JPG', alt: 'Project photo' },
  { src: '/att.Lv_wYvHjTT8YVUCLte_SEh0fSUAyNjIdvgbPwfHyUBs.JPG', alt: 'Project photo' },
  { src: '/att.plB1b9oRjqovZr4XF2W7FFzDe1oBDMzBhsO4pMSlQtY.JPG', alt: 'Project photo' },
  { src: '/att.qRtoB9lLDAkDeq3wDS-zAsc-7vw-5A3RCF1ATSEgwjU.dat.JPEG', alt: 'Project photo' },
  { src: '/att.UZsxE3wWaG2ZywkADn8rg5MRu9eAGk7p0LbNvjPK4js.dat.JPEG', alt: 'Project photo' },
  { src: '/att.W6zklnJr5vFVcBvHFXoOuHUmR9dy6CxN8aw-CiF-PpY.dat.JPEG', alt: 'Project photo' },
  { src: '/att.xK7JWSGjCnnI99QLVpJY8wZJXvRuIkEJqJedVyqtOQw.dat.JPEG', alt: 'Project photo' },
  { src: '/att.ZiFmXpUr9GlP6mDGLWbSt-JAAJECkXv9cIUmdVAf9NE.JPG', alt: 'Project photo' },
  { src: '/att.ZjyksUfflgkncTgRLzP80mgqIWWQJcAdBgA3mqxLel8.JPG', alt: 'Project photo' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed metal construction projects across Ohio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#1a1f3a] transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-[#1a1f3a] transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-[#1a1f3a] transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-gray-400">
                {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
