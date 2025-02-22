import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image"

export function WhyWeCards() {
    return (
        <>

            <div className="grid grid-cols-1 gap-6 px-6 py-10 mx-auto max-w-screen-xl">
                <Card className="relative w-full max-w-full bg-stone-800 text-white shadow-lg rounded-lg h-[267.98px]">
                    <div className="absolute inset-0">
                        <Image
                            src="https://img2.akspic.ru/crops/4/7/3/4/3/134374/134374-glaz-gadzhet-zvuk-zvukovoe_oborudovanie-krug-3840x2160.jpg"
                            alt="Card Background"
                            layout="fill"
                            className="object-cover opacity-40 rounded-lg"
                        />
                    </div>
                    {/* Баннер сверху с контентом */}
                    <div className="relative z-10  px-6 sm:pt-2 md:pt-10 ">
                        <CardHeader>
                            <CardTitle className="font-bold text-[clamp(1.0rem,_5vw,_2.5rem)">Почему именно мы?</CardTitle>
                        </CardHeader>
                        <CardContent className="absolute text-[clamp(0.5rem,_5vw,_2.5rem) mb-2">
                            <ul className="list-disc pl-3 py-1 text-sm font-semibold">
                                <li>Мы предлагаем не просто озвучку, а настоящее искусство голоса, которое сделает ваш контент уникальным.</li>
                                <li>Сотрудничество с топовыми дикторами, прошедшими обучение и имеющими опыт работы с крупнейшими мировыми брендами.</li>
                                <li>Мы гарантируем точность, качество и соответствие вашему запросу. Озвучка, которая поднимет ваш проект на новый уровень!</li>
                            </ul>
                        </CardContent>
                    </div>
                </Card>
                <Card className="relative w-full max-w-full  bg-stone-800 text-white shadow-lg rounded-lg h-[267.98px]">
                    <div className="absolute inset-0">
                        <Image
                            src="https://img3.akspic.ru/crops/5/4/5/4/3/134545/134545-televideniye-vershina-zvuk-blog-youtub-3840x2160.jpg"
                            alt="Card Background"
                            layout="fill"
                            className="object-cover opacity-40 rounded-lg"
                        />
                    </div>
                    <div className="relative z-10 px-6 sm:pt-2 md:pt-10">
                        <CardHeader>
                            <CardTitle className="font-bold text-lg text-[clamp(1.0rem,_5vw,_2.5rem)" >Озвучка, которая звучит на высшем уровне</CardTitle>
                        </CardHeader>
                        <CardContent className="absolute text-[clamp(0.5rem,_5vw,_2.5rem) mb-2">
                            <ul className="list-disc pl-3 py-1 text-sm font-semibold">
                                <li >Наши топовые дикторы обладают многолетним опытом работы в радио, телевидении и кино.</li>
                                <li >Независимо от того, нужен ли вам строгий корпоративный стиль или живой и энергичный голос для рекламы, у нас есть идеальный выбор.</li>
                                <li> Мы понимаем, как важно передать правильную атмосферу и эмоции, и наши дикторы сделают это идеально.</li>
                            </ul>
                        </CardContent>
                    </div>
                </Card>
                <Card className="relative w-full max-w-full bg-stone-800 text-white shadow-lg rounded-lg h-[267.98px]">
                    <div className="absolute inset-0">
                        <Image
                            src="https://img3.akspic.ru/crops/2/4/3/4/3/134342/134342-audiosignal-elektronnyj_muzykalnyj_instrument-mikshernyj_pult-disk_zhokej-zapis-3840x2160.jpg"
                            alt="Card Background"
                            layout="fill"
                            className="object-cover opacity-40 rounded-lg"
                        />
                    </div>
                    <div className="relative z-10 px-6 sm:pt-2 md:pt-10">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-[clamp(1.0rem,_5vw,_2.5rem)" >Любая сложность</CardTitle>
                        </CardHeader>
                        <CardContent className="absolute text-[clamp(0.5rem,_5vw,_2.5rem) mb-2">Мы готовы озвучить проекты любой сложности, от рекламных роликов до крупных аудиопроектов.
                        </CardContent>
                    </div>
                </Card>
            </div >

        </>
    );
}
