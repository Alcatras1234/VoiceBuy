import { cn } from "@/lib/utils";
import { Mic } from "lucide-react";

interface Props {
    className?: string;
}

export const Footer : React.FC<Props> = ({ className }) => {
    return (
        <footer className={cn('border border-b bg-black text-white py-4 mx-auto h-20 flex items-center justify-center', className)}>
            <div className="text-lg font-bold text-center flex items-center gap-2 justify-center">
                <Mic width={30} height={30} />
                <h1 className="text-2xl uppercase" >VOICEBUY</h1>
                <p className="text-sm text-gray-400 leading-3">Озвуч свой проект</p>
            </div>
        </footer>
    );
}