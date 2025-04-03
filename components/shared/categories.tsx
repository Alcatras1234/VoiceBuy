"use client";

import {cn} from "@/lib/utils"
import React, { useState } from 'react';

interface Props {
    className?: string,
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const cats = ['Все', 'Мужские', 'Женские', 'Детские'];
export const Categories: React.FC<Props> = ({className, selectedCategory, setSelectedCategory}) => {

    const handleChangeCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className={cn('flex justify-end  inline-flex gap-1 bg-gray-50 rounded-2xl px-10 py-3', className)}>
            {
                cats.map((cat, index) => {
                    return (
                        <a className={cn
                        ('flex items-center font-bold h-11 rounded-2xl px-5',
                            selectedCategory === cat && 'bg-white shadow-md shadow-gray-200 text-primary' 

                        )} 
                        key={index}>
                            <button onClick={() => handleChangeCategory(cat)}>
                                {cat}
                            </button>
                        </a>
                    )
                })
            }
        </div>
    )
}

