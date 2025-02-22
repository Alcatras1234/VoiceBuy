import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <div> {/* Отступ сверху, чтобы избежать перекрытия с хедером */}
    <AspectRatio ratio={16 / 9} className="relative bg-muted">
      <Image
        src="https://img3.akspic.ru/crops/3/2/1/2/7/172123/172123-atmosfera-korichnevyj_cvet-seryj_cvet-materialnoe_svojstvo-polutona_i_ottenki-3840x2160.jpg"
        alt="Photo"
        fill
        className="h-full w-full object-cover opacity-90" // Прозрачность
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-100 text-3xl font-bold text-center">
        <div>Дайте голос вашему контенту с нашей профессиональной озвучкой</div>
        <p className="text-sm leading-6 mt-4 text-zinc-150">Множество голосов, один выбор - ваш!</p>
      </div>
    </AspectRatio>
  </div>

  )
}

