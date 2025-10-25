'use client';
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ServiceCardProps {
  title: string
  price: string
  image: string
  onCardClick: () => void;
  tailoringCategory?: string;
}

export default function ServiceCard({ title, price, image, onCardClick, tailoringCategory }: ServiceCardProps) {
  const router = useRouter();

  const handleBookAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    
    // Save the selected tailoring type and details to localStorage
    if (tailoringCategory) {
      localStorage.setItem("selectedTailoringType", tailoringCategory);
      localStorage.setItem("selectedTailoringDetails", title);
    }
    
    // Navigate to appointment page
    router.push("/appointment");
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer pb-3"
      
    >
        <div onClick={onCardClick}>
      <div className="relative h-80 bg-gray-200">
      
        <Image 
        src={image || "/placeholder.svg"} 
        alt={title}
        fill 
        className="object-cover" 
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-black text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-xs mb-4">Perfect for formal occasions</p>
        <p className="text-lg font-bold  text-gray-600">{price}</p>
        </div>
        <Link
        href="/appointment"
        className="w-60 mx-auto block bg-black text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        onClick={handleBookAppointment}
      >
        Book Appointment
      </Link>
      </div>
    </div>
  )
}
