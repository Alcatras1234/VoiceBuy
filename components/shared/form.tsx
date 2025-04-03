"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function EmailFormWithButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center text-center z-10 py-4 mb-4">
        <h1 className="text-2xl uppercase font-black">Вам понравились наши голоса?</h1>
        <p className="text-sm text-gray-400 mt-2">Если да, бегом за заказом!</p>
      </div>

      {/* Кнопка, которая открывает модальное окно */}
      <div className="flex justify-center mb-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger>
            <Button className="px-6 py-2 bg-primary text-white">Оставить заявку</Button>
          </DialogTrigger>

          {/* Модальное окно с формой */}
          <DialogContent>
            <DialogTitle>Оставьте свой email</DialogTitle>
            <DialogDescription>
              Заполните форму, чтобы мы могли с вами связаться.
            </DialogDescription>
            <form className="space-y-4">
              <Input placeholder="Ваш email" type="email" required />
              <Button className="w-full">Отправить</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}