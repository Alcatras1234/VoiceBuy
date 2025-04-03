'use client';

import { useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Categories } from "./categories";
import { Play } from 'lucide-react';
import { Pause } from 'lucide-react';

const audioTracks = [
    {
        id: 1,
        title: "Аудиотрек 1",
        category: "Мужские",
        audioUrl: "/path/to/audio1.mp3",
    },
    {
        id: 2,
        title: "Аудиотрек 2",
        category: "Женские",
        audioUrl: "/path/to/audio2.mp3",
    },
    {
        id: 3,
        title: "Аудиотрек 3",
        category: "Детские",
        audioUrl: "/path/to/audio2.mp3",
    },
    {
        id: 4,
        title: "Аудиотрек 4",
        category: "Детские",
        audioUrl: "/path/to/audio2.mp3",
    },
    {
        id: 5,
        title: "Аудиотрек 5",
        category: "Детские",
        audioUrl: "/path/to/audio2.mp3",
    },
    {
        id: 6,
        title: "Аудиотрек 5",
        category: "Детские",
        audioUrl: "/path/to/audio2.mp3",
    },
];


export function CustomProducts() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Все');

    const filteredTracks = selectedCategory === 'Все'
        ? audioTracks
        : audioTracks.filter(track => track.category === selectedCategory);


    return (
        <>
            <div className="flex justify-center items-center z-10 text-2xl font-black mb-2">
                А сейчас, ваш черёд сделать контент краше
            </div>
            <div className="flex justify-center py-10 px-6 mx-auto max-w-screen-xl">
                <Card className="w-full max-w-full bg-gray-50 text-black shadow-lg rounded-lg h-[267.98px]">
                    <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    <CardContent>
                    <div className="relative grid grid-cols-2 gap-4 max-h-[200px] overflow-y-auto">
                            {filteredTracks.map((track) => (
                                <MiniCard key={track.id} track={track} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

interface MiniCardProps {
    track: { id: number; title: string; audioUrl: string };
}

const MiniCard: React.FC<MiniCardProps> = ({ track }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    return (
        <Card className="bg-gray-100 text-black shadow-lg rounded-lg p-4 my-2">
            <div className="flex justify-between items-center">
                <div className="text-lg font-bold">{track.title}</div>
                <button onClick={togglePlay} className="p-2 bg-primary text-white rounded-full">
                    {isPlaying ? <Pause/> : <Play/>}
                </button>
            </div>
            <audio
                ref={audioRef}
                src={track.audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            />
            <div className="w-full bg-gray-200 h-1 mt-2">
                <div
                    className="bg-primary h-full"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </Card>
    );
};